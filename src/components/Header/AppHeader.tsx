import * as React from 'react';

const Header = (props) => {
    return (
        <header>
            <button onClick={props.showList}>Show/Hide List</button>
            <button onClick={props.showForm}>Show/Hide Form</button>
        </header>
    )
}

export default Header;