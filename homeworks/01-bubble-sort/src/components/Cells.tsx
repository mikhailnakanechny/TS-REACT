import React from 'react';
import { randomNum, randomArray } from './Helpers';

interface MyProps {}

interface MyState {
    drawArr: number[]
}

export class SortField extends React.Component<MyProps, MyState> {

    constructor(props: {}) {
        super(props);
        this.state = { drawArr: randomArray(randomNum(20, 10), 1000) }
        this.onGenerateArr = this.onGenerateArr.bind(this);
        this.onStartSorting = this.onStartSorting.bind(this);
    }

    onGenerateArr() {
        this.setState({ drawArr: randomArray(randomNum(20, 10), 1000) });
    }

    onStartSorting() {

    }

    render() {
        return <div onClick={this.onGenerateArr}>{this.state.drawArr}</div>;
    }
}