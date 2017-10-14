var DBModel = (function(){
    const stores = ['modelos'];
    const version = 1;
    const dbName = 'JM';

    var connection = null;
    var close = null;

    class DBModel {
    
        constructor() {
    
            throw new Error('Não é Possivel criar Instancia da Class DBModel');
        }
    
        static getConnection() {
    
            let promise;
    
            promise = new Promise((resolve, reject) => {
                let openRequest = window.indexedDB.open(stores, version);
                
                openRequest.onupgradeneeded = e => {
    
                    console.log('cria ou altera uma banco já existente');
                    this._createStores(event.target.result);
    
                };
    
                openRequest.onsuccess = e => {
                    if(!connection){
                        connection = event.target.result;
                        close =  connection.close.bind(connection);
                        connection.close = function(){
                            throw new Error('Voce não pode fechar essa conecção');
                        }
                    }

                    resolve(connection);
                    
                };
    
                openRequest.onerror = e => {
                    console.log(`Error: ${e.target.error}`);
                    resolve(`O erro é: ${e.target.error.name}`);
                };
    
            });
    
            return promise;
        }
    
        static _createStores(connection) {
    
            stores.forEach(store => {
    
                if (connection.objectStoreNames.contains(store)) {
                    connection.deleteObjectStore(store);
                }
    
                connection.createObjectStore(store, { autoIncrement: true });
            });
        }    

        static closeConnection(){

            if(connection){
                close();
                connection = null;
            }
        }
    }

    exports.DBModel = DBModel;

})();


