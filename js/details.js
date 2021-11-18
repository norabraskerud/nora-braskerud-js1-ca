const DetailContainer = document.querySelector(".container3")

const queryString = document.location.search;

console.log(queryString);

const params = new URLSearchParams(queryString);

console.log(params);

const id = params.get("id");

console.log(id);

const url = "";


async function newApiCall() {

    try{
        const response = await fetch(url);
        const details = await response.json();

        console.log(details);

        createHtml(details);
    } catch(error) {
        console.log(error);
        DetailContainer.innerHTML = message("error", error);
    }
}

newApiCall();

function createHtml(details) {
    DetailContainer.innerHTML = `<h1> ${details.Title} </h1>
                                 <div class="title"> ${details.Poster} </div>
                                 <div class="year"> ${details.Year}</div>`;
}