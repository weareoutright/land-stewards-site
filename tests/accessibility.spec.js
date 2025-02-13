// import { test, expect } from "@playwright/test";
// import { injectAxe, checkA11y } from "@axe-core/playwright";

// test.describe("Accessibility Tests", () => {
//   test("should have no automatically detectable accessibility violations", async ({
//     page,
//   }) => {
//     await page.goto("http://localhost:3000"); // Your Next.js app URL
//     await injectAxe(page);
//     await checkA11y(page);
//   });

//   test("should have accessible ARIA roles and labels", async ({ page }) => {
//     await page.goto("http://localhost:3000");

//     const button = page.getByRole("button", { name: "Submit" });
//     await expect(button).toBeVisible();

//     const heading = page.getByRole("heading", { level: 1 });
//     await expect(heading).toHaveText("Welcome");
//   });

//   test("should capture accessibility snapshot", async ({ page }) => {
//     await page.goto("http://localhost:3000");
//     const snapshot = await page.accessibility.snapshot();
//     console.log(snapshot);
//   });
// });
