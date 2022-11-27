const types = {
  SET_CATEGORY: "SET_CATEGORY",
};

const setCategory = (category) => {
  return {
    type: types.SET_CATEGORY,
    payload: category,
  };
};

export default {
  setCategory,
  types,
};
