import * as React from 'react';
import InputForm from './Content/InputForm';
import UsersList from './Content/UsersList';
import AppHeader from './Header/AppHeader';
import './app.css';

interface Props {

}

interface State {
    users: {name: string, surname: string, age: number}[],
    toogleForm: boolean,
    toogleList: boolean
}

class App extends React.Component<Props, State>{

    constructor(props){
        super(props);

        this.state = {
            users: [],
            toogleForm: true,
            toogleList: true
        }
    }

    showList = () => {
        this.setState({toogleList: !this.state.toogleList});
        console.log(this.state.toogleList);
    }
    showForm = () => {
        this.setState({toogleForm: !this.state.toogleForm});
        console.log(this.state.toogleForm);

    }

    render(){
            return (
                <div className={'app'}>
                    <AppHeader showList={this.showList} showForm={this.showForm}/>
                    <div className={'content'}>
                        <InputForm toggle={this.state.toogleForm}/>
                        <UsersList toggle={this.state.toogleList}/>
                    </div>

                </div>
            )
        }
}

export default App;