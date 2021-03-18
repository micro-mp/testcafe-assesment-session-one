import {Selector} from 'testcafe'

class CheckOutInformationPage {
    constructor (){
        this.continueButton = Selector('.cart_button')
        this.errorMessage= Selector('.error-button')
        this.firstNameField= Selector('#first-name')
        this.lastNameField= Selector('#last-name')
        this.postalCodeField= Selector('#postal-code')
    }
}

export default new  CheckOutInformationPage()