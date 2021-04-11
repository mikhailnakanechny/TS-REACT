import React from 'react';
import { randomNum, randomArray, delay } from './Helpers';
import Button from './Button';
import Column from './Column';

interface SortFieldProps { };

interface SortFieldState {
    drawArr: number[],
    isSorted: string,
};

type StepParams = [number[], boolean];

const MAX_ARR_LENGTH = 15;
const MIN_ARR_LENGTH = 10;
const MAX_ARR_VALUE = 500;
export class SortField extends React.Component<SortFieldProps, SortFieldState> {

    constructor(props: SortFieldProps) {
        super(props);
        this.state = {
            drawArr: randomArray(randomNum(MAX_ARR_LENGTH, MIN_ARR_LENGTH), MAX_ARR_VALUE),
            isSorted: 'Not started'
        }
        this.onGenerateArr = this.onGenerateArr.bind(this);
        this.onStartSorting = this.onStartSorting.bind(this);
    }

    onGenerateArr() {
        this.setState({ drawArr: randomArray(randomNum(MAX_ARR_LENGTH, MIN_ARR_LENGTH), MAX_ARR_VALUE) });
        this.setState({ isSorted: 'Not started' });
    }

    onStartSorting() {
        const arr: number[] = [...this.state.drawArr];
        this.bubbleSort(arr);
        this.setState({ isSorted: 'Sorting' });
    }

    bubbleStep(arr: number[], j: number, isSwapped: boolean): StepParams {
        if (arr[j] > arr[j + 1]) {
            let temp: number = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            isSwapped = true;
            this.setState({ drawArr: arr });
        }
        return [arr, isSwapped];
    }

    async bubbleSort(arr: number[]) {
        const len: number = arr.length;
        let isSwapped: boolean = false;
        for (let i = 0; i < len; i++) {
            isSwapped = false;
            for (let j = 0; j < len; j++) {
                await delay();
                const stepResult: StepParams = this.bubbleStep(arr, j, isSwapped);
                arr = stepResult[0];
                isSwapped = stepResult[1];
            }
            if (!isSwapped) {
                this.setState({ isSorted: 'Sorted!' });
                break
            }
        }
    }

    render() {
        return (
            <div className="field-container">
                <div className="sort-field">
                    {this.state.drawArr.map((el, id) => (
                        <Column el={el} id={id} />
                    ))
                    }
                </div>
                <div className="status-row">
                    {this.state.isSorted}
                </div>
                <div className="buttons-row">
                    <Button elemClass="btn-main" message="Generate" onClick={this.onGenerateArr} />
                    <Button elemClass="btn-main" message="Sort It!" onClick={this.onStartSorting} />
                </div>
            </div>
        );
    }
}