export class ModelModelos{

    constructor(nome, idade, descricao, listafotos, listaServicos){
        this._nome       = nome;
        this._idade      = idade;
        this._fotos      = listafotos;
        this._descricao  = descricao;
        this._servicos   = listaServicos;
    };

    get getNome(){
        return this._nome;
    };

    get getIdade(){
        return this._idade;
    };

    get getFoto(){
        //return this._foto;
        return [].concat(this._fotos);
    };

    get getDescricao(){
        return this._descricao;
    };

    get getServicos(){
        return [].concat(this._servicos);
    };

    /****************************/
    
    set setNome(nome){
        this._nome = nome;
    };

    set setIdade(idade){
        this._idade = idade;
    };

    set setFoto(listafotos){
        this._fotos.push(listafotos);
    };

    set setDescricao(descricao){
        this._descricao = descricao;
    };

    set setServicos(listaServicos){
        this._servicos.push(listaServicos);
    };

}