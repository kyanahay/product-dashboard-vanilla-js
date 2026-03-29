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
      console.error("Fetch error:", error);
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

