export class DateConverte {
    
    constructor(){}

    stringToDate(string){
        console.log(string);
        if(typeof string == 'string'){
            let date = string.split('-');
            //new Date(year, month, day, hours, minutes, seconds, milliseconds)
            let newDate = new Date(date[0], date[1], date[2]);
            console.log(newDate);
            return newDate;

        }else{
            console.log('Formato de data Invalido. Informe 02/20/1991');
        }
    }

    dateToString(val){
        console.log(val);
        if(val instanceof Date){
            var data = new Date(val);
            let string = data.getDate() + "/" + (data.getMonth() < 9 ? '0': '') + (data.getMonth()+1) + "/"+  data.getFullYear();
            return string;
        }else{
            console.log('Não é um Data Valida');
        }        
    }
}