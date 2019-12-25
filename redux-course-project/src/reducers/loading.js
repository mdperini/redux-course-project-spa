import {
    RECEIVE_DATA
} from '../actions/shared'

// Reducer function
const loading = (state = true, action) => {
    switch(action.type) {
        case RECEIVE_DATA:
            return false
        default:
            return state
    } 
}

export default loading