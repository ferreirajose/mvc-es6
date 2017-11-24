
// export var selector = (function(elem){
    
//     _unique: function(){
//         $ = document.querySelector.bind(document);
//     }

//     _mult: function(){
//         return document.querySelectorAll(elem);
//     }

//     return{
//         $u: _unique,
//         $m: _mult
//     }

// })();


// $j('#div')

export const z = (selector, context = document) => {
    const regex = /^#/g;   
    let ele;
    if(regex.test(selector[0])){
        ele = document.getElementById(selector);
    }else{
        ele = context.querySelectorAll(selector);
    }

    return ele;
};