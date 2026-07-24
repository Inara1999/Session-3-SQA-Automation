import { test, expect } from '@playwright/test';

test('Verify contact form with valid data', async ({page}) => {

    await page.goto('https://personal-profile-rho-six.vercel.app/');


    await page.fill('#name','Inara');

    await page.fill('#email','inara@test.com');

    await page.fill('#message','Playwright Testing');


    await page.click('button[type="submit"]');

});