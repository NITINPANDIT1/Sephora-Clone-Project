let wishlist_data = [
    {
        image: 'https://www.sephora.com/productimages/sku/s2519080-main-zoom.jpg?imwidth=97',
        id: 3,
        quantity: 1,
        name: 'Biossance',
        price: '58.00',
        size: '1.6 oz/ 50 mL',
        timestamp: '2023-04-13'
      },
      {
        image: 'https://www.sephora.com/productimages/sku/s2519080-main-zoom.jpg?imwidth=97',
        id: 4,
        quantity: 1,
        name: 'Supergoop!',
        price: '32.00',
        size: '1.7 oz/ 50 mL',
        timestamp: '2023-04-13'
      },
      {
        image: 'https://www.sephora.com/productimages/sku/s2519080-main-zoom.jpg?imwidth=97',
        id: 5,
        quantity: 1,
        name: 'Drunk Elephant',
        price: '68.00',
        size: '1 oz/ 30 mL',
        timestamp: '2023-04-13'
      },      
    {
        image: 'https://www.sephora.com/productimages/sku/s2519080-main-zoom.jpg?imwidth=97',
        id: 6,
        quantity: 1,
        name: 'Kiehl\'s',
        price: '50.00',
        size: '1.7 oz/ 50 mL',
        timestamp: '2023-04-13'
      },
      {
        image: 'https://www.sephora.com/productimages/sku/s2519080-main-zoom.jpg?imwidth=97',
        id: 7,
        quantity: 1,
        name: 'Herbivore',
        price: '58.00',
        size: '1.7 oz/ 50 mL',
        timestamp: '2023-04-13'
      },
      {
        image: 'https://www.sephora.com/productimages/sku/s2519080-main-zoom.jpg?imwidth=97',
        id: 8,
        quantity: 1,
        name: 'Tatcha',
        price: '68.00',
        size: '1.7 oz/ 50 mL',
        timestamp: '2023-04-13'
      },
      {
        image: 'https://www.sephora.com/productimages/sku/s2519080-main-zoom.jpg?imwidth=97',
        id: 9,
        quantity: 1,
        name: 'Dr. Jart+',
        price: '52.00',
        size: '1.7 oz/ 50 mL',
        timestamp: '2023-04-13'
      },
      {
        image: 'https://www.sephora.com/productimages/sku/s2519080-main-zoom.jpg?imwidth=97',
        id: 10,
        quantity: 1,
        name: 'Sunday Riley',
        price: '85.00',
        size: '1.7 oz/ 50 mL',
        timestamp: '2023-04-13'
      }      
]

// // Get products from localStorage or create empty array if none exists
// // let products = JSON.parse(localStorage.getItem('wishlist')) || [];
// let products = JSON.parse(localStorage.getItem('wishlist')) || wishlist_data;

// // Sort products by recently added by default
// products.sort((a, b) => b.timestamp - a.timestamp);

// // Display products on page
// const wishlistDiv = document.getElementById('wishlist');
// displayProducts(products);

// // Add event listener for sorting
// const sortSelect = document.getElementById('sort');
// sortSelect.addEventListener('change', sortProducts);

// // Function to display products on page
// function displayProducts(products) {
//     wishlistDiv.innerHTML = '';
//     products.forEach((product) => {
//       const productDiv = document.createElement('div');
//       const name = document.createElement('h2');
//       name.innerText = product.name;
//       const price = document.createElement('p');
//       price.innerText = '' + product.price;
//       const image = document.createElement('img');
//       image.src = product.image;
//       const button = document.createElement('button');
//       button.innerText = 'Add to Cart';
//       button.addEventListener('click', () => addToCart(product));
//       productDiv.appendChild(name);
//       productDiv.appendChild(price);
//       productDiv.appendChild(image);
//       productDiv.appendChild(button);
//       wishlistDiv.appendChild(productDiv);
//       console.log('product:', productDiv)
//     });
// }

