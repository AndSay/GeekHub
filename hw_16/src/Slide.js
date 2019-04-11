import React from 'react'
import Pic from './Pic.js'

function Slide(state) {
    console.log(state);
    return (

            <div className="sliderWrapper" style={{
            }}>
                <div>
                    {Pic(state)}
                </div>
            </div>


    );
}




export default Slide;
