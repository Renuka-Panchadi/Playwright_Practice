export default async function Login(page){
    await page.goto("https://www.saucedemo.com/")
    await page.getByPlaceholder("Username").fill("standard_user")
    await page.getByPlaceholder("Password").fill("secret_sauce")
    await page.click('input[type="submit"]')
    await page.waitForTimeout(2000)
    
}
/*test('Login', async({page})=>{
    await page.goto("https://www.saucedemo.com/")
    await page.getByPlaceholder("Username").fill("standard_user")
    await page.getByPlaceholder("Password").fill("secret_sauce")
    await page.click('input[type="submit"]')
    await page.waitForTimeout(2000)
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
    await expect(page.getByText("Products")).toBeVisible()
})*/