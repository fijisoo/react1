import * as React from 'react';
import Pagin from './Pagin';
import ListFilter from './ListFilter';

interface Props {
    toggle: boolean,
    usersData : {name: string, surname: string, age: number}[],
    usersPerPage: number,
    pageNumber: number,
    usersCounter: number,
    onSliderChange: (usersPerPage: number)=>void,
    onChangePage: (pageNumber: number)=>void
}

interface State {

}

const TBody = (props) => {
    return (
        props.usersData.map((x, index) => (
                    <tr key={index}>
                        <td>{index + 1 + props.pageNumber * props.usersPerPage}</td>
                        <td>{x.name}</td>
                        <td>{x.surname}</td>
                        <td>{x.age}</td>
                    </tr>

                )
        )
    )
}

export default class UsersList extends React.Component<Props,State>{
    constructor(props){
        super(props);

        this.state = {

        }
    }

    render(){
        if (this.props.toggle) {
            return (
                <section className={'usersList'}>
                    <ListFilter
                        usersCounter={this.props.usersCounter}
                        onSliderChange={this.props.onSliderChange}
                    />
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
                        <TBody
                            usersData={this.props.usersData}
                            pageNumber={this.props.pageNumber}
                            usersPerPage={this.props.usersPerPage}
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