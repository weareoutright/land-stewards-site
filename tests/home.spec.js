import { test, expect } from "@playwright/test";

test("homepage should have the correct title", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Land Stewards Foundation/);
});
