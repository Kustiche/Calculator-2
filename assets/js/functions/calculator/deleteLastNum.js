import { scoreboard } from './view.js';

export function deleteLastNum() {
	const scoreboardTextLength = scoreboard.textContent.length - 1;

	scoreboard.textContent = scoreboard.textContent.substring(0, scoreboardTextLength);
}
