import {test, expect} from '@playwright/test'

test('Mouse Actions', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('.dropbtn').hover()
    await page.waitForTimeout(3000)
    await page.locator('//a[normalize-space()="Laptops"]').hover({force: true})
    /*
    await page.locator('#draggable').hover()
    await page.mouse.down()
    await page.waitForTimeout(2000)
    await page.locator('#droppable').hover()
    await page.mouse.up()
    */
    await page.locator('#draggable').dragTo(page.locator('#droppable'))
    await page.waitForTimeout(2000)
    
})