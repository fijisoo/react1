import * as React from 'react';

const UsersTable = (props) => {
    let users = props.users;

    const userList = users.map((singleUser, index)=>{
        console.log('imie: ', singleUser.imie);
        return (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{singleUser.imie}</td>
                <td>{singleUser.nazwisko}</td>
                <td>{singleUser.wiek}</td>
            </tr>
        )
    });
    console.log('users', users);
    return (
        <table className="table">
            <thead>
            <tr>
                <th>Id</th>
                <th>Imie</th>
                <th>Nazwisko</th>
                <th>Wiek</th>
            </tr>
            </thead>
            <tbody>
            {userList}
            </tbody>
        </table>
    );
}



export default UsersTable;