export class DateConverte {
    
    constructor(){}

    stringToDate(string){
        if(typeof string == 'string'){
            let date = string.split('-');
            let newDate = new Date(date[2], date[1], date[0]);

            return newDate;

        }else{
            console.log('Formato de data Invalido. Informe 02/20/1991');
        }
    }

    dateToString(val){
        console.log(val);
        if(val instanceof Date){
            var data = new Date(val);
            let string = data.getDate() + "/" + (date.getMonth() < 9 ? '0': '') + (date.getMonth()+1) + "/"+  data.getFullYear();
            return string;
        }else{
            console.log('Não é um Data Valida');
        }        
    }
}