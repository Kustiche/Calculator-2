import { firstNum, secondNum } from './addNumber.js';
import { operator } from './addOperator.js';
import { addResultHistory } from './addResultHistory.js';
import { cleaning } from './cleaning.js';
import { scoreboard } from './view.js';

const OPERATORS = {
	PLUS: '+',
	MINUS: '−',
	MULTIPLY: '×',
	DIVIDE: '÷',
};
let result = '';
let index = 0;

export const results = [];

export function calculation() {
	switch (operator) {
		case OPERATORS.PLUS:
			result = firstNum + secondNum;
			results.push({
				number: result,
				id: index,
			});

			++index;

			cleaning();
			addResultHistory();

			scoreboard.textContent = result;
			break;

		case OPERATORS.MINUS:
			result = firstNum - secondNum;
			results.push({
				number: result,
				id: index,
			});

			++index;

			cleaning();
			addResultHistory();

			scoreboard.textContent = result;
			break;

		case OPERATORS.MULTIPLY:
			result = firstNum * secondNum;
			results.push({
				number: result,
				id: index,
			});

			++index;

			cleaning();
			addResultHistory();

			scoreboard.textContent = result;
			break;

		case OPERATORS.DIVIDE:
			result = firstNum / secondNum;
			results.push({
				number: result,
				id: index,
			});

			++index;

			cleaning();
			addResultHistory();

			scoreboard.textContent = result;
			break;
	}
}
