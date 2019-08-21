import React from "react"; 
import { connect } from "react-redux"; 
import { GetData } from "../action/IndexAction.js";
import BitCoinCard from "./BitCoinCard.js"; 

const BitCoin = (props) => {
    console.log(props.data)
    return(
        <>
        <button onClick={props.GetData}> Click Me </button> 
        <button onClick={()=>console.log(props.data)}> Console.log </button> 
        { props.data.map(coin => <BitCoinCard coin={coin} key={coin.code} /> )}
         
        </> 
    );
};

const mapStateToProps = state => {
    return {
        data: state.data 
    };
};

export default connect(
    mapStateToProps, 
    { GetData }
)(BitCoin); 

// export default BitCoin; 
