const write_entry = document.getElementById("writeEntry"),
	reminders_container = document.getElementById("reminder_container"),
	btn_save_entry = document.getElementById("saveEntry");

const new_entry = document.createElement("p");

function save_this_entry() {
}

btn_save_entry.addEventListener("click", () => {
	console.log("This entry is working good!");
});
