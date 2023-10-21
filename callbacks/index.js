
// The callback function that accepts a function as a param
// In calling this function one can use 3 parameters. i.e the last two parameters can be the callback params
const toDo = (url, callback) =>{
    fetch(url)
    .then(
        response => {
            return response.ok ? response.json : response.status;
        }
    )
    .then(
        data =>{
            callback(null, data);
        }
    )
    .catch(
        error => {
            callback(error, null);
        }
    )
}

const fetchData = (error, data) => {
    console.log(
        error ? "There's an error" : "You should be getting data"
    );
}

const apiURL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=6c82ec66d2ea40c586e897cdc47b4413"

toDo(apiURL, fetchData);