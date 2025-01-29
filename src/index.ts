import pupeteer from "puppeteer";
import { expect } from "@playwright/test";

const puppeteerTest = async () => {
  const browser = await pupeteer.launch();
  const page = await browser.newPage();

  await page.goto("https://www.google.com");

  const title = await page.title();

  await page.screenshot({ path: "google.png" });

  expect(title).toBe("Google");

  console.log(title);

  await browser.close();
};

puppeteerTest();
