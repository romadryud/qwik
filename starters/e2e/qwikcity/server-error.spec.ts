import { test } from "@playwright/test";

test.describe.only("Qwik City server Error boundary", () => {
  test("should catch error", async ({ page }) => {
    await page.goto("/qwikcity-test/server-error");

    page.getByRole("button", { name: "Throw error" }).click();

    await page.waitForSelector(
      'div:has-text("Caught error: Hello from server action")',
    );
  });
});
