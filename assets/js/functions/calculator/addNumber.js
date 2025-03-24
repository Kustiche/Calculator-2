import { operator } from './addOperator.js';
import { scoreboard } from './view.js';

export let firstNum = '';
export let secondNum = '';

export function addNumber(num) {
	const isRepetitionPointFirstNum = num === '.' && firstNum.includes('.') && secondNum === '';
	const isRepetitionPointSecondNum = num === '.' && secondNum.includes('.');
	const isPresenceOperator = operator === '';
	const isZero =
		num === '0' &&
		(firstNum === '0' || firstNum === '-0' || secondNum === '0' || secondNum === '-0');

	if (num === '.' && firstNum === '') {
		return;
	} else if (isZero) {
		return;
	} else if (isRepetitionPointFirstNum) {
		return;
	} else if (isRepetitionPointSecondNum) {
		return;
	} else if (isPresenceOperator) {
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

	const isPresenceSecondNum = secondNum !== '';
	const isPresenceOperator = operator === '';

	if (isPresenceSecondNum) {
		textLength = `${secondNum}`.length - 1;

		secondNum = `${secondNum}`.substring(0, textLength);
	} else if (isPresenceOperator) {
		textLength = `${firstNum}`.length - 1;

		firstNum = `${firstNum}`.substring(0, textLength);
	}
}

export function addMinus() {
	if (firstNum === '' && firstNum !== '-') {
		firstNum = '-';

		scoreboard.textContent = `${firstNum} ${operator} ${secondNum}`;
	} else if (secondNum === '' && secondNum !== '-' && operator !== '') {
		secondNum = '-';

		scoreboard.textContent = `${firstNum} ${operator} ${secondNum}`;
	}
}
