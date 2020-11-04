import * as actionTypes from './actionTypes'
export const userStateToProps = (state) => {
  return {
    userInfo: state.userInfo,
  };
};

export const userDispatchToProps = (dispatch) => {
  return {
    storeUserInfo(userInfo) {
      let action = {
        type: actionTypes.storeUserInfo,
        value: userInfo
      }
      console.log('dashabi')
      dispatch(action)
    }
  };
};