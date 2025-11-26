import {test,expect} from '@playwright/test'
import add_to_cart_from_main_page from '../utils/Test_Functions.js';
import {go_to_cart_page} from '../utils/Test_Functions.js';
import Login from '../utils/Login.js';
test('Adding item to cart', async({page})=>{
    await Login(page)
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
    await expect(page.getByText("Products")).toBeVisible()
    await page.click(add_to_cart_from_main_page("sauce-labs-backpack"))
    await page.waitForTimeout(2000)
    await expect(page.locator('button[data-test="remove-sauce-labs-backpack"]')).toBeVisible()
    go_to_cart_page(page)
    await page.waitForTimeout(2000)
    await expect(page.locator('div[data-test="inventory-item-name"]')).toBeVisible()
})
