import {test,expect} from '@playwright/test'

test('Soft Assertion', async({page})=>{
    await page.goto("https://demo.automationtesting.in/Register.html")
    await expect(page).toHaveURL("https://demo.automationtesting.in/Register.html")
    await expect(page).toHaveTitle('Register')
    await expect(page.getByPlaceholder("First Name")).toBeEditable()
    await expect(page.getByPlaceholder("First Name")).toBeEmpty()
    await page.getByPlaceholder("First Name").fill("John")
    await expect(page.getByPlaceholder("First Name")).toHaveValue('John')
    await expect(page.locator('#checkbox1')).toHaveCount(3)
    
})