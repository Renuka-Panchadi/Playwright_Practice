export default function add_to_cart_from_main_page(selector){
    const product_name=`[data-test="add-to-cart-${selector}"]`
    return product_name
}

export function get_locator_by_name(page,name){
    return page.getByText(name);
}

export async function go_to_cart_page(page){
    await page.click('a[data-test="shopping-cart-link"]')
}
