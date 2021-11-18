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
        const result = await response.json();

        console.log(details.get);

        const details = result[0];

        createHtml(details);
        
    } catch(error) {
        console.log(error);
        DetailContainer.innerHTML = error;
    }
}

newApiCall();

function createHtml(details) {
    DetailContainer.innerHTML = `<h1> ${details.Title} </h1>
                                 <div class="title"> ${details.Poster} </div>
                                 <div class="year"> ${details.Year}</div>`;
}