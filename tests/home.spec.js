import { test, expect } from "@playwright/test";

test.describe("Homepage Tests", () => {
  test("should have the correct title", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Land Stewards Foundation/);
  });

  test("should display the main heading", async ({ page }) => {
    await page.goto("/");
    const heading = page.locator("h1");
    await expect(heading).toHaveText("Cultivating Thriving Landscapes");
  });

  test("Clicking menu button should toggle the sidebar", async ({ page }) => {
    // Navigate to your component or page where Nav is rendered
    await page.goto("http://localhost:3000");

    // Ensure sidebar is present in the DOM
    await page.waitForSelector(".sidebar");
    const sidebar = page.locator(".sidebar");

    // ✅ Get the dynamically computed `right` value
    const computedRight = await sidebar.evaluate((el) => {
      return window.getComputedStyle(el).right;
    });

    // ✅ Check that the sidebar is off-screen initially using its actual computed `right`
    await expect(sidebar).toHaveCSS("right", computedRight);

    // Click the menu button
    await page.waitForSelector(".menu-btn");
    await page.click(".menu-btn");

    // ✅ Assert that the sidebar is now visible
    await expect(sidebar).toBeVisible();
    await expect(sidebar).toHaveCSS("right", "0px");

    // Click the menu button again to close
    await page.waitForSelector(".close-button");
    await page.click(".close-button");

    // ✅ Ensure the sidebar is back off-screen using the actual computed value
    await expect(sidebar).toHaveCSS("right", computedRight);
  });
});
