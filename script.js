













// 1. PRODUCT DATA (12 PRODUCTS)

const products = [
    {
        id: 1,
        name: "Everyday Essential Tee",
        category: "Fashion",
        price: 499,
        image: "./images/shirt/f1.jpg"
    },
    {
        id: 2,
        name: "Classic Denim",
        category: "Fashion",
        price: 1499,
        image: "./images/shirt/pant.jpg"
    },
    {
        id: 3,
        name: "Canvas Carryall Tote",
        category: "Accessories",
        price: 399,
        image: "./images/shirt/everyday-bag.jpg"
    },
    {
        id: 4,
        name: "Street Runner",
        category: "Series",
        price: 2299,
        image: "./images/shirt/soo.jpg"
    },
    {
        id: 5,
        name: "White Classic Tee",
        category: "Universe",
        price: 699,
        image: "./images/shirt/whitetshirt.jpg"
    },
    {
        id: 6,
        name: "Black Oversized Tee",
        category: "Fashion",
        price: 899,
        image: "./images/shirt/blacktshirt.jpg"
    },
    {
        id: 7,
        name: "Yellow Casual Shirt",
        category: "Series",
        price: 999,
        image: "./images/shirt/yellowsoo.jpg"
    },
    {
        id: 8,
        name: "Nostra Premium Shirt",
        category: "Universe",
        price: 1299,
        image: "./images/shirt/n7.jpg"
    },
    {
        id: 9,
        name: "Daily Wear Collection",
        category: "Fashion",
        price: 799,
        image: "./images/shirt/f1.jpg"
    },
    {
        id: 10,
        name: "Travel Carry Bag",
        category: "Accessories",
        price: 599,
        image: "./images/shirt/everyday-bag.jpg"
    },
    {
        id: 11,
        name: "Premium Denim Pant",
        category: "Series",
        price: 1799,
        image: "./images/shirt/pant.jpg"
    },
    {
        id: 12,
        name: "Casual White Collection",
        category: "Universe",
        price: 1199,
        image: "./images/shirt/whitetshirt.jpg"
    }
];


// 2. SELECT HTML ELEMENTS

const productContainer =
    document.getElementById("productContainer");

const searchInput =
    document.getElementById("searchInput");

const sortProducts =
    document.getElementById("sortProducts");

const categoryFilters =
    document.querySelectorAll(".category-filter");

const minPrice =
    document.getElementById("minPrice");

const maxPrice =
    document.getElementById("maxPrice");

const priceFilterBtn =
    document.getElementById("priceFilterBtn");

const productCount =
    document.getElementById("productCount");

const noProducts =
    document.getElementById("noProducts");


// 3. DISPLAY PRODUCTS

function displayProducts(productList) {

    productContainer.innerHTML = "";

    productList.forEach(function (product) {

        const productCard = document.createElement("div");

        productCard.className = "product-card";

        productCard.innerHTML = `
            <img
                src="${product.image}"
                alt="${product.name}"
            >

            <h3>${product.name}</h3>

            <p>${product.category}</p>

            <p><strong>$${product.price.toLocaleString("en-US")}</strong></p>
        `;

        productContainer.appendChild(productCard);

    });


    // PRODUCT COUNT

    productCount.textContent =
        `${productList.length} Products`;


    // NO PRODUCTS MESSAGE

    if (productList.length === 0) {

        noProducts.style.display = "block";

    } else {

        noProducts.style.display = "none";

    }

}


// 4. SEARCH FUNCTION

function searchProduct() {

    filterProducts();

}

searchInput.addEventListener("input", searchProduct);


// 5. CATEGORY FILTER

categoryFilters.forEach(function (checkbox) {

    checkbox.addEventListener("change", function () {

        filterProducts();

    });

});


// 6. PRICE FILTER

priceFilterBtn.addEventListener("click", function () {

    filterProducts();

});


// 7. SORT PRODUCTS

sortProducts.addEventListener("change", function () {

    filterProducts();

});


// 8. MAIN FILTER FUNCTION

function filterProducts() {

    let filteredProducts = [...products];


    // SEARCH FILTER

    const searchValue =
        searchInput.value.toLowerCase().trim();

    if (searchValue !== "") {

        filteredProducts = filteredProducts.filter(function (product) {

            return product.name.toLowerCase().includes(searchValue);

        });

    }


    // CATEGORY FILTER

    const selectedCategories = [];

    categoryFilters.forEach(function (checkbox) {

        if (checkbox.checked) {

            selectedCategories.push(checkbox.value);

        }

    });

    if (selectedCategories.length > 0) {

        filteredProducts = filteredProducts.filter(function (product) {

            return selectedCategories.includes(product.category);

        });

    }


    // PRICE FILTER

    const min = minPrice.value.trim() === ""
        ? null
        : Number(minPrice.value);

    const max = maxPrice.value.trim() === ""
        ? null
        : Number(maxPrice.value);

    if (min !== null || max !== null) {

        filteredProducts = filteredProducts.filter(function (product) {

            const aboveMinimum =
                min === null || product.price >= min;

            const belowMaximum =
                max === null || product.price <= max;

            return aboveMinimum && belowMaximum;

        });

    }


    // SORTING

    const sortValue = sortProducts.value;

    if (sortValue === "low") {

        filteredProducts.sort(function (a, b) {

            return a.price - b.price;

        });

    }

    else if (sortValue === "high") {

        filteredProducts.sort(function (a, b) {

            return b.price - a.price;

        });

    }

    else if (sortValue === "name") {

        filteredProducts.sort(function (a, b) {

            return a.name.localeCompare(b.name);

        });

    }


    // DISPLAY FINAL PRODUCTS

    displayProducts(filteredProducts);

}


// 9. INITIAL PRODUCT DISPLAY

displayProducts(products);


console.log("NOSTRA Website JavaScript Loaded Successfully!");
