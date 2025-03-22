import { firstNum, secondNum } from './addNumber';
import { scoreboard } from './view';

export let operator = '';

export function addOperator(oper) {
	const isPresenceOperatorAndFirstNum = operator !== '' || firstNum === '';

	if (isPresenceOperatorAndFirstNum) {
		return;
	} else {
		operator = oper;

		scoreboard.textContent = `${firstNum} ${operator} ${secondNum}`;
	}
}

export function cleanOperator() {
	operator = '';
}
