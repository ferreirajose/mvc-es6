export class ModelModelos{

    constructor(nome, idade, descricao, foto, listaServicos){
        this._nome       = nome;
        this._idade      = idade;
        this._foto       = foto;
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
        return this._foto;
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

    set setFoto(foto){
        this._foto = foto;
    };

    set setDescricao(descricao){
        this._descricao = descricao;
    };

    set setServicos(listaServicos){
        this._servicos.push(listaServicos);
    };

}