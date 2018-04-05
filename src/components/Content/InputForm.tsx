import * as React from 'react';
import './InputForm.css';

const InputForm = (props) => {
    if(props.toggle){
        return (
            <div>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
            </div>
        )
    }else{
        return null;
    }
}

export default InputForm;