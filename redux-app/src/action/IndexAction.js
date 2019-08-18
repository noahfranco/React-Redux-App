import axios from "axios"; 

export const FETCH_API_DATA_START = "FETCH_API_DATA_START"; 
export const FETCH_API_DATA_SUCCESS = "FETCH_API_DATA_SUCCESS"; 
export const FETCH_API_DATA_FAILURE = "FETCH_API_DATA_FAILER"; 

export const GetData = () => {
    return dispatch => {
        dispatch({type: FETCH_API_DATA_START})
        axios 
        .get("https://api.coindesk.com/v1/bpi/currentprice.json") 
        .then(res => {
            console.log(res)
            dispatch({type: FETCH_API_DATA_SUCCESS, payload: res.data}); 
        })
        .catch(error => {
            dispatch({type: FETCH_API_DATA_FAILURE, payload: error.response})
        }); 
    }
}
