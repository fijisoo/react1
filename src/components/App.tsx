import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from './Navigation';
import UsersTable from './UsersTable';
import AddUserForm from './AddUserForm';

class App extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Navigation />
                        <Switch>
                            <Route path="/users" component={UsersTable} />
                            <Route path="/add-user" component={AddUserForm} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;