const write_entry = document.getElementById("writeEntry"),
	reminders_container = document.getElementById("reminder_container"),
	btn_save_entry = document.getElementById("saveEntry");

const entry_vault = new Map();
const entry_length_check = [];

function save_this_entry() {
	let entry_id = entry_length_check.length + 1;
	const new_entry = document.createElement("li");
	const remove_entry = document.createElement("button");
	remove_entry.textContent = "delete";

	const edit_entry = document.createElement("button");
	edit_entry.textContent = "edit";

	new_entry.textContent = write_entry.value;
	reminders_container.appendChild(new_entry);

	new_entry.appendChild(edit_entry);
	new_entry.appendChild(remove_entry);

	entry_length_check.push(new_entry);
	entry_vault.set(entry_id, new_entry);
	console.log(entry_id);

	remove_entry.addEventListener("click", () => {
		reminders_container.removeChild(new_entry);
	});

	edit_entry.addEventListener("click", () => {
		const input = document.createElement("input");
		new_entry.appendChild(input);

		const save = document.createElement("button");
		save.textContent = "save this";
		new_entry.appendChild(save);


		save.addEventListener("click", () => {
			new_entry.textContent = input.value;
			input.value = "";
			new_entry.removeChild(input);

			new_entry.appendChild(edit_entry);
			new_entry.appendChild(remove_entry);

		});

	});
}

btn_save_entry.addEventListener("click", () => {
	save_this_entry();
	let entry = localStorage.getItem(1);
	console.log(entry);
	write_entry.value = "";
});
