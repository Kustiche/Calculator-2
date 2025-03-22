import { cleanNumbers } from './addNumber.js';
import { cleanOperator } from './addOperator.js';
import { scoreboard } from './view.js';

export function cleaning() {
	scoreboard.textContent = '';

	cleanNumbers();
	cleanOperator();
}
