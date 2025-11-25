export default function f1(selector){
    const product_name=`[data-test="add-to-cart-${selector}"]`
    return product_name
}

//f1("sauce-labs-backpack")