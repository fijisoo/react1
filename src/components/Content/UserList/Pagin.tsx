import * as React from 'react';
import * as _ from "lodash";

interface Props {
    pageNumber: number,
    usersPerPage: number,
    usersCounter: number,
    onChangePage: (pageNumber: number) => void
}

interface State {
    toggleLeftPaginNumbers: boolean,
    toggleRightPaginNumbers: boolean
}

export default class Pagin extends React.Component<Props, State> {
    constructor(props) {
        super(props);

        this.state = {
            toggleLeftPaginNumbers: false,
            toggleRightPaginNumbers: false
        }
    }

    onNext = () => {
        if (this.props.pageNumber >= (this.props.usersCounter / this.props.usersPerPage) - 1) {
            console.error('costam: ', this.props.pageNumber);
        } else {
            this.props.onChangePage(this.props.pageNumber + 1);
        }
    }

    onBack = () => {
        if (this.props.pageNumber <= 0) {
            console.error('costam: ', this.props.pageNumber);
        } else {
            this.props.onChangePage(this.props.pageNumber - 1);
        }
    }

    onLeftPaginNumbers = () => {
        this.setState({toggleLeftPaginNumbers: !this.state.toggleLeftPaginNumbers});
    }

    onRightPaginNumbers = () => {
        this.setState({toggleRightPaginNumbers: !this.state.toggleRightPaginNumbers});
    }

