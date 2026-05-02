# Product Dashboard

## Description
This project is a simple product dashboard built using HTML, CSS, and JavaScript. It fetches product data from an external API and displays a selection of products dynamically on the page.

The project demonstrates how to work with API data, handle asynchronous operations, and update the DOM.

## API Used
Data is retrieved from:  
https://www.course-api.com/javascript-store-products

## Features
- Fetches product data from an external API  
- Uses both `.then()` and `async/await` approaches  
- Displays the first 5 products  
- Each product includes:
  - Name  
  - Image  
  - Price (formatted to dollars)  
- Handles errors if the API request fails  
- Responsive grid layout for product display  
- Hover effects for product cards  

## Technologies Used
- HTML5  
- CSS3  
- JavaScript  

## File Structure
- `index.html` – Page structure  
- `style.css` – Layout, styling, and responsiveness  
- `script.js` – API fetching and DOM manipulation logic  

## How It Works
1. A request is sent to the API to fetch product data.  
2. The response is checked for errors.  
3. Data is converted into JSON format.  
4. The first five products are selected.  
5. Product cards are created and displayed dynamically on the page.  

## Key Functions

### `fetchProductsThen()`
Fetches data using `.then()` and logs product names to the console.

### `fetchProductsAsync()`
Fetches data using `async/await` and passes it to the display function.

### `displayProducts(products)`
- Clears existing content  
- Creates product cards  
- Displays product name, image, and price  

### `handleError(error)`
Logs errors to the console if a request fails.

## How to Run
1. Download or clone the repository  
2. Open `index.html` in a web browser  
3. Products will load automatically  

## Concepts Demonstrated
- Fetch API  
- Promises (`.then()` / `.catch()`)  
- Async/Await  
- DOM manipulation  
- Array methods (`forEach`, `slice`)  
- Error handling  
- CSS grid and layout styling  

## Notes
- Only the first 5 products are displayed for simplicity  
- Prices are converted from cents to dollars  
- This is a front-end only project (no backend)  

## Author
Kyana Hay
