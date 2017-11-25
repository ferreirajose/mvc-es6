import { ListaModelos, ModelModelos, Mensagem }   from  '../model/index';
import { DBModel }                      from  '../services/index';
import { ModelosView, MensagemView }    from  '../view/index';
import { ModelosDAO }                   from  '../dao/index';
import { DateConverte }                 from  '../helpers/index';

export class ControllerModelos {
    
    constructor() {

        this._$ = document.querySelector.bind(document);

        this._nome = this._$('#nome').value;
        this._idade = this._$('#idade').value;
        this._photos = localStorage.getItem('photos');
        this._file = this._$('#foto');
        this._descricao = this._$('#descricao').value;
        this._servicos = document.querySelectorAll('input[name=servicos]:checked');

        this._lista = new ListaModelos();
        this._view = new ModelosView(this._$('#view'));
        this._view.update(this._lista);

        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView(this._$('#mensagemView'));
        this._mensagemView.update(this._mensagem);
        
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

    // getImage() {

    //     var readFile = function(file, callback){
    //         var reader = new FileReader();
    //         reader.onload = callback;
    //         reader.readAsDataURL(file);
    //     };
        
    //     this._$('#foto').addEventListener("change", function (event){ 
            
    //         readFile(this.files[0], function(e) {                
    //             localStorage.setItem('photos', e.target.result);  
    //         });
            
    //     });
    // }
        

    // _getImage() {
    //     var inp = this._$('#foto');
    //     //console.log(inp.files);
    //     var photos = [];
    //     var obj = {};
    //     for (var i = 0; i < inp.files.length; ++i) {
           
    //         obj.name= inp.files.item(i).name;
    //         var reader = new FileReader();
    //         reader.onload = (e) => {
    //             obj.base64 = reader.result;

    //             reader = null; //deallocate
    //             //if(i===inp.files.length-1)
    //                 //callback(photos);
                    
       
    //         };
    //         reader.readAsDataURL(inp.files.item(i));  
    //         localStorage.setItem('photos', obj);
    //     }
        
    // }

    _getImage() {
        let inp = this._$('#foto');
        let obj = {};
        let reader = new FileReader();

        inp.addEventListener("change", function (event){
            
            // inp.files.forEach(function(value, index){
            //     obj.name= inp.files.item(index).name;
                
            //     reader.onload = (e) => {
            //        obj.base64 = reader.result;
            //        console.log(obj);
            //        reader = null; //deallocate
                    
            //        localStorage.setItem('photos', JSON.stringify(obj));        
           
            //     };
            //     reader.readAsDataURL(inp.files.item(index));  
            // });

            for (var i = 0; i < inp.files.length; ++i) {
                
                 obj.name= inp.files.item(i).name;
                 
                 reader.onload = (e) => {
                    obj.base64 = reader.result;
                    reader = null; //deallocate
                     
                    localStorage.setItem('photos', JSON.stringify(obj));        
            
                 };
                 reader.readAsDataURL(inp.files.item(i));  
             }
        });
        
    }

    addModelo() {
    
        DBModel.getConnection().then(connection => {

            new ModelosDAO(connection).addModelos(this._criarModelo());
            this._lista.adiciona(this._criarModelo());
            this._view.update(this._lista);

            this._mensagem.texto = 'Negociação adicionada com sucesso';
            this._mensagemView.update(this._mensagem);
            
        }).catch(error => { 
            console.log(error);
        });        
    };

    _criarModelo() {
        
        var m = new ModelModelos(
            this._nome,
            DateConverte.stringToDate(this._idade),
            this._descricao,
            this._photos,
            this.servicos()
        );
        
        return m;
    };
    
    getList() {
        
        DBModel.getConnection().then(connection => {
            new ModelosDAO(connection).listModelos().then(modelos => {
                //console.log(modelos);

                if(modelos.length > 0){
                    modelos.forEach(modelo => {
                        this._lista.adiciona(modelo);
                        this._view.update(this._lista);
                    });
                }else{
                    this._mensagem.texto = 'Não há Registros diponiveis';
                    this._mensagemView.update(this._mensagem);
                }
            });
        }).catch(error => {
            console.log(`Error: ${error} na lista`);
        });
    };
}
