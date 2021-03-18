import {Selector} from 'testcafe'

class FinishPage {
    constructor (){
        this.finishDiv = Selector('#checkout_complete_container')
    }
}

export default new FinishPage()





