import React from 'react';
import { randomNum, randomArray } from './Helpers';

interface PictureFieldProps { };
interface PictureFieldState {
    pictureArray: PictureArray,
};
type PictureArray = string[];

const MAX_ARR_LENGTH = 30;
const MIN_ARR_LENGTH = 30;
const MAX_ARR_VALUE = 100;
const URL_CORGI: string = "https://dog.ceo/api/breed/corgi/cardigan/images";

async function getImagesList() {
    const pictureArrayTemplate: number[] = randomArray(randomNum(MAX_ARR_LENGTH, MIN_ARR_LENGTH), MAX_ARR_VALUE);
    return fetch(URL_CORGI).then(response => { return response.json() }).then(result => {
        const messageArray = JSON.parse(JSON.stringify(result)).message;
        const pictureArray = pictureArrayTemplate.map((element) => {
            return (messageArray[element]);
        })
        return pictureArray;
    })
}

export default class PictureField extends React.Component<PictureFieldProps, PictureFieldState> {

    constructor(props: PictureFieldProps) {
        super(props);
        this.state = {
            pictureArray: ['']
        }
    }


    componentDidMount() {
        getImagesList().then(result => this.setState({ pictureArray: result }))
    }

    render() {
        const { pictureArray } = this.state;
        console.log(pictureArray);
        return (
            <div className="field-container">
                {pictureArray.map(element => {
                    return <div>{element}</div>
                })}
            </div>
        );
    }
}