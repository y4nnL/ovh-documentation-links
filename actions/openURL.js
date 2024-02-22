import { chromium } from "playwright";
import { ANCHORS_DELAY } from "../constants.js";

export const openURL = async ({ options: { url } }) => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto(url);
  await new Promise((resolve) => setTimeout(resolve, ANCHORS_DELAY));
  return { browser, page };
};
