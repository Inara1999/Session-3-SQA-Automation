const { Builder, By, until } = require('selenium-webdriver');
const fs = require('fs');
require('chromedriver');

async function websiteNavigation() {

    let driver = await new Builder().forBrowser('chrome').build();

    try {

        // Open Website
        await driver.get('https://personal-profile-rho-six.vercel.app/');

        // Maximize Browser
        await driver.manage().window().maximize();

        // Verify Title
        let title = await driver.getTitle();

        if (title.includes('INARA')) {
            console.log("✅ Title Verified");
        } else {
            console.log("❌ Title Verification Failed");
        }

        // Click About
        await driver.findElement(By.linkText('About')).click();

        // Verify About Section
        await driver.wait(until.elementLocated(By.id('about')), 5000);

        console.log("✅ About Section Opened Successfully");

        // Capture Screenshot
        let image = await driver.takeScreenshot();
        fs.writeFileSync('WebsiteNavigation.png', image, 'base64');

        console.log("📸 Screenshot Captured");

        // Wait 5 Seconds
        await driver.sleep(5000);

    } catch (error) {

        console.log(error);

    } finally {

        await driver.quit();

    }

}

websiteNavigation();