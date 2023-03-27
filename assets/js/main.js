console.log("huhu");

// lvl_1_1
let div = document.querySelector('div');
let p = document.querySelector('p');

let date = new Date()
let date1 = new Date("September 2, 2019 09:00:00");
// console.log(date1);
let date2 = new Date(0);
// console.log(date2);
let date3 = new Date(31556908800);
// console.log(date3);
let date4 = new Date(86400000);
// console.log(date4);

// div.innerHTML =  `${date} = ${date1} <br> ${date2} = newDate(0) <br> ${date3} = new Date(31556908800) <br> ${date4} = new Date(86400000)`;

// lvl_1_2
let monate = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
];

let wochenTag = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag"
];

// console.log(date);
/*
div.innerHTML = `
${date} <br><br> 
${date.getFullYear()} <br><br>
${date.getMonth()} Monat <br><br>
${date.getDate()} Tag <br><br>
${date.getHours()} Stunde <br><br>
${date.getMinutes()} Minute <br><br>
${monate[date.getMonth()]} <br><br>
${wochenTag[date.getMonth()]}
`;
*/

// p.innerHTML = `${wochenTag[date.getMonth()]} ${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;

// lvl_1_3

let d2 = new Date(2222, 9, 23, 13, 25,11);

// div.innerHTML = `${d2} <br>`
d2.setFullYear(2123, 1, 24)
// div.innerHTML += `${d2} <br>`
d2.setFullYear(2123, 2, 24)
// div.innerHTML += `${d2} <br>`
d2.setFullYear(2123, 2, 3)
// div.innerHTML += `${d2} <br>`
let d3 = new Date();
d3.setDate(d3.getDate()+ 30);
// div.innerHTML += `${d3} <br>`

// lvl_1_5

let list = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
];

const monthsName = (paraString) => {
    let paraString3 = new Date(paraString);
    return list[paraString3.getMonth()];
}
// console.log(monthsName("2001,3,4"));
// console.log(monthsName("2019,12,24"));
// console.log(monthsName("1410,07,15"));

// lvl_2_1
let currentDate ;

const showDate = () => {
    currentDate = new Date();
    div.innerHTML = ` ${currentDate.getDate()} / ${currentDate.getMonth()+1} / ${currentDate.getFullYear()}`;
}

showDate()


