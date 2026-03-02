function sanitizeName(name) {
    return String(name || "").trim();
}

function firstVisitMessage(name) {
    return `Nice to meet you, ${name}!`;
}

function returningMessage(name) {
    return `Welcome back, ${name}!`;
}

function firstVisitSpeech(name) {
    return `Hello ${name}, I will remember you!`;
}

function returningSpeech(name) {
    return `Hello ${name}, welcome back!`;
}

function speak(text, synth = window.speechSynthesis) {
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
}

function handleSave({ inputEl, messageEl, storage = window.localStorage, speakFn = speak }) {
    const name = sanitizeName(inputEl.value);
    if (!name) return false;

    storage.setItem("username", name);
    messageEl.textContent = firstVisitMessage(name);
    speakFn(firstVisitSpeech(name));
    return true;
}

function handleLoad({
    messageEl,
    storage = window.localStorage,
    speakFn = speak,
    timerFn = window.setTimeout,
    delayMs = 300
}) {
    const savedName = storage.getItem("username");
    if (!savedName) return false;

    messageEl.textContent = returningMessage(savedName);
    timerFn(() => {
        speakFn(returningSpeech(savedName));
    }, delayMs);

    return true;
}

function initializeAssistant({
    inputEl = document.getElementById("nameInput"),
    buttonEl = document.getElementById("saveBtn"),
    messageEl = document.getElementById("message"),
    storage = window.localStorage,
    speakFn = speak
} = {}) {
    if (!inputEl || !buttonEl || !messageEl) return false;

    buttonEl.addEventListener("click", () => {
        handleSave({ inputEl, messageEl, storage, speakFn });
    });

    handleLoad({ messageEl, storage, speakFn });
    return true;
}

window.addEventListener("DOMContentLoaded", () => {
    initializeAssistant();
});

window.AssistantApp = {
    sanitizeName,
    firstVisitMessage,
    returningMessage,
    firstVisitSpeech,
    returningSpeech,
    speak,
    handleSave,
    handleLoad,
    initializeAssistant
};
