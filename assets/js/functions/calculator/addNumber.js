import { operator } from './addOperator.js';
import { scoreboard } from './view.js';

export let firstNum = '';
export let secondNum = '';

export function addNumber(num) {
	if (num === '.' && firstNum.includes('.') && secondNum === '') {
		return;
	} else if (num === '.' && secondNum.includes('.')) {
		return;
	} else if (operator === '') {
		firstNum = firstNum + num;

		scoreboard.textContent = `${firstNum} ${operator} ${secondNum}`;
	} else {
		secondNum = secondNum + num;
		scoreboard.textContent = `${firstNum} ${operator} ${secondNum}`;
	}
}

export function cleanNumbers() {
	firstNum = '';
	secondNum = '';
}

export function deleteNum() {
	let textLength = '';

	if (secondNum !== '') {
		textLength = `${secondNum}`.length - 1;

		secondNum = `${secondNum}`.substring(0, textLength);
	} else if (operator === '') {
		textLength = `${firstNum}`.length - 1;

		firstNum = `${firstNum}`.substring(0, textLength);
	}
}
