fetch("https://movie-database-imdb-alternative.p.rapidapi.com/?s=Avengers%20Endgame&r=json&page=1", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
		"x-rapidapi-key": "916cb14e72msh92f3c6cac404df7p1f44b7jsne3fd7ba9d7b1"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});

const resultContainer = document.querySelector(".results");

async function fetchInfo() {
    try { 
        const response = await fetch(url);
        const json = await response.json();

        console.log(json);
    }

}

fetchInfo();

