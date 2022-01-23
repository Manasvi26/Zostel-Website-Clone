import { ADD_ITEM_LOADING, ADD_ITEM_SUCCESS, ADD_ITEM_ERROR } from './ActionTypes'

const initialState = {
    loading: false,
    items: "",
    total:null,
    error: false
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_ITEM_LOADING:
            return {
                ...state,
                loading: true
            }


            case ADD_ITEM_SUCCESS:
                console.log(action.payload)
                return {
                    ...state,
                    items: action.payload.selectedRoomsIs,
                    total:action.payload.totalAmountIs,
                    loading: false
                }
    
            case ADD_ITEM_ERROR:
                return {
                    ...state,
                    loading: false,
                    error: true
                }

                default:
                    return state;
    }
}