# AI Development Log – Browser APIs Personal Assistant

## Goal

Build a webpage that remembers a user using localStorage and greets them using the Web Speech API.

---

## Iteration 1 – Understanding the Assignment

**Prompt to AI:**
"Explain how localStorage works and how to store a username."

**What I learned:**

* localStorage stores key/value pairs in the browser permanently
* setItem saves data
* getItem retrieves data

**Change I made:**
Created a basic input field and button and successfully saved a name.

---

## Iteration 2 – Loading Saved User

**Prompt to AI:**
"How do I run JavaScript when the page loads?"

**What I learned:**
Use DOMContentLoaded event listener.

**Change I made:**
Added automatic greeting when returning to the page.

---

## Iteration 3 – Adding Speech

**Prompt to AI:**
"How do I make the browser speak text using JavaScript?"

**What I learned:**
Use SpeechSynthesisUtterance and speechSynthesis.speak()

**Change I made:**
Browser now verbally greets the user.

---

## Iteration 4 – Debugging Speech Not Playing

**Prompt to AI:**
"My speech doesn't play on refresh"

**What I learned:**
Browsers block autoplay audio without user interaction

**Change I made:**
Added slight delay and tested after interaction.

---

## Final Result

The webpage:

* Saves username in localStorage
* Greets returning users
* Speaks greeting aloud

---

## Reflection

Using AI helped me:

* Understand browser APIs faster
* Debug issues I couldn't identify
* Learn how event listeners and storage interact

