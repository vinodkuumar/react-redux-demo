import React,{useState} from 'react';
import {connect} from 'react-redux';
import {buyCake} from '../redux/cake/cakeActions';

const NewCakeContainer = (props) => {
    const [number,setNumber] = useState(1);
    return(
        <div>
            <input 
                type="text"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
            />
            <h2>Number of Cakes:- {props.numOfCakes}</h2>
            <button onClick={() => props.buyCake(number)}>Buy a cake</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        numOfCakes: state.cake.numberOfCakes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: (number) => dispatch(buyCake(number))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewCakeContainer);