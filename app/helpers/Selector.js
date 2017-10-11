
export var selector = (function(elem){

    _unique: function(){
        return document.querySelector(elem);
    }

    _mult: function(){
        return document.querySelectorAll(elem);
    }

    return{
        unique:_unique,
        mult: _mult
    }
    
})();