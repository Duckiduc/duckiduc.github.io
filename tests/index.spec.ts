import { expect, test } from "@playwright/test";
import projects from "../src/data/projects.json" assert { type: "json" };

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:4173/");
});

// Navigation tests

test.describe("Navigation", () => {
  test("should redirect to home page", async ({ page }) => {
    await page.getByRole("link", { name: "Menu" }).click();
    await page.getByRole("link", { name: "Home" }).click();

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

// Home page tests

test.describe("Home page", () => {
  test("should contain code.", async ({ page }) => {
    const title = page.getByText("code.");

    await expect(title).toHaveText("code.");
  });

  test("should contain webdesign.", async ({ page }) => {
    const title = page.getByText("webdesign.");

    await expect(title).toHaveText("webdesign.");
  });

  test("should contain 3D.", async ({ page }) => {
    const title = page.getByText("3D.");

    await expect(title).toHaveText("3D.");
  });
});

// Home page projects tests

test.describe("Home page projects", () => {
  projects.forEach((project) => {
    test(`should contain ${project.title} project`, async ({ page }) => {
      const projectCard = page.getByRole("link", { name: `${project.title}` });

      await expect(projectCard).toHaveCount(1);
    });
  });

  projects.forEach((project) => {
    test(`should redirect to ${project.title} project page`, async ({ page }) => {
      await page.getByRole("link", { name: `${project.title}` }).click();

      await expect(page).toHaveURL(`http://localhost:4173/projects/${project.route}`);
    });
  });
});
