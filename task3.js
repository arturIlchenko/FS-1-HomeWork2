"use strict"
let a = 10;
let b = -3;
if (a > 0 && b > 0) {
	alert(`Разность переменных a и b: ${a - b}`)
} else if (a < 0 && b < 0) {
	alert(`Произведение переменных a и b: ${a * b}`)
} else if ((a < 0 && b > 0) || (a > 0 && b < 0)) {
	alert(`Сумма переменных a и b: ${a + b}`)
}