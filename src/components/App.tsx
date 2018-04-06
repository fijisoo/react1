import * as React from 'react';
import InputForm from './Content/InputForm';
import UsersList from './Content/UsersList';
import AppHeader from './Header/AppHeader';

import User from '../Model/User';

interface Props {

}

interface State {
    users: { name: string, surname: string, age: number }[],
    toogleForm: boolean,
    toogleList: boolean
}

class App extends React.Component<Props, State> {

    private inputs: InputForm;

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            toogleForm: true,
            toogleList: true,
        }
    }

    componentDidMount() {

    }

    showList = () => {
        this.setState({toogleList: !this.state.toogleList});
    }

    showForm = () => {
        this.setState({toogleForm: !this.state.toogleForm});
    }

    onSubmit = () => {
        new Promise(((resolve, reject) => {
            let user = new User(
                (this.inputs.refs.input1 as HTMLInputElement).value,
                (this.inputs.refs.input2 as HTMLInputElement).value,
                parseInt((this.inputs.refs.input3 as HTMLInputElement).value)
            ).getUser();
            resolve(user);
        })).then((data: User) => {
            let usersCopy = [...this.state.users];
            usersCopy.push(data);
            this.setState({users: usersCopy});
        }).catch((err) => {
            console.log(err);
        });
    }

    render() {
        return (
            <div className={'app'}>
                <AppHeader showList={this.showList} showForm={this.showForm}/>
                <div className={'content'}>
                    <InputForm
                        ref={(refData) => {
                            this.inputs = refData;
                            console.log(typeof refData)
                        }}
                        toggle={this.state.toogleForm}
                        getInputsValue={this.onSubmit}
                    />
                    <UsersList
                        toggle={this.state.toogleList}
                        usersData={this.state.users}
                    />
                </div>
            </div>
        )
    }
}

export default App;