import React from 'react';
import {connect, useDispatch} from 'react-redux';

import {buyIceCream} from '../redux/iceCream/icecreamActions';


const IceCreamContainer = (props) => {
    const dispatch = useDispatch();
    const BuyIce = () => {
        dispatch(buyIceCream())
    }
    return(
        <div>
            <h2>Number of IceCreams: {props.numOfIceCreams}</h2>
            <button onClick={BuyIce}>Buy IceCream</button>
        </div>
    )
} 

const mapStateToProps = (state) => {
    return {
        numOfIceCreams: state.ice.numOfIceCreams
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         buyIce: () => dispatch(buyIceCream())
//     }
// }

export default connect(mapStateToProps,null)(IceCreamContainer);