import {test} from '@playwright/test'

test('Locater XPath', async({page})=>{
    await page.goto("https://demo.automationtesting.in/Register.html")

    //XPath Selector

    /*await page.fill('//input[@placeholder="First Name"]','John')
    //await page.locator('form-control.ng-valid-required')
    await page.locator('//*[text()=" Submit "]').click()*/

    //CSS Selector 
    await page.fill('[placeholder="First Name"]','Regina')
    await page.click('#submitbtn')
    await page.waitForTimeout(2000)
});