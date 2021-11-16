const API_URL = "https://movie-database-imdb-alternative.p.rapidapi.com/?s=Avengers%20Endgame&r=json&page=1";

const options = { "headers": {
    "x-rapidapi-key": "916cb14e72msh92f3c6cac404df7p1f44b7jsne3fd7ba9d7b1"
}}

async function callApi() {
    const response = await fetch(API_URL, options);
    const results = await response.json();
    console.log(results);
}

callApi();