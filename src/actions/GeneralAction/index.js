import { StorageService } from "../../services";

const types = {
  SET_FIRST_TIME_USE: "SET_FIRST_TIME_USE",
};
const setIsFirstTimeUse = () => {
    return {
      type: types.SET_FIRST_TIME_USE,
      payload: false,
    };
  };

const appStart = () => {
  return (dispatch, getState) => {
    StorageService.getFirstTimeUse().then((isFirstTimeUse) => {
      dispatch({
        type: types.SET_FIRST_TIME_USE,
        payload: isFirstTimeUse ? false : true,
      });
    });
  };
};

export default {
  appStart,
  setIsFirstTimeUse,
  types,
};
