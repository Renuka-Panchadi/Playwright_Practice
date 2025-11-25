import{test,expect} from '@playwright/test'

test('My First Test Case',async({page})=>{
    await page.goto('https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox')
});