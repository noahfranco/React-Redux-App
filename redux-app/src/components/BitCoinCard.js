import React from "react"; 

const BitCoinCard = (props) => {
    console.log(props); 
    return(
        <>
        <h2> United States Dollors </h2>
           <h3>  { props.bpi.usd } </h3> 
        <h2>  British Pound Sterling </h2> 
           <h3> { props.bpi.gbp } </h3>
        <h2> EUR </h2>  
            <h3> { props.bpi.eur } </h3> 
        </> 
    )
}
        

export default BitCoinCard; 