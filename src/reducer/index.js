import { combineReducers } from 'redux'
import getStateDataReducer from './state_reducer'
import registerReducer from './register_reducer'
import allUserReducer from './allUser_reducer'

const rootReducer = combineReducers({
    stateData: getStateDataReducer, 
    userData: registerReducer,
    allUserData: allUserReducer,
})

export default rootReducer 