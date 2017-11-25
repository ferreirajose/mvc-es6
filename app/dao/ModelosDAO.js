import { ModelModelos }   from  '../model/index';

export class ModelosDAO{
    
    constructor(connection){
        this._connection = connection;
        this._store =  'modelos';
    }

    addModelos(modelo){
        let promise = new Promise((resolve, reject) => {
            //solicitando abertura de transação, para ler e escrever
            let transaction = this._connection.transaction([this._store], 'readwrite');
            // criando store = table, semelhate a criação de uma table em SQL;
            let store =  transaction.objectStore(this._store);
            
            let request = store.add(modelo);
                request.onsuccess = e => {
                    console.log('Modelos salva com sucesso');
                    localStorage.removeItem("photos");
                    resolve(e.target.result);
                };
    
                request.onerror = e => {
                    console.log('Não foi possivel salvar Modelos: ' + e.target.error);
                    reject("Error: " + e.target.error.name);
                };
        });

        return promise;
        
    }

    listModelos(){

        let promise = new Promise((resolve, reject) => {
            
            let transaction = this._connection.transaction([this._store], 'readwrite');
            let store = transaction.objectStore(this._store);

            let curso = store.openCursor();
            let modelos = [];

            curso.onsuccess = e => {
                let ponteiro = e.target.result;

                if(ponteiro){
                    let dado =  ponteiro.value;
                    // dado guarda os valores da tabela (stores) e inserri no "array modelos"
                    modelos.push(
                        new ModelModelos(
                            dado._nome,
                            dado._idade,
                            dado._descricao,
                            JSON.parse(dado._fotos),
                            dado._servicos
                        )
                    );

                    ponteiro.continue();

                }else{
                    // quando o ponteiro for null, o resolve() vai retornar um array com valores do curso, um array vazio que vai ser passado por resolve()
                   // console.log(modelos);
                    resolve(modelos);
                }
            };

            curso.onerror = e => {
                reject("Name Error: " + e.target.error.name + "\n" + " Error: " + e.target.error);
                console.log("Name Error: " + e.target.error.name + "\n" + " Error: " + e.target.error);
            };

        });

        return promise;
        
    }

    removeModelos(){
        
    }

}