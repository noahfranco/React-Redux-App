import React from "react"; 

const BitCoinCard = (props) => {
    console.log(props.coin); 
    return(
        <>
        <h2> United States Dollors </h2>
        <h3> Rate: {props.coin.USD.rate} </h3> 
           <h3> Rate Float: {props.coin.USD.rate_float} </h3> 
        <h2>  British Pound Sterling </h2> 
           <h3> Rate: {props.coin.GBP.rate} </h3> 
           <h3> Rate Float: {props.coin.GBP.rate_float} </h3> 
        <h2> EUR </h2>  
            <h3> Rate: { props.coin.EUR.rate } </h3> 
            <h3> Rate Float: {props.coin.EUR.rate_float} </h3> 
        </> 
    )
}
        

export default BitCoinCard; 