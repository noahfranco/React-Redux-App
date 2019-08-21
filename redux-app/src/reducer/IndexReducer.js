import {
    FETCH_API_DATA_START, 
    FETCH_API_DATA_SUCCESS, 
    FETCH_API_DATA_FAILURE
}
from "../action/IndexAction.js"; 

const initialState = {
    data: [], 
    compiled: false, 
    error: "Something went wrong"
}

export const Reducer = (state = initialState, action) => {
switch(action.type) {
    case FETCH_API_DATA_START:
    return {
        ...state, 
        isLoading: true, 
        error: ""
    }
    case FETCH_API_DATA_SUCCESS:
    return {
        ...state, 
        isLoading: false,
        data: [action.payload],  
        error: ""
    }; 
    default: 
        return state; 
    }
}