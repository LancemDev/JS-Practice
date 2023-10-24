
const apiURL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=6c82ec66d2ea40c586e897cdc47b4413"

const makeRequest = (url, callback) => {
    fetch(url)
    .then( response => {
        return response.ok ? response.json : response.status;
        })
    .then(data =>{
        callback(null, data);
    })
    .catch(error =>{
        callback(error, null);
    })
}