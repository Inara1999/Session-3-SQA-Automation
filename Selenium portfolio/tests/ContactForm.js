const { Builder, By } = require('selenium-webdriver');
const fs = require('fs');
require('chromedriver');

async function contactForm() {

    let driver = await new Builder().forBrowser('chrome').build();

    try {

        // Open Website
        await driver.get('https://personal-profile-rho-six.vercel.app/');

        // Maximize Browser
        await driver.manage().window().maximize();

        // Fill Contact Form
        await driver.findElement(By.id('name')).sendKeys('Inara');
        await driver.findElement(By.id('email')).sendKeys('inara@test.com');
        await driver.findElement(By.id('message')).sendKeys('Selenium Automation Testing');

        // Verify Form Data
        let email = await driver.findElement(By.id('email')).getAttribute('value');

        if (email === 'inara@test.com') {
            console.log("✅ Form Verified Successfully");
        } else {
            console.log("❌ Form Verification Failed");
        }

        // Capture Screenshot
        let image = await driver.takeScreenshot();
        fs.writeFileSync('ContactForm.png', image, 'base64');

        console.log("📸 Screenshot Captured");

        // Wait 5 Seconds
        await driver.sleep(5000);

    } catch (error) {

        console.log(error);

    } finally {

        await driver.quit();

    }

}

contactForm();