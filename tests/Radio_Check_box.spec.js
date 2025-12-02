import{test,expect} from '@playwright/test'
//import Test_Function from './utils/Test_Function.js';
test('Handling Radio box', async({page})=>{
    await page.goto("https://demo.automationtesting.in/Register.html")
    await expect(page.locator('input[type="radio"]').first()).not.toBeChecked()
    await page.locator('input[type="radio"]').first().check()
    await expect(page.locator('input[type="radio"]').first()).toBeChecked()
    const elements=await page.locator('input[type="checkbox"]')
    for(const el in elements){
        await page.locator(el).click();
    }
    await page.waitForTimeout(2000)
    //Test_Function.f1("sauce-labs-backpack")
})


