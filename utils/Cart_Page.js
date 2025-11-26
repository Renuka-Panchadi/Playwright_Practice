import { expect } from "@playwright/test"

export default async function verify_price_in_cart(page,product_name, price_in_product) {
    const price_in_cart=page.locator(product_name)
    return await expect(price_in_cart).toHaveText(price_in_product)
    
}