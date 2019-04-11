import React, {Component} from 'react';
// import Pic from './Pic';
import './Slider.css';
import Slide from './Slide';
import Pic from "./Pic";

class Slider extends Component {

    constructor (props) {
        super(props);
        this.state = {
            slides : props.data,
            slide_time: props.slide_time,
            slide_number: 0,
            slide_position: 0,
            class: props.id
        }
    }

    componentDidMount() {
        let SInter = setInterval(() => {
            console.log(this.state)
            console.log(document.querySelector('.' + this.state.class + ' .slide'));
            if (this.state.slide_number === this.state.slides.length - 1) {
                this.setState({
                    slide_number: 0,
                    slide_position: -(this.state.slide_number * document.querySelector('.' + this.state.class + ' .slide').clientWidth)
                }) } else {
                this.setState({
                    slide_number: this.state.slide_number + 1,
                    slide_position: -(this.state.slide_number * document.querySelector('.' + this.state.class + ' .slide').clientWidth)
                })
            }
        }, this.state.slide_time);
    }



    render() {

        return (
            <div>
                {
                    Pic(this.state)

                }
            </div>
        );
    }
}

export default Slider;