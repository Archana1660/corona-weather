import { FETCH_STATE_DATA } from '../constants/action-types'

const initState = {
    data: []
}

const getStateDataReducer = (state = initState, action) => {
    if(action.type === FETCH_STATE_DATA) {
        return {
            ...state,
            data: action.payload
        }
    }
    return state;

} 

export default getStateDataReducer 