const apiURL = "https://www.course-api.com/javascript-store-products";

function fetchProductsThen() {
  fetch(apiURL)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      return response.json();
    })
    .then((products) => {
      products.forEach((product) => {
        console.log(product.fields.name);
      });
    })
    .catch((error) => {
     handleError(error);
    });
}
async function fetchProductsAsync() {
  try {
    const response = await fetch(apiURL);

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const products = await response.json();
    displayProducts(products);
  } catch (error) {
    handleError(error);
  }
}

function displayProducts(products) {
  const productContainer = document.getElementById("product-container");
  productContainer.innerHTML = "";

  products.slice(0, 5).forEach((product) => {
    const name = product.fields.name;
    const price = product.fields.price / 100;
    const image = product.fields.image[0].url;

    const card = document.createElement("div");
    card.classList.add("product-card");

    const productName = document.createElement("h2");
    productName.textContent = name;

    const productImage = document.createElement("img");
    productImage.src = image;
    productImage.alt = name;

    const productPrice = document.createElement("p");
    productPrice.textContent = `$${price.toFixed(2)}`;

    card.appendChild(productImage);
    card.appendChild(productName);
    card.appendChild(productPrice);

    productContainer.appendChild(card);
  });
}

function handleError(error) {
  console.error(`An error occurred: ${error.message}`);
}

fetchProductsThen();
fetchProductsAsync();