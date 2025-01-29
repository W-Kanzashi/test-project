import { test, expect } from "@playwright/test";

test("Validate page", async ({ page }) => {
  await page.goto("https://www.google.com");

  const title = await page.title();

  expect(title).toBe("Google");

  console.log(title);
});

// test("Click a button and validate result", async ({ page }) => {
//   await page.goto("https://example.com");
//
//   const button = await page.locator("a");
//
//   await button.click();
//
//   setTimeout(async () => {
//     const result = await page.locator("h1");
//
//     expect(result).toHaveText("Example Domains");
//   }, 1000);
// });

test("Test page load", async ({ page }) => {
  const startTime = Date.now();

  await page.goto("https://www.amazon.com");

  const endTime = Date.now();

  console.log(">>> Load time", endTime - startTime, "ms");
});

// test("Test form submit", async ({ page }) => {
//   await page.goto("https://www.google.com");
//
//   await page.locator("textarea[name=q]").fill("Playwright");
//
//   await page.locator("input[type=submit]").locator(".gNO89b").click();
//
//   await page.waitForURL("https://www.google.com/search*");
//
//   const result = await page.locator("h3").textContent();
//
//   expect(result).toBe("Playwright");
// });

test("Page performance", async ({ page }) => {
  await page.goto("https://www.amazon.fr/");

  const navigationTimingJson = await page.evaluate(() =>
    JSON.stringify(performance.getEntriesByType("navigation")),
  );

  const navigationTiming = JSON.parse(navigationTimingJson);
  console.log(navigationTiming);
});
