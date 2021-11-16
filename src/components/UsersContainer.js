import React,{useEffect} from 'react';
import {connect, useDispatch} from 'react-redux';
import {fetchUsers} from '../redux/user/userActions';

const UsersContainer = ({usersData}) => {
    const dispatch = useDispatch();
    const {users} = usersData;
    useEffect(() => {
        dispatch(fetchUsers())
        
    },[])
    return(
        <div>
            <h2>Fetch Users:- </h2>
            {users ? (
                users.map(user => <p>{user.title}</p>
                    ) ): null
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        usersData: state.users
    }
}

export default connect(mapStateToProps,null)(UsersContainer);