import { test, expect } from '@playwright/test';

test('Verify important UI elements', async ({page}) => {

    await page.goto('https://personal-profile-rho-six.vercel.app/');


    // Profile image
    await expect(page.locator('img').first()).toBeVisible();
    // Main heading
    await expect(page.locator('h1')).toBeVisible();
    // Skills section
    await expect(page.getByText('Skills & Toolbox')).toBeVisible();

    // Contact section
    await expect(page.getByText("Let's Connect")).toBeVisible();

});