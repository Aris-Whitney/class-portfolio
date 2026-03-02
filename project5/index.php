<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Personal Assistant</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 100px;
        }
        input, button {
            padding: 10px;
            font-size: 16px;
        }
        #message {
            margin-top: 20px;
            font-size: 20px;
            color: darkblue;
        }
    </style>
</head>
<body>

    <h1>Personal Assistant</h1>

    <input type="text" id="nameInput" placeholder="Enter your name">
    <button id="saveBtn">Save and Greet</button>

    <div id="message"></div>
    <p><a href="./tests.html">Run tests</a></p>

    <script src="script.js"></script>
</body>
</html>
