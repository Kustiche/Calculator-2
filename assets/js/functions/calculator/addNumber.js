import { scoreboard } from './view.js';

export function addNumber(num) {
	if (num === '.' && scoreboard.textContent.includes('.')) {
		return;
	} else {
		scoreboard.textContent = scoreboard.textContent + num;
	}
}
