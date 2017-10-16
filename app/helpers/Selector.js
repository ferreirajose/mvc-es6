
export var selector = (function(elem){
    
    _unique: function(){
        $ = document.querySelector.bind(document);
    }

    _mult: function(){
        return document.querySelectorAll(elem);
    }

    return{
        $u: _unique,
        $m: _mult
    }

})();


$j('#div')