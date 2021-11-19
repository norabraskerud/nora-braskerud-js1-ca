const DetailContainer = document.querySelector(".container3");
const iddisplay = document.querySelector(".id-test");
const message = document.querySelector(".message");

const queryString = document.location.search;

console.log(queryString);

const params = new URLSearchParams(queryString);

console.log(params);

const id = params.get("id");


if (id === null) {
    location.href = "/index.html";
}

const urlNew = "https://movie-database-imdb-alternative.p.rapidapi.com/?s=Avengers%20Endgame&r=json&page=1" + id;
const options = { "headers": {
    "x-rapidapi-key": "916cb14e72msh92f3c6cac404df7p1f44b7jsne3fd7ba9d7b1"
}}

iddisplay.innerHTML = id; 


async function newApiCall() {

    try{
        const response = await fetch(urlNew, options);
        const results = await response.json();

        console.log(results.Search);

        const det = results.Search[0];

        createHtml(det);

        
        
    } catch(error) {
        console.log(error);
        DetailContainer.innerHTML = error;
    }
}

newApiCall();

function createHtml(det) {
    console.log(det);
    DetailContainer.innerHTML = `<h1> ${det.Title} </h1>
                                 <div class="title"> ${det.Type} </div>
                                 <div class="poster"> ${det.Poster}</div>
                                 <div class="year"> ${det.ImdbID}</div>`;
}