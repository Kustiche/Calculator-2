import { addMinus, firstNum, secondNum } from './addNumber.js';
import { scoreboard } from './view.js';

export let operator = '';

export function addOperator(oper) {
	const isPresenceMinusFirstNum = oper === '-' && !firstNum.includes('-') && firstNum === '';
	const isPresenceMinusSecondNum = operator !== '' && oper === '-' && !secondNum.includes('-');
	const isPresenceOperatorAndFirstNum = operator !== '' || firstNum === '' || firstNum === '-';

	if (isPresenceMinusFirstNum) {
		addMinus();

		return;
	} else if (isPresenceMinusSecondNum) {
		addMinus();

		return;
	} else if (isPresenceOperatorAndFirstNum) {
		return;
	} else if (firstNum !== '-') {
		operator = oper;

		scoreboard.textContent = `${firstNum} ${operator} ${secondNum}`;
	}
}

export function cleanOperator() {
	operator = '';
}
