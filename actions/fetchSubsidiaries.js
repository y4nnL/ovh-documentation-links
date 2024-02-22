import {
  DEFAULT_SUBSIDIARY_KEY,
  OVH_API_SCHEMA_ENDPOINTS,
  OVH_API_SUBSIDIARY_ENUM_MODEL,
} from "../constants.js";

export const fetchSubsidiaries = async ({
  options: { noDefaultSubsidiary },
}) => [
  ...(!noDefaultSubsidiary && [DEFAULT_SUBSIDIARY_KEY]),
  ...Array.from(
    await Promise.all(
      OVH_API_SCHEMA_ENDPOINTS.map(async (endpoint) => {
        const response = await fetch(endpoint);
        const schema = await response.json();
        return schema.models[OVH_API_SUBSIDIARY_ENUM_MODEL].enum;
      })
    )
  )
    .flat()
    .filter((item, index, list) => list.indexOf(item) === index) // uniq
    .sort(),
];
