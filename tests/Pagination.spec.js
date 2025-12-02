import {test, expect} from '@playwright/test'

test('Pagination', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    const table = await page.locator('#productTable')
    //const table_header_count= await table.locator('thead tr th').count()
    const table_body_rows= await table.locator('tbody tr')
    const table_body_rows_count= await table_body_rows.count()
    const table_body_cell_count= await table.locator('tbody tr td').count()
    console.log("The rows count : ",await table_body_rows_count)
    console.log("The cells count : ",await table_body_cell_count)
    await click_on_checkbox(page, table_body_rows, 'Smartphone')
    await page.waitForTimeout(2000)
    const pages = await page.locator('#pagination li a ')
    for(let i=0;i<await pages.count();i++){
        await pages.nth(i).click()
        for(let j=0;j<await table_body_rows_count;j++){
            const row = await table_body_rows.nth(i)
            const cell_value = await row.locator('td')
            for(let k=0;k<await cell_value.count();k++){
                console.log(await cell_value.nth(k).textContent())
            }
        }
        await page.waitForTimeout(2000)
    }
    await page.waitForTimeout(2000)
})

async function click_on_checkbox(page, rows, name){
    const click_box = await rows.filter({
        has : page.locator('td'),
        hasText: name
    })
    await click_box.locator('input').check()
}