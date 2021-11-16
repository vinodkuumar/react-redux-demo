import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { buyCake } from '../redux/cake/cakeActions';

const HooksCakeContainer = () => {
    const dispatch = useDispatch();
    const numOfCakes = useSelector((state) => state.numberOfCakes);
    const BuyCake = () => {
        dispatch(buyCake())
    }
    return(
        <div>
            <h2>Number of Cakes:- {numOfCakes}</h2>
            <button onClick={BuyCake}>Buy a Cake</button>
        </div>
    )
}

export default HooksCakeContainer;