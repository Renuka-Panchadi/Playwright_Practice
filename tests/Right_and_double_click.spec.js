import {test, expect} from '@playwright/test'

test('Right and double click', async({page})=>{
    await page.goto("https://demo.guru99.com/test/simple_context_menu")
    /*
    await page.locator('.context-menu-one').click({button: 'right'})
    await page.waitForTimeout(1000)
    await page.on('dialog', async dialog=>{
        expect(dialog.message()).toContain('clicked: copy')
        await page.waitForTimeout(1000)
        expect(dialog.accept())
    })
    await page.locator('//*[text()="Copy"]').click()
    */
    await page.waitForTimeout(2000)
    await page.on('dialog', async dialog=>{
        expect(dialog.message()).toContain('You double clicked me.. Thank You..')
        await page.waitForTimeout(1000)
        expect(dialog.accept())
    })
    await page.locator('//*[text()="Double-Click Me To See Alert"]').dblclick()
    await page.waitForTimeout(2000)
})