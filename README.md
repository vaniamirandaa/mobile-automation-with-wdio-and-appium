# mobile-automation-with-wdio-and-appium
A mobile testing using WebdriverIO, Mocha framework and automation tool Appium with Page Object Model design pattern. For running the APK I'm using an emulator in Android Studio Giraffe.

The apps for this simple project is [SauceLabs APK](https://github.com/saucelabs/sample-app-mobile/releases) for Android

Test results:

![Alt text](<Screenshot 2023-12-18 202836.jpg>)

How to run the repository:
1. git clone https://github.com/vaniamirandaa/mobile-automation-with-wdio-and-appium
2. run npm i
3. open the emulator with the qualified device (check wdio.conf.js capabilities)
4. run Appium server appium --p 3000
5. run npx wdio


