export class ModelosDAO{
    
    constructor(connection){
        this._connection = connection;
        this._store =  'modelos';
    }

    addModelos(modelo){
        console.log(modelo)
        let promise = new Promise((resolve, reject) => {

            let transaction = this._connection.transaction([this._store], 'readwrite');
            let store =  transaction.objectStore(this._store);
    
            let request = store.add(modelo);
    
                request.onsuccess = e => {
                    resolve(e.target.result);
                };
    
                request.onerror = e => {
                    console.log(e.target.error);
                    reject(`Error Name: ${e.target.error.name}`);
                };
        });

        return promise;
        
    };

    listModelos(){
        
    };

    removeModelos(){
        
    };

}