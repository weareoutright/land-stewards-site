import { test, expect } from "@playwright/test";

test.describe("Global Tests", () => {
  test("Check font family for all heading elements", async ({ page }) => {
    // Navigate to the page where headings are rendered
    await page.goto("http://localhost:3000"); // Adjust URL as needed

    // Define the expected font families (modify as needed)
    const expectedFonts = ['"PP Eiko", serif', '"Red Hat Text", sans-serif'];

    // Loop through each heading level (h1 - h6)
    for (const tag of ["h1", "h2", "h3", "h4", "h5", "h6"]) {
      const headings = page.locator(tag);

      // ✅ Check if at least one instance exists before asserting
      const count = await headings.count();
      if (count === 0) {
        console.log(`Skipping ${tag} - No elements found.`);
        continue; // Skip this heading level if none exist
      }

      // ✅ Loop through all instances of the heading and check font-family
      for (let i = 0; i < count; i++) {
        const fontFamily = await headings
          .nth(i)
          .evaluate((el) => window.getComputedStyle(el).fontFamily);

        // ✅ Assert that the font is one of the expected ones
        expect(expectedFonts).toContain(fontFamily);
      }
    }
  });

  test("Check font family for all non-header text elements", async ({
    page,
  }) => {
    // Navigate to the page where text is rendered
    await page.goto("http://localhost:3000"); // Adjust URL as needed

    // Define the expected font families (modify as needed)
    const expectedFonts = [
      '"PP Eiko", serif',
      '"Red Hat Text", sans-serif',
      '"Red Hat Mono", monospace',
    ];

    // Select all non-header text elements (modify as needed)
    const textElements = page.locator(".content");

    // ✅ Check if at least one matching element exists
    const count = await textElements.count();
    if (count === 0) {
      console.log("Skipping test - No non-header text elements found.");
      return; // Exit the test early if there are no elements
    }

    // ✅ Loop through all instances of text elements and check font-family
    for (let i = 0; i < count; i++) {
      const element = textElements.nth(i);

      // ✅ Ensure the element exists and is visible before testing
      if (!(await element.isVisible())) {
        console.log(`Skipping element at index ${i} - Not visible.`);
        continue; // Skip invisible elements
      }

      // ✅ Retrieve computed font-family
      const fontFamily = await element.evaluate(
        (el) => window.getComputedStyle(el).fontFamily
      );

      // ✅ Assert that the font is one of the expected ones
      expect(expectedFonts).toContain(fontFamily);
    }
  });
});
