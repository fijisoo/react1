import * as React from 'react';

const TBody = (props) => {
    return (
        props.usersData.map((x, index) => (
                    <tr key={index}>
                        <td>{index}</td>
                        <td>{x.name}</td>
                        <td>{x.surname}</td>
                        <td>{x.age}</td>
                    </tr>
                )
        )
    )
}

const UsersList = (props) => {
    if (props.toggle) {
        return (
            <section className={'usersList'}>
                <table>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Imie</th>
                        <th>Nazwisko</th>
                        <th>Wiek</th>
                    </tr>
                    </thead>
                    <tbody>
                        <TBody usersData={props.usersData}/>
                    </tbody>
                </table>
            </section>
        )
    } else {
        return null;
    }
}

export default UsersList;