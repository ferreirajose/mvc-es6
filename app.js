

import { ControllerModelos } from '../mvc-es6/app/controller/index';

var btn = document.querySelector("#btn-save");

btn.addEventListener('click', function(e){

    e.preventDefault();

    let modelo = new ControllerModelos();
    modelo.addModelo();    
    modelo.getList();
});

window.addEventListener("load", function (event){
    
    let modelo = new ControllerModelos();
    
    modelo.getList();
    modelo._getImage();
});

// let input = document.querySelector('#foto');

// input.addEventListener("change", function (event){ 

//     readFile(this.files[0], function(e) {
//         obj.base64 = e.target.result;
           
//         localStorage.setItem('photos', e.target.result);  
//         console.log(photos);
//     });
    
// });


// function readFile(file, callback){
//     var reader = new FileReader();
//     reader.onload = callback
//     reader.readAsDataURL(file);
    
// }
