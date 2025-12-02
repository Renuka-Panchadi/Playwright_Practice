import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/?zx=1763712144550&no_sw_cr=1');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('Satya Nadella');
  await page.locator('.o3j99.LLD4me').click();
  await page.getByRole('button', { name: 'Google Search' }).click();
  await page.getByRole('link', { name: 'Satya Nadella Wikipedia https' }).click();
  await page.getByRole('link', { name: 'Indian-American' }).click();
});