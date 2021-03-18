import {Selector} from 'testcafe'

class ProductsPage {
    constructor (){
        this.inventoryDiv = Selector('#inventory_container')
        this.sandwichMenuButton = Selector('#react-burger-menu-btn')
        this.logoutLink = Selector('#logout_sidebar_link')
        this.shoppingCartLink = Selector('.shopping_cart_link')
        this.addToCartButton1 = Selector('button').nth(2)
        this.addToCartButton2 = Selector('button').nth(3)
        this.addToCartButton3 = Selector('button').nth(4)
    }
}

export default new ProductsPage()