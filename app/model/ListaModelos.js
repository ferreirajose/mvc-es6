export class ListaModelos{
    constructor(){
        this.modelos = [];
    }   

    adiciona(modelo){
        this.modelos.push(modelo);
    };

    getModelos(){
        return [].concat(this.modelos);
    };

    
}