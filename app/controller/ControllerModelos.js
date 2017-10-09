import { ListaModelos, ModelModelos } from  '../model/index';
import { ModelosView } from  '../view/index';

export class ControllerModelos {

    constructor() {

        this._$ = document.querySelector.bind(document);
        this._nome = this._$('#nome');
        this._idade = this._$('#idade');

        this._descricao = this._$('#descricao');
        this._servicos = document.querySelectorAll('input[name=servicos]:checked');
        console.log(this._servicos);
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
        let foto = this._$('#foto');
        
        if(foto.files && foto.files[0]){

            let FR = new FileReader();

            FR.addEventListener("load", function(e) {
                setTimeout(function(){
                    console.log(e.target.result);
                    return e.target.result;
                },2000);
                
               
            }); 
              
            FR.readAsDataURL(foto.files[0]);
            
            return foto.files[0];
        }
    }

    addModelo() {
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
        console.log(m);
        console.log('jsoe');
        return m;
    };


    getList() {
        return this._lista.getModelos;
    };


}