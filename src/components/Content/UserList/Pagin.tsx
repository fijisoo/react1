import * as React from 'react';
import * as _ from "lodash";

interface Props{
    pageNumber: number,
    usersPerPage: number,
    usersCounter: number,
    onChangePage: (pageNumber: number) => void
}

interface State{

}

export default class Pagin extends React.Component<Props, State>{
    constructor(props){
        super(props);

        this.state = {

        }
    }

    onNext = () => {
        if(this.props.pageNumber >= (this.props.usersCounter/this.props.usersPerPage)-1){
            console.log('przegraczasz granice kolego');
        }else{
            this.props.onChangePage(this.props.pageNumber + 1);
        }
    }

    onBack = () => {
        if(this.props.pageNumber <= 0){
            console.log('przegraczasz granice kolego');
            console.log('costam: ',this.props.pageNumber);
        }else{
            this.props.onChangePage(this.props.pageNumber - 1);
        }
    }

    render(){
        if((this.props.usersCounter/this.props.usersPerPage) > 3){
            return (
                <div>
                    <button onClick={this.onBack}>{'<<'}</button>
                    {_.range(0, (this.props.usersCounter/this.props.usersPerPage)).map((smth)=>{
                        return (<button key={smth} onClick={(ev)=>{this.props.onChangePage(smth)}}>{smth}</button>)
                    })}
                    <button onClick={this.onNext}>{'>>'}</button>
                </div>
            )
        }else{
            return (
                <div>
                    {_.range(0, (this.props.usersCounter/this.props.usersPerPage)).map((smth)=>{
                        return (<button key={smth} onClick={(ev)=>{this.props.onChangePage(smth)}}>{smth}</button>)
                    })}
                </div>
            )
        }
    }



}