    render() {
        console.log('paginacja: ', this.props.pageNumber);
        if ((this.props.usersCounter / this.props.usersPerPage) > 3 && (this.props.usersCounter / this.props.usersPerPage) < 8) {
            return (
                <section>
                    <button className={'leftRightPagin'} onClick={this.onBack}>{'<<'}</button>
                    {_.range(0, Math.ceil((this.props.usersCounter / this.props.usersPerPage))).map((smth) => {
                        return (<button className={'numberPagin'} key={smth} onClick={(ev) => {
                            this.props.onChangePage(smth)
                        }}>{smth}</button>)
                    })}
                    <button className={'leftRightPagin'} onClick={this.onNext}>{'>>'}</button>
                </section>
            )
        } else if ((this.props.usersCounter / this.props.usersPerPage) >= 8) {
            if(this.props.pageNumber <= 2){
                return (
                    <section className={'paginSection'}>
                        <div>
                            <button className={'leftRightPagin'} onClick={this.onBack}>{'<<'}</button>
                            <button className={'numberPagin'} onClick={(ev) => {this.props.onChangePage(0)}}>1</button>
                            <button className={'numberPagin'} onClick={(ev) => {this.props.onChangePage(1)}}>2</button>
                            <button className={'numberPagin'} onClick={(ev) => {this.props.onChangePage(2)}}>3</button>
                            <button className={'numberPagin'} onClick={(ev) => {this.props.onChangePage(3)}}>4</button>
                            <div>
                                <button className={'numberPagin'} onClick={this.onRightPaginNumbers}>...</button>
                                <div className={'hiddenPageNumbersRight'} onClick={this.onRightPaginNumbers}>
                                    {
                                        this.state.toggleRightPaginNumbers && _.range(4, Math.ceil((this.props.usersCounter / this.props.usersPerPage)-1)).map((num) => {
                                            return (<button className={'numberPagin'} key={num} onClick={(ev) => {
                                                this.props.onChangePage(num)
                                            }}>{num + 1}</button>)
                                        })
                                    }
                                </div>
                            </div>
                            <button className={'numberPagin'} onClick={(ev) => {this.props.onChangePage(Math.ceil((this.props.usersCounter / this.props.usersPerPage)-1))}}>{Math.ceil((this.props.usersCounter / this.props.usersPerPage))}</button>
                            <button className={'leftRightPagin'} onClick={this.onNext}>{'>>'}</button>
                        </div>
                    </section>
                )
            }
            if(this.props.pageNumber >= 3 && this.props.pageNumber <= (this.props.usersCounter / this.props.usersPerPage) - 4){
                return (
                    <section className={'paginSection'}>
                        <div>
                            <button className={'leftRightPagin'} onClick={this.onBack}>{'<<'}</button>
                            <button className={'numberPagin'} onClick={(ev) => {this.props.onChangePage(0)}}>1</button>
                            <div>
                                <button className={'numberPagin'} onClick={this.onLeftPaginNumbers}>...</button>
                                <div className={'hiddenPageNumbersLeft'}>
                                    {
                                        this.state.toggleLeftPaginNumbers && _.range(1, Math.ceil(this.props.pageNumber - 1)).map((num) => {
                                            return (<button className={'numberPagin'} key={num} onClick={(ev) => {
                                                this.props.onChangePage(num)
                                            }}>{num + 1}</button>)
                                        })
                                    }
                                </div>
                            </div>
                            <button className={'numberPagin'} onClick={(ev) => {this.props.onChangePage(this.props.pageNumber-1)}}>{this.props.pageNumber}</button>
                            <button className={'numberPagin'} onClick={(ev) => {this.props.onChangePage(this.props.pageNumber)}}>{this.props.pageNumber+1}</button>
                            <button className={'numberPagin'} onClick={(ev) => {this.props.onChangePage(this.props.pageNumber+1)}}>{this.props.pageNumber+2}</button>
                            <div>
                                <button className={'numberPagin'} onClick={this.onRightPaginNumbers}>...</button>
                                <div className={'hiddenPageNumbersRight'}>
                                    {
                                        this.state.toggleRightPaginNumbers && _.range(this.props.pageNumber + 2, Math.ceil((this.props.usersCounter / this.props.usersPerPage) - 1)).map((num) => {
                                            return (<button className={'numberPagin'} key={num} onClick={(ev) => {
                                                this.props.onChangePage(num)
                                            }}>{num + 1}</button>)
                                        })
                                    }
                                </div>
                            </div>
                            <button className={'numberPagin'} onClick={(ev) => {this.props.onChangePage(Math.ceil((this.props.usersCounter / this.props.usersPerPage)-1))}}>{Math.ceil((this.props.usersCounter / this.props.usersPerPage))}</button>
                            <button className={'leftRightPagin'} onClick={this.onNext}>{'>>'}</button>
                        </div>
                    </section>
                )
            }
            if(this.props.pageNumber > (this.props.usersCounter / this.props.usersPerPage) - 4){
                return (
                    <section className={'paginSection'}>
                        <div>
                            <button className={'leftRightPagin'} onClick={this.onBack}>{'<<'}</button>
                            <button className={'numberPagin'} onClick={(ev) => {this.props.onChangePage(0)}}>1</button>
                            <div>
                                <button className={'numberPagin'} onClick={this.onLeftPaginNumbers}>...</button>
                                <div className={'hiddenPageNumbersLeft'}>
                                    {
                                        this.state.toggleLeftPaginNumbers && _.range(1, Math.ceil((this.props.usersCounter / this.props.usersPerPage) - 4)).map((num) => {
                                            return (<button className={'numberPagin'} key={num} onClick={(ev) => {
                                                this.props.onChangePage(num)
                                            }}>{num + 1}</button>)
                                        })
                                    }
                                </div>
                            </div>
                            <button className={'numberPagin'} onClick={(ev) => {this.props.onChangePage(Math.ceil((this.props.usersCounter / this.props.usersPerPage)-4))}}>{Math.ceil((this.props.usersCounter / this.props.usersPerPage)-3)}</button>
                            <button className={'numberPagin'} onClick={(ev) => {this.props.onChangePage(Math.ceil((this.props.usersCounter / this.props.usersPerPage)-3))}}>{Math.ceil((this.props.usersCounter / this.props.usersPerPage)-2)}</button>
                            <button className={'numberPagin'} onClick={(ev) => {this.props.onChangePage(Math.ceil((this.props.usersCounter / this.props.usersPerPage)-2))}}>{Math.ceil((this.props.usersCounter / this.props.usersPerPage)-1)}</button>
                            <button className={'numberPagin'} onClick={(ev) => {this.props.onChangePage(Math.ceil((this.props.usersCounter / this.props.usersPerPage)-1))}}>{Math.ceil((this.props.usersCounter / this.props.usersPerPage))}</button>
                            {/*<button className={'numberPagin'} onClick={(ev) => {this.props.onChangePage(Math.ceil((this.props.usersCounter / this.props.usersPerPage)))}}>{Math.ceil((this.props.usersCounter / this.props.usersPerPage)+1)}</button>*/}
                            <button className={'leftRightPagin'} onClick={this.onNext}>{'>>'}</button>
                        </div>
                    </section>
                )
            }
        } else {
            return (
                <section>
                    {_.range(0, (this.props.usersCounter / this.props.usersPerPage)).map((smth) => {
                        return (<button className={'numberPagin'} key={smth} onClick={(ev) => {
                            this.props.onChangePage(smth)
                        }}>{smth}</button>)
                    })}
                </section>
            )
        }
    }


}