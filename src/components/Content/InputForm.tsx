import * as React from 'react';

interface Props {
    toggle: boolean,
    getInputsValue: () => void
}

interface State {
    isCorrect: boolean,
}

class InputForm extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            isCorrect: false
        }
    }

    changeButtonClass = () => {
        this.setState({isCorrect: !!(this.refs.input1 as HTMLInputElement).value && !!(this.refs.input2 as HTMLInputElement).value && !!(this.refs.input3 as HTMLInputElement).value});
        if (!this.state.isCorrect) {
            if(!(this.refs.input1 as HTMLInputElement).value){
                (this.refs.input1 as HTMLInputElement).style.border = '1px solid red';
            }else{
                (this.refs.input1 as HTMLInputElement).style.border = '1px solid black';
            }
            if(!(this.refs.input2 as HTMLInputElement).value){
                (this.refs.input2 as HTMLInputElement).style.border = '1px solid red';
            }else{
                (this.refs.input2 as HTMLInputElement).style.border = '1px solid black';
            }
            if(!(this.refs.input3 as HTMLInputElement).value){
                (this.refs.input3 as HTMLInputElement).style.border = '1px solid red';
            }else{
                (this.refs.input3 as HTMLInputElement).style.border = '1px solid black';
            }
        }
    }

    render() {
        if (this.props.toggle) {
            return (
                <section className={'formSection'}>
                    <form onSubmit={(e) => {
                        this.props.getInputsValue();
                        e.preventDefault()
                    }}>
                        <div className={'singleInput'}>
                            <label htmlFor="input1">
                                <span>Name: </span>
                                <input onChange={this.changeButtonClass} id={'input1'} ref={'input1'} type="text"
                                       placeholder={'input1'} required={true}/>
                            </label>
                        </div>
                        <div className={'singleInput'}>
                            <label htmlFor="input2">
                                <span>Surname: </span>
                                <input onChange={this.changeButtonClass} id={'input2'} ref={'input2'} type="text"
                                       placeholder={'input2'} required={true}/>
                            </label>
                        </div>
                        <div className={'singleInput'}>
                            <label htmlFor="input3">
                                <span>Age: </span>
                                <input onChange={this.changeButtonClass} id={'input3'} ref={'input3'} type="text"
                                       placeholder={'input3'} required={true}/>
                            </label>
                        </div>
                        {this.state.isCorrect ? <button className={'correct'}>Wyslij</button> :
                            <button className={'warning'}>Oops!</button>}
                    </form>
                </section>
            )
        } else {
            return null;
        }
    }
}

export default InputForm;
