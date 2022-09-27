// var monthObject = [
//     {
//         name: "January", 
//         days: 31,
//         calculateDate: function(){
//             this.days()+7
//         }
//         }
// ]
var startDate = new Date('October 1, 2022');
var dayInt = startDate.getDate()+7;
var monthInt = startDate.getMonth()+4;
var yearInt = startDate.getFullYear();

if(dayInt > 31){
    dayInt = dayInt - 31;
    monthInt = monthInt +1;
    if(monthInt > 12){
        monthInt = monthInt - 12;
        yearInt = yearInt + 1;
    }
}else{
    if(monthInt > 12){
        monthInt = monthInt - 12;
        yearInt = yearInt + 1;
    }
}

console.log(dayInt, monthInt);
console.log(yearInt);
var endDate = monthInt + "/" + dayInt + "/" + yearInt
console.log(endDate);
var contractLenth = 91