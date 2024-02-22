import { Command } from "commander";
import { OVH_DEFAULT_SUBSIDIARY } from "../constants.js";

export const parseCommandOptions = () => {
  const command = new Command();

  command
    .version("1.0.0")
    .description("Fetch all the OVHcloud website documentation links")
    .option("-u, --url <value>", "URL to the website's documentation")
    .option(
      "-d, --default-subsidiary <value>",
      `Default subsidiary of the documentation. Default to "${OVH_DEFAULT_SUBSIDIARY}"`,
      OVH_DEFAULT_SUBSIDIARY
    )
    .option("--no-default-subsidiary", "No default documentation", false)
    .parse(process.argv);

  const options = command.opts();

  if (!options.url) {
    throw new Error("The -u or --url option is required");
  }

  return options;
};
