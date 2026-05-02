# Product Dashboard

This project is a simple JavaScript product dashboard that fetches product data from an external API and displays the first five products on the page.

## Overview

The app uses the Fetch API to retrieve product information from:

https://www.course-api.com/javascript-store-products

It demonstrates two ways of working with asynchronous JavaScript:

- `.then()` and `.catch()`
- `async` / `await`

The product data is then displayed dynamically using DOM manipulation.

## Features

- Fetches product data from an external API
- Displays product name, image, and price
- Shows the first five products
- Includes error handling for failed API requests
- Demonstrates both promise-based and async/await syntax

## Files

- `index.html` - Main HTML structure
- `style.css` - Styling for the product dashboard
- `script.js` - JavaScript logic for fetching and displaying products

## How It Works

1. The app fetches product data from the API.
2. It checks if the response is successful.
3. It converts the response into JSON.
4. It displays the first five products as cards.
5. If something goes wrong, an error message is logged in the console.

## How to Run

1. Download or clone the repository.
2. Open `index.html` in a browser.
3. The products should load automatically.

## JavaScript Concepts Used

- Fetch API
- Promises
- Async/await
- Error handling
- DOM manipulation
- Arrays
- Objects
- Template literals

## Author

Kyana Hay
