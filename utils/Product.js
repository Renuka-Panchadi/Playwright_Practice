import {get_locator_by_name} from './Test_Functions.js'

export default async function click_on_product(page, product_name){
    const locator = get_locator_by_name(page, product_name);
    await locator.click();
    await page.waitForTimeout(2000) 
}

export async function get_product_price(page){
    return await page.locator('[data-test="inventory-item-price"]').innerText()
}

export async function add_to_cart_from_product_page(page) {
    await page.click('[data-test="add-to-cart"]')
}

export async function dropdown(page,dropdown_locator,components, selected_filter){
    await page.click(dropdown_locator);
    await page.waitForTimeout(1000);
    const dropdown_menu = await page.$$(components);
    for (const opt of dropdown_menu) {
    const text = await opt.textContent();

    if (text.includes(selected_filter)) {
        // Get option value
        const value = await opt.getAttribute("value");

        // Select using Playwright API
        await page.locator(dropdown_locator).selectOption(value);
        await page.waitForTimeout(2000)
        break;
    }
}
}
