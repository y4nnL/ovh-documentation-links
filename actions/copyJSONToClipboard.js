import clipboardy from "clipboardy";

export const copyJSONToClipboard = async ({ json }) =>
  clipboardy.write(JSON.stringify(json, null, 2));
