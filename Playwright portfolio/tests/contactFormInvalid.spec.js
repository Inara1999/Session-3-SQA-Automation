import { test, expect } from '@playwright/test';

test('Verify invalid form validation', async ({page}) => {

    await page.goto('https://personal-profile-rho-six.vercel.app/');


    await page.locator('#email')
    .fill('abc');


    await page.click('button[type="submit"]');


    await expect(page.locator('#email'))
    .toHaveJSProperty('validity.valid', false);

});