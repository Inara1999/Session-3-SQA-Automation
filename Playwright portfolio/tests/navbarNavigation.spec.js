import { test, expect } from '@playwright/test';

test('Verify navbar navigation', async ({page}) => {

    await page.goto('https://personal-profile-rho-six.vercel.app/');


    await page.getByRole('link', {name:'About', exact:true})
    .click();


    await expect(page.locator('#about'))
    .toBeVisible();

});