export const DEFAULT_SUBSIDIARY_KEY = "DEFAULT";
export const ANCHORS_DELAY = 2000;
export const ANCHOR_NAME_REGEXP = /^Flagz\/(.+?)$/;
export const ANCHORS_SELECTOR = "#changeLanguage a";
export const OVH_DEFAULT_SUBSIDIARY = "WE";
export const OVH_API_SUBSIDIARY_ENUM_MODEL = "nichandle.OvhSubsidiaryEnum";

export const OVH_API_SCHEMA_ENDPOINTS = [
  "https://eu.api.ovh.com/1.0/cloud.json",
  "https://ca.api.ovh.com/1.0/cloud.json",
  "https://api.us.ovhcloud.com/1.0/cloud.json",
];

export const SUBSIDIARY_MAP = {
  WE: "world",
  EU: "worldeuro",
  WS: "es",
  ES: "es-es",
  QC: "fr-ca",
};
