import { test } from '@playwright/test';

test('preLoginNavigation', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('heading', { name: 'This is home page' }).click()
  await page.getByRole('link', { name: 'Home' }).click()
  await page.getByRole('heading', { name: 'This is home page' }).click()
  await page.getByRole('link', { name: 'About' }).click()
  await page.getByRole('heading', { name: 'About' }).click()
  await page.getByRole('link', { name: 'Signin' }).click()
  await page.getByRole('heading', { name: 'Signin' }).click()
})