"use strict"
let userMoney = prompt("Сколько рублей Вы хотели бы положить на счёт?")
let moneyString = String(userMoney)
let lengthString = moneyString.length
let lastSymbol = moneyString.charAt(lengthString - 1)
// console.log(lastSymbol)
function getNameMoney (nameSymbol) {
switch(nameSymbol){
	case "1":
		return "рубль";
	case "2":
	case "3":
	case "4":
		return "рубля";
	case "5":
	case "6":
	case "7":
	case "8":
	case "9":
	case "0":
		return "рублей";
	default:
		break;
}
}
let nameLastSymbol = getNameMoney(lastSymbol)
alert(`Ваша сумма в размере ${userMoney} ${nameLastSymbol} успешно зачислена`)
