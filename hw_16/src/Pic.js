import React from 'react'
import Slide from "./Slide";
function Pic(state){

//     let SInter = setInterval(()=>{
// console.log(state)
//         console.log(document.querySelector('.' + state.class + ' .slide'));
//         if (state.slide_number === state.slides.length - 1) {
//             state.slide_number = 0;
//             state.slide_position = -(state.slide_number * document.querySelector('.' + state.class + ' .slide').clientWidth);
//         } else {
//             state.slide_number = state.slide_number + 1;
//             state.slide_position = -(state.slide_number * document.querySelector('.' + state.class + ' .slide').clientWidth);
//         }
//     }, state.slide_time);
         return (
             <div className = {"slider " + state.class}>
                 <div className="sliderWrapper" style={{
                     transform: `translateX(${state.slide_position}px)`,
                     transition: `transform linear ${state.slide_time/2}ms`}}>
                 {
                     state.slides.map ((slide,i)=>{
                     return (
                         <div className='slide' key = {state.class + i}>
                             <img alt="" src = {'/img/img' + slide + '.jpg'}/>
                         </div>)
                 })
                 }
                 {/*<img alt="" src={img}/>*/}
             </div>
             </div>
         );
        //
        // return (
        //     <div className = "slide">
        //         <img alt="" src={img}/>
        //     </div>
        // );
    }
export default Pic;
