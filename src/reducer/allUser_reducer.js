import { FETCH_ALL_USERS } from '../constants/action-types'

const initState = {
    Data: []
}

const allUserReducer = (state = initState, action) => {
    if(action.type === FETCH_ALL_USERS){
        return {
            ...state,
            Data : action.payload
        }
    }
    return state;
}
 
export default allUserReducer