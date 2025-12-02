import {test, expect} from '@playwright/test'

test('Date Picker', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    const day='12', month = 'September', year = '2025'
    await page.locator('#datepicker').click()
    while(true){
        const months=await page.locator('.ui-datepicker-month').textContent()
        //await page.waitForTimeout(2000)
        const years = await page.locator('.ui-datepicker-year').textContent()
        if(year==years && month==months){
            break
        }
        await page.locator('.ui-icon.ui-icon-circle-triangle-w').click()
    }
    await page.locator(`//a[text()='${day}']`).click()
    await page.waitForTimeout(2000)
})