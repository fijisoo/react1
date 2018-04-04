import * as React from 'react';
import { User } from './User';

interface Props {
    addUser: (a: { imie: string, nazwisko: string, wiek: number }) => void
}

interface State {

}

class UserForm extends React.Component<Props, State> {

    constructor(props) {
        super(props);
    }

    formOnClick = (x) => {
        // z tego targetu zbieram wartosci z inputow i tworze obiekt i wykorzystujac funkcje z komponentu rodzica dodaje obiekt do tablicy

        // this.props.addUser()
        // console.log(x.target.children);
        let name = x.target.children[0].value;
        let surname = x.target.children[1].value;
        let age = x.target.children[2].value;
        let pr = new Promise(((resolve, reject) => {
            let user = new User(name, surname, age).showUser();
            resolve(user);
        })).then((data: { imie: string, nazwisko: string, wiek: number })=>{
            this.props.addUser(data);
        })
        x.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.formOnClick}>
                <input type="text" name={'name'}/>
                <input type="text" name={'surname'}/>
                <input type="number" name={'age'}/>
                <button>Dodaj</button>
            </form>
        )
    }

}

export default UserForm;