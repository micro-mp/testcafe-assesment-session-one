import {Selector} from 'testcafe'

class ShoppingCartPage {
    constructor (){
        this.shoppingCartTitle = Selector('.subheader')
        this.removeButton = Selector('.btn_secondary')
        this.checkoutButton = Selector('.checkout_button')
        
    }
}

export default new  ShoppingCartPage()