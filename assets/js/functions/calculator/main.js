import { wrap, button, btnClean, btnDelete, btnOperation, btnHistory, result } from './view.js';
import { addNumber } from './addNumber.js';
import { cleaning } from './cleaning.js';
import { deleteLastNum } from './deleteLastNum.js';
import { addOperator } from './addOperator.js';
import { calculation } from './calculation.js';
import { openHistory } from './openHistory.js';
import { deleteResult } from './deleteResult.js';
import { addResultHistory } from './addResultHistory.js';

wrap.addEventListener('click', (e) => {
	switch (e.target.className) {
		case button.className:
			addNumber(e.target.textContent);
			break;

		case btnClean.className:
			cleaning();
			break;

		case btnDelete.className:
			deleteLastNum();
			break;

		case btnOperation.className:
			if (e.target.textContent === '=') {
				calculation();
			} else {
				addOperator(e.target.textContent);
			}
			break;

		case btnHistory.className:
			openHistory();
			break;

		case 'calculator__result btn-reset':
			deleteResult(e.target.dataset.index);
			break;
	}
});

addResultHistory();
