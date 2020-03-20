let userAge = prompt('Введи свій вік');
if (userAge<0){
    alert('Ваше існування ще в майбутніх планах');
}else if (userAge<12){
    alert("Ви дитина");
}else if (userAge>=12 && userAge<=17){
    alert('Ви підліток');
}else if (userAge>=18 && userAge<=59){
    alert('Ви дорослий');
}else if (userAge>=60 && userAge<=149){
    alert('Ви дєд');
}else if (userAge>=150){
    alert('Ви кіборг або бог');
}


let userDigit = prompt('Введи цифру від 0 до 9, а я покажу який символ розташований на клавіші цієї цифри');
if (userDigit==0){
    alert(")")
}else if (userDigit==1){
    alert("!")
}else if (userDigit==2){
    alert("@")
}else if (userDigit==3){
    alert("#")
}else if (userDigit==4){
    alert("$")
}else if (userDigit==5){
    alert("%")
}else if (userDigit==6){
    alert("^")
}else if (userDigit==7){
    alert("&")
}else if (userDigit==8){
    alert("*")
}else if (userDigit==9){
    alert("(")
}


let userThreeDigitNumber = prompt('Введи трьохзначне число я є перевірю чи є однакові цифри в ньому');
let char0 = userThreeDigitNumber.charAt(0);
let char1 = userThreeDigitNumber.charAt(1);
let char2 = userThreeDigitNumber.charAt(2);

if( char0 == char1 && char1 == char2 ){
    alert("всі символи співпадають");
}
else if ( char0 == char1 ){
    alert("Перший і другий символи співпадають");
}
else if( char1 == char2 ){
    alert("Другий і третій символи співпадають");
}
else if( char0 == char2 ){
    alert("перший і третій символи співпадають");
}
else{
    alert("ні**я не співпадає");
}


let userNumber = prompt('Введи число будь якої довжини, а я перевірю скільки цифр було введено');
alert(userNumber.length);

let userYear = prompt('Введи рік, а я перевірю чи він високосний');
if ( userYear % 4 === 0 ){
    alert("Цей рік високосний");
}
else{
    alert("Цей рік звичайний");
}


let user5digitNumber = prompt("Введи п'ятизначне число, а я перевірю чи являється воно паліндромом");
let char_0 = user5digitNumber.charAt(0);
let char_1 = user5digitNumber.charAt(1);
let char_3 = user5digitNumber.charAt(3);
let char_4 = user5digitNumber.charAt(4);
if ( char_0 == char_4 && char_1 == char_3 ){
    alert("Це число являється паліндромом");
}
else{
    alert("Це не паліндром");
}


let usdConverter = prompt ( "Введи кількість долларів які ти хочеш обміняти" );
let EUR = 0.94;
let UAH = 8.05;
let PLN = 0.24;
let currencySelector = prompt ( "Введи валюту для обміну. EUR, UAH, чи PLN." );
if ( currencySelector == "EUR" ){
    alert ( `Ви отримаєте ${ ( usdConverter * EUR ) .toFixed(2) } EUR` );
}
if ( currencySelector == "UAH" ){
    alert ( `Ви отримаєте ${ ( usdConverter * UAH ) .toFixed(2) } UAH` );
}
if ( currencySelector == "PLN" ){
    alert ( `Ви отримаєте ${ ( usdConverter * PLN ) .toFixed(2) } PLN` );
}
else{
    alert ( "Така валюта не передбачена моїм конвертором." )
}


let amountOfPurchases = prompt ( "Введи сумму твоїх покупок щоб визначити відсоток знижки." );
let amount = amountOfPurchases;
if ( amount < 200 ){
    alert( `На вашу суму покупок знижки не розповсюджується. Сума покупок складає ${ amount }$` );
}
else if ( amount >= 200 && amount < 300 ){
    alert( `Ваша сума покупки зі знижкою в 3% складає ${ ( amount / 100 ) * 97 }$` );
}
else if ( amount >= 300 && amount < 500 ){
    alert( `Ваша сума покупки зі знижкою в 5% складає ${ ( amount / 100 ) * 95 }$` );
}
else if ( amount >= 500 ){
    alert( `Ваша сума покупки зі знижкою в 7% складає ${ ( amount / 100 ) * 93 }$` );
}