// @ts-check
const { test, expect } = require('@playwright/test');

test('All types of tests', async ({ page }) => {
  await page.goto('https://playwright.dev/docs/intro');

  await expect(page).toHaveTitle(/Playwright/);
  await expect(page).toHaveTitle(/Getting started | Playwright/);

  expect(page.locator('a[label="GitHub repository"]')).toHaveAttribute('href', 'https://github.com/microsoft/playwright');

  const traceViewer = page.locator('a[href="/docs/trace-viewer"] >> text=Trace Viewer'); 
  expect(traceViewer).toBeVisible();
  expect(traceViewer).toHaveCount(1);
  
  await traceViewer.click();
  expect(page).toHaveURL(/docs\/trace-viewer/);

  expect(page.locator('.tabs-container >> role=tab >> text=TypeScript')).toHaveClass('tabs__item tabItem_LplD tabs__item--active');

  await page.locator('.tabs-container >> role=tab >> text=Library').click()
  expect(page.locator('.tabs-container >> role=tab >> text=Library')).toHaveClass('tabs__item tabItem_LplD tabs__item--active');

  const leftMenuBar = page.locator(".menu .thin-scrollbar");
  expect(leftMenuBar).toBeDefined();

  const getStarted = page.locator('text="Getting started"');
  await expect(getStarted).toHaveCount(1);

  // Expect an attribute "to be strictly equal" to the value.
  //await expect(getStarted).toHaveAttribute('href', '/docs/intro');

  // Click the get started link.
  //await getStarted.click();
  
  // Expects the URL to contain intro.
  //await expect(page).toHaveURL(/.*intro/);
});
