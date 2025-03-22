import { btnHistory, innerResults } from './view';

export function openHistory() {
	btnHistory.classList.toggle('active');

	const isActive = btnHistory.classList.contains('active');

	if (isActive) {
		btnHistory.textContent = 'Close history';
		innerResults.className = 'calculator__results calculator__results--visible';
	} else {
		btnHistory.textContent = 'Open history';
		innerResults.className = 'calculator__results';
	}
}
