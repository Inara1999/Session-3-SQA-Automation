import { test, expect } from '@playwright/test';

test('Verify website loads and title', async ({ page }) => {

    // Open website
    await page.goto('https://personal-profile-rho-six.vercel.app/');

    // Verify page title
    await expect(page).toHaveTitle(/Inara/i);

});