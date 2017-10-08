export class ListaModelos{
    constructor(){
        this.modelos = [];
    }   

    adiciona(modelo){
        this.modelos.push(modelo);
    };

    get getModelos(){
        return [].concat(this.modelos);
    };

    
}