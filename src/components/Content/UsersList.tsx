import * as React from 'react';
import './UsersList.css';

const UsersList = (props) => {
    if(props.toggle){
        return (
            <div>
                <p>DZIALA</p>
            </div>
        )
    } else {
        return null;
    }
}

export default UsersList;