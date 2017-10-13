import { ListaModelos, ModelModelos }   from  '../model/index';
import { DBModel }                      from  '../services/index';
import { ModelosView }                  from  '../view/index';

export class ControllerModelos {

    constructor() {

        this._$ = document.querySelector.bind(document);
        this._nome = this._$('#nome');
        this._idade = this._$('#idade');
        this._foto = this._$('#foto');

        this._descricao = this._$('#descricao');
        this._servicos = document.querySelectorAll('input[name=servicos]:checked');
        
        this._lista = new ListaModelos();

        this._view = new ModelosView(this._$('#view'));
        this._view.update(this._lista);
    };


    servicos() {
        let listaServicos = [];
        
        this._servicos.forEach(function (e, i) {
            listaServicos.push({
                "nome": e.value,
                "valor": i
            });
        });

        return listaServicos;
    };

    _getImage() {

        var inp = this._foto;
        var photos = [];
        
        console.log(inp.files.length);
        console.log(inp.files);

        for (var i = 0; i < inp.files.length; ++i) {
            var obj = {};
            obj.name= inp.files.item(i).name;

            var reader = new FileReader();
            
            reader.onload = function (e) {
                obj.base64 = reader.result;
                photos.push(obj);
               
            };

            reader.readAsDataURL(inp.files.item(i));        
        }

        return photos;
        // var photos = [{
        //     nome: 'teste',
        //     url:'https://assets.vogue.com/photos/589151c258aa89a00d542b38/master/pass/00-5-things-emma-stone.jpg'  
        // }];
        
        // return photos;
        
    }

    addModelo() {
        console.log(DBModel);

        //DBModel.getConnection().then(connection => console.log(connection));

        this._lista.adiciona(this._criarModelo());
        this._view.update(this._lista);
    };

    _criarModelo() {
       

        let m = new ModelModelos(
            this._nome.value,
            this._idade.value,
            this._descricao.value,
            this._getImage(),
            this.servicos()
        );
        
        return m;
    };


    getList() {
        return this._lista.getModelos;
    };


}


var foto = [{
  nome: 'teste',
  url:'https://assets.vogue.com/photos/589151c258aa89a00d542b38/master/pass/00-5-things-emma-stone.jpg'  
}];