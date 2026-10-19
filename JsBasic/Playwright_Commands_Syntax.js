/*
playwright Commands & Syntax using in automation:
=================================================
//Locator :
=========
page.getByText()
page.getByRole()
page.getByLable()
page.getByPlaceholder()
page.locator()
page.getByTextID()
await page.getByRole('button',{name: 'Login'}).click();
=====================================================

Auto-waiting :
Playwright has auto waiting for many actions and assertions, reducing the need  for arbitrary sleeps.
=============
=> await page.locator("#username").fill("Akash");
   await page.locator("#password").fill("password");
   await page.getByRole('button',{name: " Login "}).click();
=======================================================
// Login page :-
==============
import {test,expect } from '@playwright/test';
test('Login test',async ({page}) => {
await page.goto("  ");
await page.getByLable('').fill('');
await page.getByLabel('').fill('');
await page.getByRole('button',{name: 'Login'}).click();
await expect(page).ToHaveURL(/dashboard/);

});
=====================================================

import {test,expect} from '@playwright/test'

test('Login Test'async ({page}){

await page.goto("   ");
await page.getByLable('username').fill('Akash');
await page.getByLable('password').fill('password');
await page.getByRole('Button',{name: 'Login'}).click();
await expect(page).ToHaveURL(/dashboard/);
});

======================================================
New Tab:
=========
const [new Page] = await Promise.all([
context.waitForEvent('page'),
page.getByText('open New Tab').click()

]); 
await newPage.waitForLoadState();
=================================================
screenshot :
============
await page :screenshot ({
page:'screenshot/login.png'
});
=================================================
API Automation in playwright :
===========================
import {test,expect} from'@playwright/test'
test ('Get User API', async ({request})=>{
const response = await request.get("");
expect (response.status().ToBe(200));
const body = await response.json();
console.log(body);
});
=======================================================
Query parameter:
=================
const response = await request.get('/users',{
 params:{
role:'QA',
Designmation:'tester',
Status:'active'

}

});
How do you validate JSOn
========================
const response= await request.get('/users/101');
expect(response status()).toBe(200)
const body=await response.json();
expect(body.id).toBe(101);
expect(body.name).toBe('Akash');
expect(body.role).toBeDefined();

const Start = Date.Now();
cosnt response=await request.get();
Const responseTime = Date.now()-start();
Console.log('Response time:${responseTime} ms');
expect(responseTime).toBeLessThan(2000);


//Login page
Login page using playwright JavaScript:
=======================================

import {test ,expect} from '@playwright/test'
test('Login page', async  ({page})=> {
await page.goto();
await page.Locator('username').fill();
await page.locator('password').fill();
await page.getByText('buton',{name: 'Login'}).click();
await expect(page.getByText('button',{name:''})).tobeVisible();
});
------------------------------------------

const {test , expect } =required ('@playwright/test');
test('verify page title',async ({page})=>{

await page.goto('https://playwright.dev/');
await expect(page).toHaveTitle('/playwright/');

});

========================================
execute:
-------
npm init playwright@latest
npx playwright test
npx playwright test --headed
npx playwright show-report
------------------------------------
await page.getByRole('button'{ name:'Login'}).click();
await page.getByLabel('Email').fill('test@example.com');
await page.getByTestId('submit-button').click();
===========================================
How do you handle waits in Playwright?
=> await expect(page.getByText('Login sucessful')).toBeVisible();
==================================
How do you handle dropdowns, checkboxes, and alerts?
=> 1.Dropdown => await page.getByLabel('').selectOption('');
   2.checkBox: await page.getByLabel('').check('');
   3.Alert : 
page.on('dialog',async dialog  => {

	
});
===================================




















*/