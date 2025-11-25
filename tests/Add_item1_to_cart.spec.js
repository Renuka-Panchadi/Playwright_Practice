import {test,expect} from '@playwright/test'
import f1 from '../utils/Test_Functions.js';
import Login from '../utils/Login.js';
test('Adding item to cart', async({page})=>{
    await Login(page)
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
    await expect(page.getByText("Products")).toBeVisible()
    await page.click(f1("sauce-labs-backpack"))
    await page.waitForTimeout(2000)
    await expect(page.locator('button[data-test="remove-sauce-labs-backpack"]')).toBeVisible()
    await page.click('a[data-test="shopping-cart-link"]')
    await page.waitForTimeout(2000)
    await expect(page.locator('div[data-test="inventory-item-name"]')).toBeVisible()
})
