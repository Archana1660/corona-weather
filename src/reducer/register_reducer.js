import { USER_REGISTERED } from '../constants/action-types'

const initState = {}

const registerReducer = (state = initState, action) => {
    if(action.type === USER_REGISTERED){
        return {
            ...state,
            ...action.payload
        }
    }
    return state;
}

export default registerReducer 