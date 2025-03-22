import { addResultHistory } from './addResultHistory.js';
import { results } from './calculation.js';

export function deleteResult(dataIndex) {
	const index = results.findIndex((e) => e.id === Number(dataIndex));

	results.splice(index, 1);

	addResultHistory();

	localStorage.setItem('results', JSON.stringify(results));
	localStorage.setItem('index', JSON.stringify(index));
}
