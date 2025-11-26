import {test,expect} from '@playwright/test'
import Login from '../utils/Login.js'
import { dropdown } from '../utils/Product.js'

test('TC004 Select_Dropdown', async({page})=>{
    await Login(page)
    await dropdown(page, '[data-test="product-sort-container"]','[data-test="product-sort-container"] option', 'Price (low to high)')
})