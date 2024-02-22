import { DEFAULT_SUBSIDIARY_KEY, SUBSIDIARY_MAP } from "../constants.js";

const getURL = ({ subsidiary, defaultSubsidiary, anchors }) =>
  subsidiary === DEFAULT_SUBSIDIARY_KEY
    ? getURL({ subsidiary: defaultSubsidiary, anchors })
    : anchors.find(
        ({ locale }) =>
          locale === SUBSIDIARY_MAP[subsidiary] ||
          locale.split("-").pop().toUpperCase() === subsidiary
      )?.url;

export const buildJSON = ({
  subsidiaries,
  anchors,
  options: { defaultSubsidiary },
}) =>
  subsidiaries.reduce(
    (result, subsidiary) => ({
      ...result,
      [subsidiary]: getURL({ subsidiary, defaultSubsidiary, anchors }),
    }),
    {}
  );
