import { results } from './calculation';
import { innerResults } from './view';

export function addResultHistory() {
	innerResults.textContent = null;

	results.forEach((result) => {
		const newResult = document.createElement('button');
		newResult.classList.add('calculator__result');
		newResult.classList.add('btn-reset');
		innerResults.prepend(newResult);
		newResult.textContent = result;
	});
}
