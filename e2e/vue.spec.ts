import { test, expect } from "@playwright/test";

/*
 * See here how to get started:
 * https://playwright.dev/docs/intro
 */
test.describe("visits the app root url", () => {
  test("should display the correct title", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByText("You did it!")).toBeVisible();
  });
});
