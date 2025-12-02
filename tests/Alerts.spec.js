import {test, expect} from '@playwright/test'

test('Alerts', async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    await page.on('dialog', async dialog =>{
        expect(dialog.type()).toContain('alert')
        expect(dialog.message('I am a JS Alert'))
        await page.waitForTimeout(3000)
        expect(dialog.accept())
    })
    await page.click('button[onclick="jsAlert()"]')
    await expect(page.locator('#result')).toHaveText("You successfully clicked an alert")
    await page.waitForTimeout(3000)
})

test('Confirm', async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    await page.on('dialog', async dialog =>{
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message('I am a JS Confirm'))
        await page.waitForTimeout(3000)
        expect(dialog.dismiss())
    })
    await page.click('button[onclick="jsConfirm()"]')
    await expect(page.locator('#result')).toHaveText("You clicked: Cancel")
    await page.waitForTimeout(3000)
})

test('Prompt', async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    await page.on('dialog', async dialog =>{
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message('I am a JS prompt'))
        await page.waitForTimeout(3000)
        expect(dialog.accept('John'))
    })
    await page.click('button[onclick="jsPrompt()"]')
    await expect(page.locator('#result')).toHaveText("You entered: John")
    await page.waitForTimeout(3000)
})