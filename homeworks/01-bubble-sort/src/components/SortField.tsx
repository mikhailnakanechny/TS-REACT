import React from 'react';
import { randomNum, randomArray } from './Helpers';

interface MyProps { }

interface MyState {
    drawArr: number[]
}

export class SortField extends React.Component<MyProps, MyState> {

    constructor(props: {}) {
        super(props);
        this.state = { drawArr: randomArray(randomNum(20, 10), 500) }
        this.onGenerateArr = this.onGenerateArr.bind(this);
        this.onStartSorting = this.onStartSorting.bind(this);
    }

    onGenerateArr() {
        this.setState({ drawArr: randomArray(randomNum(20, 10), 500) });
    }

    onStartSorting() {

    }

    render() {
        return <div className="sort-field" onClick={this.onGenerateArr}>
            {this.state.drawArr.map((el, id) => (
                <div className="column-value" style={{ height: el }} key={id}>
                    <span className="column-text" >{el}</span>
                </div>
            ))
            }
        </div>;
    }
}