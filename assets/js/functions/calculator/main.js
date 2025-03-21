import { wrap, button, btnClean, btnDelete } from './view.js';
import { addNumber } from './addNumber.js';
import { cleaning } from './cleaning.js';
import { deleteLastNum } from './deleteLastNum.js';

const OPERATORS = {
	PLUS: '+',
	MINUS: '−',
	MULTIPLY: '×',
	DIVIDE: '÷',
};

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
	}
});
