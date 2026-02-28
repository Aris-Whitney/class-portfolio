const input = document.getElementById("nameInput");
const button = document.getElementById("saveBtn");
const message = document.getElementById("message");


// ---------- SPEECH FUNCTION ----------
function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
}


// ---------- SAVE BUTTON ----------
button.addEventListener("click", () => {
    const name = input.value.trim();

    if (name === "") return;

    // Save to localStorage
    localStorage.setItem("username", name);

    // Update UI
    message.textContent = `Nice to meet you, ${name}!`;

    // Speak
    speak(`Hello ${name}, I will remember you!`);
});


// ---------- PAGE LOAD ----------
window.addEventListener("DOMContentLoaded", () => {
    const savedName = localStorage.getItem("username");

    if (savedName) {
        message.textContent = `Welcome back, ${savedName}!`;

        // small delay helps some browsers allow speech
        setTimeout(() => {
            speak(`Hello ${savedName}, welcome back!`);
        }, 300);
    }
});