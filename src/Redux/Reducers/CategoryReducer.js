import CategoryActions from "../Actions/CategoryActions";


const initialState = {
  category: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CategoryActions.types.SET_CATEGORY:
      return { ...state, category: action?.payload };
   
    default:
      return state;
  }
};
