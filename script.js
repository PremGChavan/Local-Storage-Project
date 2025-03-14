
const textarea = document.getElementById("autosave");

// Load saved text from localStorage
textarea.value = localStorage.getItem("autosaveText") || "";


// Save text on input
textarea.addEventListener("input", () => {
    localStorage.setItem("autosaveText", textarea.value);
});

