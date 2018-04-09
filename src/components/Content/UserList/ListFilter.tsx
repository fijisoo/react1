import * as React from 'react';

interface Props {
    usersCounter: number,
    onSliderChange: (usersPerPage: number)=>void
}

interface State {
    userCounter: number
}

export default class ListFilter extends React.Component<Props, State>{
    constructor(props){
        super(props);

        this.state = {
            userCounter: this.props.usersCounter
        }
    }

    componentDidMount(){
        console.log('amowdmaowdoawd', this.props.usersCounter);
    }
    
    render(){
        console.log('ELO ELO ', this.props.usersCounter)
        return (
            <section>
                <label htmlFor="">
                    <span>Ile per page</span>
                    <input type="range" min={1} max={this.props.usersCounter} onChange={(ev)=>{console.log(ev.target.value); this.props.onSliderChange(parseInt(ev.target.value))}}/>
                </label>
            </section>
        )
    }
    
}

