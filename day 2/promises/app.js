
const api = "https://newsapi.org/v2/top-headlines?country=us&apiKey=6c82ec66d2ea40c586e897cdc47b4413";

const newPromise = new Promise((resolve, reject) => {
    fetch(apiURL)
    .then(response =>{
        return response.ok ? response.json : response.status;
    })
    .then(data =>{
        console.log(data)
        resolve();
    })
    .catch(error =>{
        reject(error);
    })
})