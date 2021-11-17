import React from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';
import {buyCake} from '../redux/cake/cakeActions';
import {buyIceCream} from '../redux/iceCream/icecreamActions';

const ItemContainer = (props) => {
    return(
        <div>
            <h2>Item- {props.item}</h2>
            <button onClick={props.buyItem}>Buy an item</button>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake ? state.cake.numberOfCakes : state.ice.numOfIceCreams
    return {
        item: itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.vinod 
    ? () => dispatch(buyCake()) 
    : () => dispatch(buyIceCream())
    return {
        buyItem: dispatchFunction
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ItemContainer);
