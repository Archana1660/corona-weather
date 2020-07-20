import data from '../state-wise-data.json'
import { FETCH_STATE_DATA } from '../constants/action-types'

export const receiveStateData = data => ({
    type: FETCH_STATE_DATA,
    payload: data
})

export const getStateData = () => dispatch => {
    dispatch(receiveStateData(data))
} 