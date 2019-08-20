import React from "react"; 
import { connect } from "react-redux"; 
import { GetData } from "../action/IndexAction.js";
import BitCoinCard from "./BitCoinCard.js"; 

const BitCoin = (props) => {
    return(
        <>
            <h2> Is this working? </h2> 
        {props.data.map(coin => <BitCoinCard data={coin} key={coin.name} /> )}
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
