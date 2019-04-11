import React, { Component } from 'react';
//import './App.css';
import './Slider.css';
import Slider from './Slider.js'

class App extends Component {
    render() {
        let img1=[];
        let img2=[];
        for (let i = 1; i <52;i++){
            img1[i] = Math.floor(Math.random() * Math.floor(50));
            img2[i] = Math.floor(Math.random() * Math.floor(50));
        }
        return (
            <div className="App">
                <Slider
                    data = {img1}
                    slide_time = {Math.floor(1000 + Math.random() * Math.floor(1000))}
                    id = 'id_slider_1'
                />
                <Slider
                    data = {img2}
                    slide_time = {Math.floor(1000 + Math.random() * Math.floor(1000))}
                    id = 'id_slider_2'
                />
            </div>

        );
    }
}


export default App;
