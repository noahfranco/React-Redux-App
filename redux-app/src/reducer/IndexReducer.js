const initialState = {
    data: [], 
    complied: false, 
    error: "Something went wrong"
}

export const Reducer = (state = initialState, action) => {
switch(action.type) {
    case "FETCH_API_DATA_START":
    return {
        ...state, 
        isLoading: true, 
        error: "Something went wrong"
    }
    case "FETCH_API_DATA_SUCCESS":
    return {
        ...state, 
        isLoading: action.payload, 
        error: "Something went wrong"
    }; 
    default: 
        return state; 
    }
}