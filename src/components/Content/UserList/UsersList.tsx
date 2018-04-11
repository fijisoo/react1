import * as React from 'react';
import Pagin from './Pagin';
import ListFilter from './ListFilter';

interface Props {
    toggle: boolean,
    usersData : {name: string, surname: string, age: number}[],
    usersPerPage: number,
    pageNumber: number,
    usersCounter: number,
    deleteUser: (userID: number)=>void,
    onSliderChange: (usersPerPage: number)=>void,
    onChangePage: (pageNumber: number)=>void
}

interface State {
    filter: string,
    filterBy: string
}

const TBody = (props) => {
    return (
        props.usersData.map((x, index) => (
                    <tr key={index}>
                        <td>{index + 1 + props.pageNumber * props.usersPerPage}</td>
                        <td>{x.name}</td>
                        <td>{x.surname}</td>
                        <td>{x.age}</td>
                        <td><span onClick={(ev)=>{
                            props.deleteUser(index + props.pageNumber * props.usersPerPage)
                        }} >❌</span></td>
                    </tr>
                )
        )
    )
}

export default class UsersList extends React.Component<Props,State>{
    constructor(props){
        super(props);

        this.state = {
            filter: '',
            filterBy: ''
        }
    }

    setFilterText = (filterText: string) => {
        this.setState({filter: filterText});
    }

    changeFilter = (filter: string) => {
        this.setState({filterBy: filter});
    }

    render(){
        let usersData = this.props.usersData;
        if (this.props.toggle) {
            if(this.state.filter){
                console.log('surname filter boiii: ', this.state.filter);
                usersData = usersData.filter( item => {
                    return item[this.state.filterBy].toLowerCase().includes(this.state.filter.toLowerCase());
                })
            }
            return (
                <section className={'usersList'}>
                    <ListFilter
                        usersCounter={this.props.usersCounter}
                        onSliderChange={this.props.onSliderChange}
                        setFilterText={this.setFilterText}
                        changeFilter={this.changeFilter}
                    />
                    <table>
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <TBody
                            usersData={usersData}
                            pageNumber={this.props.pageNumber}
                            usersPerPage={this.props.usersPerPage}
                            deleteUser={this.props.deleteUser}
                        />
                        </tbody>
                    </table>
                    <Pagin
                        pageNumber={this.props.pageNumber}
                        usersPerPage={this.props.usersPerPage}
                        usersCounter={this.props.usersCounter}
                        onChangePage={this.props.onChangePage}
                    />
                </section>
            )
        } else {
            return null;
        }
    }

}