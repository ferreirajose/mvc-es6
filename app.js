

import { ControllerModelos } from '../mvc-es6/app/controller/index';

var btn = document.querySelector("#btn-save");
var form = document.querySelector("#form-modelos");


btn.addEventListener('click', function(e){

    e.preventDefault;  
    let modelo = new ControllerModelos();
    modelo.addModelo();    
    
});

window.addEventListener("load", function (event){
    let modelo = new ControllerModelos();
    modelo.getList();
});



