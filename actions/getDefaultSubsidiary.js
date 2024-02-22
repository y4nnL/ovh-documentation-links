import { OVH_DEFAULT_SUBSIDIARY } from "../constants.js";

export const getDefaultSubsidiary = ({
  subsidiaries,
  options: { defaultSubsidiary },
}) =>
  subsidiaries.includes(defaultSubsidiary)
    ? defaultSubsidiary
    : OVH_DEFAULT_SUBSIDIARY;
