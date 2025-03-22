import { addResultHistory } from './addResultHistory.js';
import { results } from './calculation.js';

export function deleteResult(dataIndex) {
	const index = results.findIndex((e) => e.id === Number(dataIndex));
	console.log(index);

	results.splice(index, 1);

	addResultHistory();
}
