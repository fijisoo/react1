import * as React from 'react';

const Header = (props) => {
    return (
        <header>
            <button onClick={props.showForm} className={'correct'}>Show/Hide Form</button>
            <button onClick={props.showList} className={'correct'}>Show/Hide List</button>
        </header>
    )
}

export default Header;