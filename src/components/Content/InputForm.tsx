import * as React from 'react';

interface Props {
    toggle: boolean,
    getInputsValue: (name: string, surname: string, age: number) => void
}

interface State {
    isCorrect: boolean,
    input1: string,
    input2: string,
    input3: number
}

class InputForm extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            isCorrect: false,
            input1: '',
            input2: '',
            input3: 0
        }
    }

    changeButtonClass = (input) => {
        new Promise(((resolve, reject) => {
            this.setState({[input.target.id]: input.target.value});
            resolve();
        })).then((data)=>{
            this.setState({isCorrect: !!(this.state.input1 && this.state.input2 && this.state.input3)});
        })
        !(input.target as HTMLInputElement).value ?  (input.target as HTMLInputElement).style.border = '1px solid red':  (input.target as HTMLInputElement).style.border = '1px solid black';
    }



    render() {
        if (this.props.toggle) {
            return (
                <section className={'formSection'}>
                    <form onSubmit={(e) => {
                        this.props.getInputsValue(this.state.input1, this.state.input2, this.state.input3);
                        e.preventDefault()
                    }}>
                        <Input changeClass={this.changeButtonClass} number={1} type={'string'} name={'Name'}/>
                        <Input changeClass={this.changeButtonClass} number={2} type={'string'} name={'Surname'}/>
                        <Input changeClass={this.changeButtonClass} number={3} type={'number'} name={'Age'}/>
                        {this.state.isCorrect ? <button className={'correct'}>Wyslij</button> : <button className={'warning'}>Oops!</button>}
                    </form>
                </section>
            )
        } else {
            return null;
        }
    }
}

const Input = (props) => {
    return (
        <div className={'singleInput'}>
            <label htmlFor={'input'+props.number}>
                <span>{props.name}: </span>
                <input
                    id={'input'+props.number}
                    type={props.type}
                    required={true}
                    onChange={(ev)=>props.changeClass(ev)}
                />
            </label>
        </div>
    )
}

export default InputForm;
