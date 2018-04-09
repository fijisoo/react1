import React from 'react';
import InputForm from './Content/InputForm';
import UsersList from './Content/UserList/UsersList';
import AppHeader from './Header/AppHeader';

import User from '../Model/User';

interface Props {

}

interface State {
    users: { name: string, surname: string, age: number }[],
    toogleForm: boolean,
    toogleList: boolean,
    usersPerPage: number,
    pageNumber: number,
    usersCounter: number
}

class App extends React.Component<Props, State> {

    private inputs: InputForm;

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            toogleForm: true,
            toogleList: true,
            usersPerPage: 5,
            pageNumber: 0,
            usersCounter: 0
        }
    }
    showList = () => {
        this.setState({toogleList: !this.state.toogleList});
    }

    showForm = () => {
        this.setState({toogleForm: !this.state.toogleForm});
    }

    componentDidMount() {
        this.getUsersFromServer();
        this.getUsersCounter();
    }

    onSliderChange = (usersPerPage: number) => {
        new Promise((resolve => {
            this.setState({usersPerPage: usersPerPage});
            resolve();
        })).then((data)=>{
            this.getUsersFromServer().then((data)=>{
                this.getUsersCounter();
            });
        })
    }

    onChangePage = (pageNumber: number) => {
        new Promise(((resolve, reject) => {
            this.setState({pageNumber: pageNumber});
            resolve();
        })).then((data)=>{
            this.getUsersFromServer().then((data)=>{
                this.getUsersCounter();
            });
        })


    }
    getUsersCounter = () => {
        return fetch('./api/usersCounter').then((data)=>{
            data.json().then((data2)=>{
                this.setState({usersCounter: data2})
            })
        })
    }

    onSubmit = (name: string, surname: string, age: number) => {
        new Promise(((resolve, reject) => {
            let user = new User(name, surname, age).getUser();
            resolve(user);
        })).then((data: User) => {
            this.setState({usersPerPage: 5, pageNumber: 0})
            this.getUsersFromServer();
            fetch("./api/addUser", {
                method: "post",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then((data) => {
                data.json().then((data2) => {
                    this.setState({users: data2})
                    this.getUsersCounter();
                })

            })
        }).catch((err) => {
            console.log(err);
        });
    }

    getUsersFromServer = () => {
        console.log(this.state.usersPerPage, this.state.pageNumber)
        return fetch(`./api/users?usersPerPage=${this.state.usersPerPage}&pageNumber=${this.state.pageNumber}`).then((data) => {
            data.json().then((data2) => {
                this.setState({users: data2})
            })
        })
    }

    render() {
        return (
            <div className={'app'}>
                <AppHeader showList={this.showList} showForm={this.showForm}/>
                <div className={'content'}>
                    <InputForm
                        ref={(refData) => {
                            this.inputs = refData;
                        }}
                        toggle={this.state.toogleForm}
                        getInputsValue={this.onSubmit}
                    />
                    <UsersList
                        toggle={this.state.toogleList}
                        usersData={this.state.users}
                        usersPerPage={this.state.usersPerPage}
                        pageNumber={this.state.pageNumber}
                        usersCounter={this.state.usersCounter}
                        onSliderChange={this.onSliderChange}
                        onChangePage={this.onChangePage}
                    />
                </div>
            </div>
        )
    }
}

export default App;