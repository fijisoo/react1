import * as React from 'react';

interface Props {
    usersCounter: number,
    onSliderChange: (usersPerPage: number) => void,
    setFilterText: (data: string) => void,
    changeFilter: (data: string) => void
}

interface State {
    toggleFilter: boolean
}

export default class ListFilter extends React.Component<Props, State> {

    constructor(props) {
        super(props);

        this.state = {
            toggleFilter: true
        }
    }

    componentDidMount() {
        this.props.changeFilter('name');
    }

    toggleFilter = () => {
        this.setState({toggleFilter: !this.state.toggleFilter});
    }

    render() {
        console.log(this.state.toggleFilter)
        if (this.state.toggleFilter) {
            return (
                <section className={'filter'}>
                    <div className={'filterHeader'}>
                        <label onClick={this.toggleFilter}>
                            <p>Filter</p>
                            <span>❌</span>
                        </label>
                    </div>
                    <div className={'filterBody'}>
                        <label htmlFor="">
                            <span>Users per page:</span>
                            <input
                                type="range"
                                min={1}
                                max={this.props.usersCounter}
                                onChange={(ev) => {
                                    console.log(ev.target.value);
                                    this.props.onSliderChange(parseInt(ev.target.value))
                                }}
                            />
                        </label>
                        <label htmlFor="">
                            <span>Search for user: </span>
                            <input
                                type="text"
                                onChange={(e) => {
                                    this.props.setFilterText(e.target.value)
                                }}
                            />
                        </label>
                        <label htmlFor="">
                            <span>Filter by: </span>
                            <select name="filterBy"
                                    onChange={(ev) => {
                                        this.props.changeFilter(ev.target.value)
                                    }}
                                    defaultValue={'name'}
                            >
                                <option value="name">Name</option>
                                <option value="surname">Surname</option>
                                <option value="age">Age</option>
                            </select>
                        </label>
                    </div>
                </section>
            )
        } else {
            return (
                <section className={'filter'}>
                    <div className={'filterHeader'}>
                        <label onClick={this.toggleFilter}>
                            <p>Filter</p>
                            <span>✅</span>
                        </label>
                    </div>
                </section>
            )
        }
    }
}

