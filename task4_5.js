"use strict"
function getSumNumbers (a, b) {
	return a + b
}

function getDifferenceNumbers (a, b) {
	return a - b
}

function getMultiplicationNumbers (a, b) {
	return a * b
}

function getDividingNumbers (a, b) {
	return a / b
}

/* 
console.log(getSumNumbers (4, 5))
console.log(getDifferenceNumbers (4, 5))
console.log(getMultiplicationNumbers (4,5))
console.log(getDividingNumbers (4, 5))
*/

function mathOperation (arg1, arg2, operation) {
	switch (operation) {
		case "sum":
			return getSumNumbers (arg1, arg2)
		case "diff":
			return getDifferenceNumbers (arg1, arg2)
		case "multi":
			return getMultiplicationNumbers (arg1, arg2)
		case "divid":
			return getDividingNumbers (arg1, arg2)
		default:
			break;
	}
}

console.log(mathOperation(4, 5, "sum"))
console.log(mathOperation(4, 5, "diff"))
console.log(mathOperation(4, 5, "multi"))
console.log(mathOperation(4, 5, "divid"))