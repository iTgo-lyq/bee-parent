import * as actionTypes from './actionTypes'
const defaultState = {
    inputValue: 'haha'
}
export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.storeUserInfo:
            let newState = JSON.parse(JSON.stringify(state))
            newState.userInfo = action.value
            return newState
            break;
    }
    return state
}