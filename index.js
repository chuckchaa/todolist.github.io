document.addEventListener('DOMContentLoaded', () => {
	const tasks = [];
	const $addButton = document.querySelector('.form__button');
	const $taskTable = document.querySelector('.list');
	const $input = document.querySelector('.form__input');

	$addButton.addEventListener('click', addTask);
	$taskTable.addEventListener('click', deleteTask);

	function renderTable() {
		$taskTable.innerHTML = '';
		if (!tasks.length) {
			$taskTable.insertAdjacentHTML('afterbegin', '<div class=\"list__none\">Add first task</div>');
			return;
		}
		tasks.forEach((task) => {
			$taskTable.innerHTML += `<li class="list__item">
			<p class="list__task">${task}</p>
			<button class="list__button button">Done</button>
		</li>`;
		});
	}

	function addTask(e) {
		e.preventDefault();
		const task = $input.value.replace(/<[^>]+>/g, '');
		if (task && task.trim()) {
			tasks.push(task);
		}
		$input.value = '';
		renderTable();
	}

	function deleteTask(e) {
		if (e.target.tagName.toLowerCase() === 'button') {
			const task = e.target.parentElement.querySelector('.list__task').textContent;
			tasks.splice(tasks.indexOf(task), 1);
			renderTable();
		}
	}

	renderTable();
});