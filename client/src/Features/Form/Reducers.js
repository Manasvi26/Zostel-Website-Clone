import { ADD_DATA } from "./ActionTypes";

const initialState = {
  formData: [],
};

export const formReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_DATA:
      const data = payload;
      console.log(data);
      return {
        ...state,
        formData: data,
      };

    default:
      return state;
  }
};
