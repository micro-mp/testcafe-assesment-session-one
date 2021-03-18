import loginPage from '../pages/LoginPage'
import productsPage from '../pages/ProductsPage'
import shoppingCartPage from '../pages/ShoppingCartPage'
import checkOutInformationPage from '../pages/CheckOutInformationPage'
import checkOutOverviewPage from '../pages/CheckOutOverviewPage'
import finishPage from '../pages/FinishPage'
import {CREDENTIALS} from '../data/Constansts'


fixture('Session one assesment')
    .page `https://www.saucedemo.com/`

test('1. Login with a valid user',async t =>{
    await t
        .typeText(loginPage.userNameField,CREDENTIALS.VALID_USER.USERNAME)
        .typeText(loginPage.passwordField,CREDENTIALS.VALID_USER.PASSWORD)
        .click(loginPage.loginButton)

    await t.expect(productsPage.inventoryDiv.exists).ok()
})

test('2. Login with a invalid user',async t =>{
    await t
        .typeText(loginPage.userNameField,CREDENTIALS.INVALID_USER.USERNAME)
        .typeText(loginPage.passwordField,CREDENTIALS.INVALID_USER.PASSWORD)
        .click(loginPage.loginButton)

    await t.expect(loginPage.errorMessage.exists).ok()
})

fixture('Session one assesment')
    .page `https://www.saucedemo.com/`
    .beforeEach( async t => {
        await t
            .typeText(loginPage.userNameField,CREDENTIALS.VALID_USER.USERNAME)
            .typeText(loginPage.passwordField,CREDENTIALS.VALID_USER.PASSWORD)
            .click(loginPage.loginButton)
    });

test('3, Logout from products page',async t =>{
    await t
        .click(productsPage.sandwichMenuButton)
        .click(productsPage.logoutLink)

    await t.expect(loginPage.loginButton.exists).ok()
})

test('4. Navigate to Shopping Cart', async t =>{
    await t.click(productsPage.shoppingCartLink)

    await t.expect(shoppingCartPage.shoppingCartTitle.exists).ok()
})

test('5. Add a single item to the shopping cart', async t =>{

    await t.click(productsPage.addToCartButton1)

    await t.click(productsPage.shoppingCartLink)

    await t.expect(shoppingCartPage.removeButton.exists).ok()
})

test('6. Add a multiple items to the shopping cart', async t =>{

    await t.click(productsPage.addToCartButton1)
            .click(productsPage.addToCartButton2)
            .click(productsPage.addToCartButton3)

    await t.click(productsPage.shoppingCartLink)

    await t.expect(shoppingCartPage.removeButton.exists).ok()
})

test('7. Continue with missing mail information', async t =>{

    await t.click(productsPage.addToCartButton1)

    await t.click(productsPage.shoppingCartLink)

    await t.click(shoppingCartPage.checkoutButton)

    await t.click(checkOutInformationPage.continueButton)
            .expect(checkOutInformationPage.errorMessage.exists).ok()
})

test('8. Fill user information', async t =>{

    await t.click(productsPage.addToCartButton1)

    await t.click(productsPage.shoppingCartLink)

    await t.click(shoppingCartPage.checkoutButton)

    await t
        .typeText(checkOutInformationPage.firstNameField, 'testname')
        .typeText(checkOutInformationPage.lastNameField, 'testlastname')
        .typeText(checkOutInformationPage.postalCodeField, '123456')
        .click(checkOutInformationPage.continueButton)
        
    await t.expect(checkOutOverviewPage.subTitle.exists).ok()
})


test('9. Final Order Items', async t =>{

    await t.click(productsPage.addToCartButton1)

    await t.click(productsPage.shoppingCartLink)

    await t.click(shoppingCartPage.checkoutButton)

    await t
        .typeText(checkOutInformationPage.firstNameField, 'testname')
        .typeText(checkOutInformationPage.lastNameField, 'testlastname')
        .typeText(checkOutInformationPage.postalCodeField, '123456')
        .click(checkOutInformationPage.continueButton)
        
    await t.expect(checkOutOverviewPage.investoryName.exists).ok()
})


test('10. Complete a purchase', async t =>{

    await t.click(productsPage.addToCartButton1)

    await t.click(productsPage.shoppingCartLink)

    await t.click(shoppingCartPage.checkoutButton)

    await t
        .typeText(checkOutInformationPage.firstNameField, 'testname')
        .typeText(checkOutInformationPage.lastNameField, 'testlastname')
        .typeText(checkOutInformationPage.postalCodeField, '123456')
        .click(checkOutInformationPage.continueButton)

    await t.click(checkOutOverviewPage.finishButton)
        
    await t.expect(finishPage.finishDiv.exists).ok()
})