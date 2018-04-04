import * as React from 'react';
import UsersTable from './UsersTable';
import UserForm from './UserForm';

type State = {
    data: {imie: string, nazwisko: string, wiek: number}[]
}

type Props = {

}

class App extends React.Component<Props, State> {
    zmienna: string = 'amwdomaowd';
    constructor(props: Props){
        super(props);
        this.state = {
            data: [
                {imie: 'Janusz', nazwisko: 'tracz', wiek: 24},
                {imie: 'Andrzej', nazwisko: 'tracz', wiek: 24},
                {imie: 'Zbyszek', nazwisko: 'tracz', wiek: 24}
                ]
        }
    }

    addUser = (a: {imie: string, nazwisko: string, wiek: number}) => {
        let dataCopy = this.state.data.slice();
        dataCopy.push(a);
        console.log('user.............', a);
        this.setState({data: dataCopy});
        console.log(this.state.data);
    }

    render(){
        return (
            <div>
                <UserForm addUser={this.addUser}/>
                <UsersTable users={this.state.data}/>
            </div>
        )
    }
}

export default App;