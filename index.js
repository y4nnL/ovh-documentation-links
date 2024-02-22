#!/usr/bin/env node

import {
  parseCommandOptions,
  fetchSubsidiaries,
  getDefaultSubsidiary,
  openURL,
  collectAnchors,
  buildJSON,
  closeURL,
  copyJSONToClipboard,
} from "./actions/index.js";

(async () => {
  try {
    const buffer = {
      options: parseCommandOptions(),
    };

    console.log("Fetching subsidiaries...");
    buffer.subsidiaries = await fetchSubsidiaries(buffer);
    console.log("Fetched subsidiaries : %s", buffer.subsidiaries.join(", "));

    buffer.defaultSubsidiary = getDefaultSubsidiary(buffer);
    if (buffer.defaultSubsidiary !== buffer.options.defaultSubsidiary) {
      console.log(
        'Default subsidiary "%s" does not exist, fallback to "%s"',
        buffer.options.defaultSubsidiary,
        buffer.defaultSubsidiary
      );
    }

    console.log("Opening URL...");
    buffer.navigation = await openURL(buffer);
    console.log("URL has been opened");

    console.log("Collecting anchors...");
    buffer.anchors = await collectAnchors(buffer);
    if (buffer.anchors.length) {
      console.log(
        "%s anchors have been collected : %s",
        buffer.anchors.length,
        buffer.anchors.map(({ locale }) => locale).join(", ")
      );
    } else {
      console.log("No anchors have been collected");
    }

    buffer.json = buildJSON(buffer);

    console.log("Closing URL...");
    await closeURL(buffer);
    console.log("URL has been closed");

    await copyJSONToClipboard(buffer);
    console.info("The following JSON object has been copied to the clipboard");
    console.info(buffer.json);
  } catch (error) {
    console.error(error);
  }
})();
