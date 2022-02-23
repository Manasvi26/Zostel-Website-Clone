import { ADD_DATA } from "./ActionTypes";

export const add_data = (payload) => {
  return {
    type: ADD_DATA,
    payload,
  };
};
