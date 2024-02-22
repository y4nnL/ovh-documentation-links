import { ANCHORS_SELECTOR, ANCHOR_NAME_REGEXP } from "../constants.js";

export const collectAnchors = async ({ navigation: { page } }) =>
  (
    await Promise.all(
      Array.from(await page.$$(ANCHORS_SELECTOR)).map(async (anchor) => ({
        href: await anchor.getAttribute("href"),
        name: await anchor.getAttribute("name"),
      }))
    )
  )
    .filter((anchor) => ANCHOR_NAME_REGEXP.test(anchor.name))
    .map(({ href, name }) => ({
      url: href,
      locale: name.match(ANCHOR_NAME_REGEXP)[1],
    }));
