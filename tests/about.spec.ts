import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:4173/about");
});

// Navigation tests

test.describe("Navigation", () => {
  test("should redirect to home page", async ({ page }) => {
    await page.getByRole("link", { name: "Menu" }).click();
    await page
      .getByRole("listitem")
      .filter({ hasText: "Home" })
      .getByRole("link", { name: "Home" })
      .click();

    await expect(page).toHaveURL("http://localhost:4173");
  });

  test("should redirect to projects page", async ({ page }) => {
    await page.getByRole("link", { name: "Menu" }).click();
    await page.getByRole("link", { name: "Portfolio" }).click();

    await expect(page).toHaveURL("http://localhost:4173/projects");
  });

  test("should redirect to about page", async ({ page }) => {
    await page.getByRole("link", { name: "Menu" }).click();
    await page.getByRole("link", { name: "About Me" }).click();

    await expect(page).toHaveURL("http://localhost:4173/about");
  });

  test("should redirect to contact page", async ({ page }) => {
    await page.getByRole("link", { name: "Menu" }).click();
    await page.getByRole("link", { name: "Contact Me" }).click();

    await expect(page).toHaveURL("http://localhost:4173/contact");
  });

  test("should redirect to tools page", async ({ page }) => {
    await page.getByRole("link", { name: "Menu" }).click();
    await page.getByRole("link", { name: "Tools / Gear / Softwares I use" }).click();

    await expect(page).toHaveURL("http://localhost:4173/tools");
  });
});

// About page tests

test.describe("About page projects", () => {
  test('should have "About Me" as title', async ({ page }) => {
    const title = page.locator('h1:text-is("About Me")');

    await expect(title).toHaveCount(1);
  });

  test("should contain me image", async ({ page }) => {
    const meImage = page.locator("img").nth(2).first();
    const src = await meImage.getAttribute("src");

    expect(src).toBe("img/me.jpg");
  });

  test("should contain name", async ({ page }) => {
    const title = page.locator('h3:text-is("Duc-Thomas Nguyen")');

    await expect(title).toHaveCount(1);
  });
});
