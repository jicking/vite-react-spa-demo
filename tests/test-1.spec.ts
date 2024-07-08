import { test } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('main').click();
  await page.getByRole('link', { name: 'Signin' }).click();
  await page.getByLabel('Username:').click();
  await page.getByLabel('Username:').fill('Test');
  await page.getByRole('button', { name: 'Signin' }).click();
  await page.getByRole('heading', { name: 'Test\'s Dashboard' }).click();
  await page.getByRole('button', { name: 'Signout' }).click();
  await page.getByRole('heading', { name: 'Signin' }).click();
  await page.getByRole('link', { name: 'Signin' }).click();
  await page.getByRole('link', { name: 'About' }).click();
  await page.getByRole('link', { name: 'Signin' }).click();
  await page.goto('http://localhost:3000/app');
  await page.goto('http://localhost:3000/account/signin?redirect=%2Fapp');
  await page.getByRole('heading', { name: 'Signin' }).click();
  await page.getByLabel('Username:').click();
  await page.getByLabel('Username:').fill('test');
  await page.getByRole('button', { name: 'Signin' }).click();
  await page.getByRole('heading', { name: 'Test\'s Dashboard' }).click();
  await page.getByRole('button', { name: 'Signout' }).click();
  await page.getByRole('heading', { name: 'Signin' }).click();
});