// // Function to sort products
// function sortProducts() {
//   const value = sortSelect.value;
//   switch (value) {
//     case 'recent':
//       products.sort((a, b) => b.timestamp - a.timestamp);
//       break;
//     case 'atoz':
//       products.sort((a, b) => a.name.localeCompare(b.name));
//       break;
//     case 'ztoa':
//       products.sort((a, b) => b.name.localeCompare(a.name));
//       break;
//     case 'lowtohigh':
//       products.sort((a, b) => a.price - b.price);
//       break;
//     case 'hightolow':
//       products.sort((a, b) => b.price - a.price);
//       break;
//   }
//   displayProducts(products);
// }

// // Function to add product to cart
// function addToCart(product) {
//   // Add product to cart (this functionality is not included in this example)
//   console.log('Added to cart:', product.name);
// }

// // Function to add product to wishlist
// function addProduct(name, price) {
//   // Create product object with name, price, and timestamp
//   const product = { name, price, timestamp: Date.now() };
//   // Add product to products array
//   products.push(product);
//   // Update localStorage with new products array
//   localStorage.setItem('wishlist', JSON.stringify(products));
//   // Display updated products on page
//   displayProducts(products);
// }




// Get the wishlist container and sorting element
const wishlistContainer = document.querySelector('.wishlist-container');
const wishlistSort = wishlistContainer.querySelector('.wishlist-sort select');

// Get the wishlist data from local storage
// const wishlistData = JSON.parse(localStorage.getItem('wishlist')) || [];
const wishlistData = JSON.parse(localStorage.getItem('wishlist')) || wishlist_data;

// Function to render the wishlist items
function renderWishlistItems() {
  const wishlistElement = wishlistContainer.querySelector('#wishlist');
  
  // Clear any existing items
  wishlistElement.innerHTML = '';
  
  // If wishlist is empty, display the empty message
  if (wishlistData.length === 0) {
    const emptyMessage = document.createElement('p');
    emptyMessage.classList.add('empty-message');
    emptyMessage.textContent = 'Your wishlist is empty.';
    wishlistElement.appendChild(emptyMessage);
    return;
  }
  
  // Sort the wishlist based on the selected sorting option
  const sortValue = wishlistSort.value;
  let sortedWishlist = [];
  if (sortValue === 'recent') {
    sortedWishlist = wishlistData.slice().reverse();
  } else if (sortValue === 'az') {
    sortedWishlist = wishlistData.slice().sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortValue === 'za') {
    sortedWishlist = wishlistData.slice().sort((a, b) => b.name.localeCompare(a.name));
  } else if (sortValue === 'low-high') {
    sortedWishlist = wishlistData.slice().sort((a, b) => a.price - b.price);
  } else if (sortValue === 'high-low') {
    sortedWishlist = wishlistData.slice().sort((a, b) => b.price - a.price);
  }
  
  // Loop through each item and create the HTML
  sortedWishlist.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.classList.add('wishlist-item');
    
    // Add image
    const imageElement = document.createElement('img');
    imageElement.src = item.image;
    imageElement.alt = item.name;
    itemElement.appendChild(imageElement);
    
    // Add details
    const detailsElement = document.createElement('div');
    detailsElement.classList.add('wishlist-item-details');
    itemElement.appendChild(detailsElement);
    
    const nameElement = document.createElement('h3');
    nameElement.textContent = item.name;
    detailsElement.appendChild(nameElement);
    
    const priceElement = document.createElement('p');
    priceElement.classList.add('price');
    priceElement.textContent = '$' + item.price;
    detailsElement.appendChild(priceElement);
    
    const sizeElement = document.createElement('p');
    sizeElement.classList.add('size');
    sizeElement.textContent = 'Size: ' + item.size;
    detailsElement.appendChild(sizeElement);
    
    // Add add to cart button
    const addButton = document.createElement('button');
    addButton.classList.add('add-to-cart-button');
    addButton.textContent = 'Add to Cart';
    addButton.addEventListener('click', () => {
      // Handle adding item to cart
      console.log('Add to Cart clicked for', item);
    });
    itemElement.appendChild(addButton);
    
    wishlistElement.appendChild(itemElement);
  });
}

// Render the initial wishlist items
renderWishlistItems();

// Add event listener to the sorting element
wishlistSort.addEventListener('change', () => {
  // Re-render the wishlist items when the sorting option is changed
  renderWishlistItems();
});

