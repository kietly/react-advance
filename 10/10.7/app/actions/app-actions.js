import constants from '../constants/app-constants'
import dispatcher from '../dispatcher/dispatcher'

let incrementActions = {
    incrementCount: () => {
        console.log('INCREMENT action dispatched')
        dispatcher.dispatch({
            actionType: constants.INCREMENT
        })
    }
}

export default incrementActions