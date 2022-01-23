import { ADD_ITEM_LOADING, ADD_ITEM_SUCCESS, ADD_ITEM_ERROR } from './ActionTypes'

export const addItemLoading=()=>{
    return {
        type:ADD_ITEM_LOADING
    }
}

export const addItemSuccess=(data)=>{
    return {
        type:ADD_ITEM_SUCCESS,
        payload:data
    }
}

export const addItemError=()=>{
    return {
        type:ADD_ITEM_ERROR
    }
}