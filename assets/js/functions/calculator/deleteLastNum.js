import { deleteNum, firstNum, secondNum } from './addNumber.js';
import { cleanOperator, operator } from './addOperator.js';
import { scoreboard } from './view.js';

export function deleteLastNum() {
	const isPresenceOperatorAndSecondNum = secondNum === '' && operator !== '';

	if (isPresenceOperatorAndSecondNum) {
		cleanOperator();
		scoreboard.textContent = `${firstNum} ${operator} ${secondNum}`;
	} else {
		deleteNum();
		scoreboard.textContent = `${firstNum} ${operator} ${secondNum}`;
	}
}
