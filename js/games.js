const searchInput = document.querySelector("#gameSearch");

const gameCards = document.querySelectorAll(".game-card");

const filterButtons = document.querySelectorAll(".filter-btn");

const sortSelect = document.querySelector("#gameSort");

const gamesGrid = document.querySelector(".games-grid");

const favoriteButtons = document.querySelectorAll(".favorite-btn");

let currentSearch="";

let currentGenre="all";

const favoritesCount = document.querySelector("#favoritesCount");


function applyFilters(){
    gameCards.forEach((card)=>{
        const gameInfo = card.textContent.toLowerCase();
        const gameGenre = card.dataset.genre;

        const matchesSearch = gameInfo.includes(currentSearch);

        const matchesGenre = currentGenre === "all" || currentGenre === gameGenre;

        card.style.display= matchesSearch && matchesGenre ? "":"none";
    });
}

searchInput.addEventListener("input",()=>{
    currentSearch = searchInput.value.toLowerCase().trim();

    applyFilters();
    
});



filterButtons.forEach((button)=>{
    button.addEventListener("click", ()=>{
        const selectedGenre = button.dataset.genre;
        currentGenre = selectedGenre;
        filterButtons.forEach((btn)=>{
            btn.classList.remove("active");
        });

        button.classList.add("active");

       applyFilters();
    });
});

sortSelect.addEventListener("change",()=>{
    const sortValue = sortSelect.value;
    const cardArray = Array.from(gameCards);
    if(sortValue=== "az"){
    cardArray.sort((a,b)=>{
        const nameA= a.querySelector("h3").textContent.toLowerCase();
        const nameB= b.querySelector("h3").textContent.toLowerCase();

        return nameA.localeCompare(nameB);
    
    });
}

else if(sortValue==="za"){
    cardArray.sort((a,b)=>{
        const nameA= a.querySelector("h3").textContent.toLowerCase();
        const nameB= b.querySelector("h3").textContent.toLowerCase();

        return nameB.localeCompare(nameA);
    });
    
}

cardArray.forEach((card)=>{
    gamesGrid.appendChild(card);
});

});

favoriteButtons.forEach((button) => {

    button.addEventListener("click", () => {
        const isFavorited=button.classList.contains("favorited");

        if (isFavorited) {
            button.classList.remove("favorited");
            button.textContent="♡ Add to Favorites";
        }

        else{
            button.classList.add("favorited");
            button.textContent="♥ Remove from Favorites";
        }

        updateFavoritesCount();
    });
});

function updateFavoritesCount() {
    const favoriteArray = Array.from(favoriteButtons).filter((button)=> {
        return button.classList.contains("favorited");
    });

    const totalFavorite = favoriteArray.length;

    favoritesCount.textContent =`Favorites: ${totalFavorite}`;
}

updateFavoritesCount();