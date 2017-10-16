export class DateConverte {
    
    constructor(){}

    stringToDate(string){
        if(typeof string == string){

            let date = string.split('/');
            let newDate = new Date(date[2], date[1], date[0]);
            return newDate;

        }else{
            console.log('Formato de data Invalido. Informe 02/20/1991');
        }
    }

    //data.getDate() + " / " + data.getMonth() + 1 + " / "+  data.getFullYer();
    dateToString(data){
        if(typeof data == Date){
            let string = `${data.getDate() + " / " + data.getMonth() + 1 + " / "+  data.getFullYer()}`;
            return string;
        }else{
            console.log('Não é um data valida');
        }        
    }
}