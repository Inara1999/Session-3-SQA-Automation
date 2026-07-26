const { remote } = require("webdriverio");

async function main() {

    const driver = await remote({
        hostname: "127.0.0.1",
        port: 4723,

        capabilities: {
            platformName: "Android",
            "appium:automationName": "UiAutomator2",
            "appium:deviceName": "emulator-5554",

            // Clock App
            "appium:appPackage": "com.google.android.deskclock",
            "appium:appActivity": "com.android.deskclock.DeskClock",

            "appium:noReset": true
        }
    });

    console.log("Clock App Opened Successfully!");

    // Wait for 5 seconds
    await driver.pause(5000);

    // Print current app package
    const currentPackage = await driver.getCurrentPackage();
    console.log("Current Package:", currentPackage);

    // Close session
    await driver.deleteSession();
}

main().catch(console.error);