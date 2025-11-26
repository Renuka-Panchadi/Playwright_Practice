import {test,expect} from '@playwright/test'
import click_on_product from '../utils/Product.js'
import {get_product_price, add_to_cart_from_product_page} from '../utils/Product.js'
import Login from '../utils/Login.js'
import {go_to_cart_page}from '../utils/Test_Functions.js'
import verify_price_in_cart from '../utils/Cart_Page.js'

test('TC003 Verify Product Price', async({page})=>{
    await Login(page)
    await page.waitForTimeout(2000)
    await click_on_product(page, 'Sauce Labs Onesie')
    const product_price= await get_product_price(page)
    add_to_cart_from_product_page(page)
    await expect(page.locator('[data-test="remove"]')).toBeVisible()
    await page.waitForTimeout(2000)
    go_to_cart_page(page)
    await page.waitForTimeout(2000)
    verify_price_in_cart(page,'[data-test="inventory-item-price"]', product_price) 
})