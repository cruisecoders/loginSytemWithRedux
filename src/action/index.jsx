export const username = (data) => (dispatch) => {
    return (dispatch({
        type: 'USERNAME',
        payload: data.target.value
    })
    )
}
export const password = (data) => (dispatch) => {
    return (dispatch({
        type: 'PASSWORD',
        payload: data.target.value
    })
    )
}
export const name = (data) => (dispatch) => {
    return (dispatch({
        type: 'NAME',
        payload: data.target.value
    }))
}
export const registeration = (data) => (dispatch) => {
    return (dispatch({
        type: 'REGISTER',
        payload: data
    }))
}