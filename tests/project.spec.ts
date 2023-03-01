import { expect, test } from "@playwright/test";
import projects from "../src/data/projects.json" assert { type: "json" };

// Navigation tests

test.describe('Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4173/projects');
  });

  test('should redirect to home page', async ({ page }) => {
    await page.getByRole('link', { name: 'Menu' }).click();
    await page.getByRole('listitem').filter({ hasText: 'Home' }).getByRole('link', { name: 'Home' }).click();
  
    await expect(page).toHaveURL('http://localhost:4173');
  });
  
  test('should redirect to projects page', async ({ page }) => {
    await page.getByRole('link', { name: 'Menu' }).click();
    await page.getByRole('link', { name: 'Portfolio' }).click();
  
    await expect(page).toHaveURL('http://localhost:4173/projects');
  });
  
  test('should redirect to about page', async ({ page }) => {
    await page.getByRole('link', { name: 'Menu' }).click();
    await page.getByRole('link', { name: 'About Me' }).click();
  
    await expect(page).toHaveURL('http://localhost:4173/about');
  });
  
  test('should redirect to contact page', async ({ page }) => {
    await page.getByRole('link', { name: 'Menu' }).click();
    await page.getByRole('link', { name: 'Contact Me' }).click();
  
    await expect(page).toHaveURL('http://localhost:4173/contact');
  });
  
  test('should redirect to tools page', async ({ page }) => {
    await page.getByRole('link', { name: 'Menu' }).click();
    await page.getByRole('link', { name: 'Tools / Gear / Softwares I use' }).click();
  
    await expect(page).toHaveURL('http://localhost:4173/tools');
  });
});

// Projects page projects tests

test.describe('Portfolio page projects', () => {
  projects.forEach(project => {
    test(`should contain ${project.title} titles`, async ({ page }) => {
      await page.goto(`http://localhost:4173/projects/${project.route}`);
      const title = await page.locator('h1').textContent();
      const secondTitle = await page.locator('h3').textContent();
      const subTitle = await page.locator('h5').textContent();

      await expect(title).toBe(project.title);
      await expect(secondTitle).toBe(project.title);
      await expect(subTitle).toBe(project.phrase);
    });

    test(`should contain ${project.title} description`, async ({ page }) => {
      await page.goto(`http://localhost:4173/projects/${project.route}`);
      const description = page.getByText(project.description)

      await expect(description).toHaveCount(1);
    });

    test(`should contain ${project.title} tags`, async ({ page }) => {
      await page.goto(`http://localhost:4173/projects/${project.route}`);
      for (const tag of project.tags) {
        const tagElement = await page.getByText(tag.name, { exact: true });

        await expect(tagElement).toHaveCount(1);
      }
    });

    test(`should contain ${project.title} links`, async ({ page }) => {
      await page.goto(`http://localhost:4173/projects/${project.route}`);
      for (const link of project.links) {
        const linkElement = await page.getByRole('link', { name: link.name });

        await expect(linkElement).toHaveCount(1);
      }
    });

    test(`should contain ${project.title} quotes`, async ({ page }) => {
      await page.goto(`http://localhost:4173/projects/${project.route}`);
      for (const article of project.articles) {
        const articleElement = page.getByText(article.quote);
  
        await expect(articleElement).toHaveCount(1);
      }
    });
  });
});
