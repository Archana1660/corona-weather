import { USER_REGISTERED, FETCH_ALL_USERS } from '../constants/action-types'

export const registerUser = (registerData) => dispatch => {
    fetch('https://sheet.best/api/sheets/2a9ccb42-b6a8-449d-a2d7-7edac1d9df8d', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(registerData)
    })
      .then(res => res.json())
      .then(registerData =>
        dispatch({
          type: USER_REGISTERED,
          payload: registerData
        })
      );
}

 
export const getAllUsers = () => dispatch => {
    fetch('https://sheet.best/api/sheets/2a9ccb42-b6a8-449d-a2d7-7edac1d9df8d')
    .then(res => res.json())
    .then(allUserData =>
        dispatch({
            type: FETCH_ALL_USERS,
            payload: allUserData
        })
        )
}
