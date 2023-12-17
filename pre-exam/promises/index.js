const api = "https://newsapi.org/v2/top-headlines?country=us&apiKey=6c82ec66d2ea40c586e897cdc47b4413"

let news = document.getElementById("news");

const fetchData = (api) => {
    return new Promise((resolve, reject) =>{
        fetch(api)
        .then(
            response => {
                if (!response.ok) {
                    throw new Error('Error: ' + response.status);
                }
                return response.json();
            })
        .then(
            data =>{
                let output = "";
                data.articles.forEach((article)=>{
                    output += `<li>${article.title}</li>`;
                })
                news.innerHTML = output;

                resolve("No errors here")
            })
        .catch(
            error => {
                reject("The error is: " + error);
            });
    });
}

fetchData(api)
.then(message =>{
    console.log(message);
})
.then(error=>{
    console.log(error);
})