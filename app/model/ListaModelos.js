export class ListaModelos{
    constructor(){
        this.modelos = [];
    }   

    adiciona(modelo){
        console.log(modelo);
        this.modelos.push(modelo);
    };

    getModelos(){
        return [].concat(this.modelos);
    };

    
}