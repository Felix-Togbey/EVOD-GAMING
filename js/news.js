// Select the filter buttons
const filterButtons = document.querySelectorAll(".news-filter");

// Select all news cards
const newsCards = document.querySelectorAll(".news-card");

// Select the search input
const searchInput = document.querySelector("#newsSearch");

let currentCategory = "all";
let currentSearch = "";

// Apply both search and category filters
function applyFilters() {

    newsCards.forEach((card) => {

        const cardCategory = card.dataset.category;
        const cardText = card.textContent.toLowerCase();

        const matchesCategory =
            currentCategory === "all" ||
            currentCategory === cardCategory;

        const matchesSearch =
            cardText.includes(currentSearch);

        card.style.display =
            matchesCategory && matchesSearch ? "" : "none";

    });

}

// Category filters
filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        currentCategory = button.dataset.category;

        filterButtons.forEach((btn) => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        applyFilters();

    });

});

// Search functionality
searchInput.addEventListener("input", () => {

    currentSearch = searchInput.value.toLowerCase().trim();

    applyFilters();

});

applyFilters();