import React from 'react';
import {connect} from 'react-redux';
import {buyCake} from '../redux/cake/cakeActions';

const CakeContainer = (props) => {
    return(
        <div>
            <h2>Number of Cakes:- {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy a cake</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        numOfCakes: state.numberOfCakes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer);