import PenguinController from './PenguinController.js';
import PenguinView from './PenguinView.js';
import PenguinModel from './PenguinModel/PenguinModel';


(function($) {
    console.log("index - ok");
    document.addEventListener('DOMContentLoaded', function () {
        let todolist={};
        let size = 20;
        PenguinModel ();
        // PenguinView();
        PenguinController();
    });




})(jQuery)