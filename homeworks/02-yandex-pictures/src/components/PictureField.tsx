import React, { SyntheticEvent } from 'react';
import { randomNum, randomArray } from './Helpers';

interface PictureFieldProps { };
interface PictureFieldState {
    pictureArray: PictureArray,
    dimensions: Dimensions[]
};
type PictureArray = string[];
type Dimensions = { height: number, width: number }

const MAX_ARR_LENGTH = 50;
const MIN_ARR_LENGTH = 30;
const MAX_ARR_VALUE = 150;
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
            pictureArray: [],
            dimensions: [],
        }
        this.onImgLoad = this.onImgLoad.bind(this);
    }

    componentDidMount() {
        getImagesList().then(result => this.setState({ pictureArray: result }))
    }

    onImgLoad(event: SyntheticEvent<HTMLDivElement>): void {
        const image = event.currentTarget;
        console.log(image);
        const newValue = { height: image.offsetHeight, width: image.offsetWidth };
        console.log(newValue);
        this.setState({ dimensions: [...this.state.dimensions, newValue] });
    }

    render() {
        const { pictureArray } = this.state;
        const arr = [...this.state.dimensions];
        return (
            <div className="field-container">
                {pictureArray.map((image, id) => {
                    const outerDivStyle = {width: '200px', flexGrow: 1};
                    const innerDivStyle = {paddingBottom: '0'};
                    if (!!arr[id]?.width && !!arr[id]?.height) {
                        outerDivStyle.width = (arr[id].width * 200) / arr[id].height + "px";
                        outerDivStyle.flexGrow = (arr[id].width * 200) / arr[id].height;
                        innerDivStyle.paddingBottom = (arr[id].height / arr[id].width) * 100 + "%";
                    }
                    return (
                        <div className="image-wrapper" key={`wrap-${id}`} style={outerDivStyle}>
                        {/* <div className="image-wrapper" key={`wrap-${id}`}> */}
                            <div style={innerDivStyle}></div>
                            <img className="image" key={`corgi-${id}`} src={image} alt={`corgi-${id}`} onLoad={this.onImgLoad} />
                        </div>
                    )
                })}
            </div>
        );
    }
}