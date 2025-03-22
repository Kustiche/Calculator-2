import { addResultHistory } from './addResultHistory.js';
import { results } from './calculation.js';

export function deleteResult(result) {
	const index = results.indexOf(Number(result));

	results.splice(index, 1);

	addResultHistory();
}
