# AI Development Log – Stock Market Visualizer

## Goal

Build a webpage that fetches stock portfolio JSON data and visualizes 2017 holdings with a Plotly bar chart.

---

## Iteration 1 – Understanding the API Data

**Prompt to AI:**
"How do I fetch JSON data with async/await and inspect the response structure?"

**What I learned:**

* `fetch()` returns a Promise that must be awaited
* `response.json()` parses the JSON body
* the portfolio data is organized by year with nested stock entries

**Change I made:**
Created an async fetch function to retrieve the sample portfolio data.

---

## Iteration 2 – Transforming Data for 2017

**Prompt to AI:**
"How do I extract only stock symbols and owned amounts for the year 2017?"

**What I learned:**

* use `.find()` to locate the object where `year === 2017`
* use `.map()` to build arrays for chart axes
* validate data before charting to avoid runtime errors

**Change I made:**
Added a transformation function that returns `symbols` and `owned` arrays for 2017.

---

## Iteration 3 – Building the Plotly Chart

**Prompt to AI:**
"How do I use Plotly.newPlot() to display a bar chart from arrays?"

**What I learned:**

* Plotly must be included from CDN in the HTML `<head>`
* chart `data` uses `x`, `y`, and `type: "bar"`
* layout controls chart title, axis labels, and margins

**Change I made:**
Rendered a responsive bar chart in `#chartDiv` using `Plotly.newPlot("chartDiv", data, layout)`.

---

## Iteration 4 – Error Handling and Reliability

**Prompt to AI:**
"How can I make the app fail gracefully if fetch or data processing breaks?"

**What I learned:**

* wrap async logic in `try/catch`
* show user-facing status messages for loading and errors
* keep fallback behavior for network issues

**Change I made:**
Added status text updates and error handling so the page reports success or failure clearly.

---

## Final Result

The webpage:

* fetches external stock data asynchronously
* extracts stock symbols and owned amounts for 2017
* visualizes the result in a Plotly bar chart
* displays load/error status feedback to the user

---

## Reflection

Using AI helped me:

* break the project into fetch, transform, and render steps
* quickly validate JSON structure and array transformations
* implement cleaner async error handling while learning Plotly syntax
