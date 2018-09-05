//Mats Verheyen
//Opdarcht: Pizza calculator
//Constante prijzen
const priceSmall = 4.00;
const priceMedium = 6.50;
const priceLarge = 8.00;

//Keuze uit hoeveelheid pizza's
var adr = prompt('Wat is uw adres?');
var email = prompt('Wat is uw email?');
var telNumber = prompt('Wat is uw telefoonnummer?');
var pizzaSmall = prompt('Hoeveel small pizza\'s', '0');
var pizzaMedium = prompt('Hoeveel medium pizza\'s', '0');
var pizzaLarge = prompt('Hoeveel Large pizza\'s', '0');

//Hoeveelheid omzetten in integers
var num1 = parseFloat(pizzaSmall);
var num2 = parseFloat(pizzaMedium);
var num3 = parseFloat(pizzaLarge);
var total = num1 + num2 + num3; //Totale pizza's uitrekenen

//Totale pizza's weergeven op het scherm
document.write('Aantal bestelde pizza\'s Totaal: ' + total + '<br>' + '<br>');
document.write('Small: ' + pizzaSmall + '<br>');
document.write('Medium: ' + pizzaMedium + '<br>');
document.write('Large: ' + pizzaLarge) + '<br>';

//Totale prijs berekenen
var TotalSmall = pizzaSmall * priceSmall;
var TotalMedium = pizzaMedium * priceMedium;
var TotalLarge = pizzaLarge * priceLarge;
var TotaalPrijs = TotalSmall + TotalMedium + TotalLarge;

//Totale prijs berkenen
document.write('<br>Totaal prijs: €' + TotaalPrijs);

//weergeven in de Bon
document.getElementById('adres').innerHTML = 'Adres: ' + adr;
document.getElementById('email').innerHTML = 'Email: ' + email;
document.getElementById('number').innerHTML = 'nummer: ' + telNumber;
document.getElementById('itemtext1').innerHTML = num1;
document.getElementById('itemtext2').innerHTML = num2;
document.getElementById('itemtext3').innerHTML = num3;
document.getElementById('itemprice1').innerHTML = '€' + TotalSmall;
document.getElementById('itemprice2').innerHTML = '€' + TotalMedium;
document.getElementById('itemprice3').innerHTML = '€' + TotalLarge;
document.getElementById('total').innerHTML = '€' + TotaalPrijs;
