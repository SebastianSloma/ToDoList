const text = document.getElementById('text');
input = document.getElementById('send');
const list = document.querySelector('.list');

input.addEventListener('click', (e) => {
	e.preventDefault();
	const li = document.createElement('li');
	const buttonCreate = document.createElement('button');

	if (text.value === '') {
		alert('Put your task');
	} else {
		buttonCreate.innerHTML = "<img src='../projekt1/trash.svg'/>";
		buttonCreate.classList.add('trash');
		const liList = list.appendChild(li);
		liList.append(text.value);
		liList.appendChild(buttonCreate);
	}

	text.value = '';
});

list.addEventListener('click', (e) => {
	const item = e.target;
	if (item.classList[0] === 'trash') {
		const listComplete = item.parentElement;
		listComplete.remove();
	}
});

const btnClear = document.querySelector('.clear');

btnClear.addEventListener('click', () => {
	while (list.firstChild) {
		list.removeChild(list.firstChild);
	}
});
