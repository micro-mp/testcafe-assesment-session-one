import {Selector} from 'testcafe'

class CheckOutOverviewPage {
    constructor (){
        this.subTitle = Selector('.subheader')
        this.investoryName= Selector('.inventory_item_name')
        this.firstNameField= Selector('first-name')
        this.lastNameField= Selector('last-name')
        this.postalCodeField= Selector('postal-code')
        this.finishButton = Selector('.cart_button')
    }
}

export default new  CheckOutOverviewPage()