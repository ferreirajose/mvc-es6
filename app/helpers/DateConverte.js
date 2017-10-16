export class DateConverte {
    
    constructor(){}

    stringToDate(string){

       let date = string.split('/');
       let newDate = new Date(date[2], date[1], date[0]);

       return newDate;
    }

    
    dateToString(data){
        console.log(data);
    }
}