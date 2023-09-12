let rate = prompt('How many hourly salary do you have?');
let hours = prompt('How many hours do you work in one day?');
let salary = hours * rate;
let extraHours1 = hours <10 ? hours - 7 : 2;
let bonus1 = extraHours1 * 0.5 * rate
let extraHours2 = hours - 9;
let bonus2 = extraHours2 * 1 * rate;
if (hours <= 7){
    console.log('your salary is ' + salary + ' euro');
}
else if (hours <= 9)
{
    console.log('your salary is ' + (salary + bonus1) + ' euro');
}
else {
    console.log('your salary is ' + (salary + bonus1 + bonus2) + ' euro');
}