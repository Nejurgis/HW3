import {ADD_MODEL} from '../actions/addModelAction'
export default (state = [], action) => {
    
    switch(action.type) {
        case ADD_MODEL :
        console.log(action)
            return state
        default:
            return state
    }
}