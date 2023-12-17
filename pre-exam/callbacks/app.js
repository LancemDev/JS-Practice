const api = "https://newsapi.org/v2/top-headlines?country=us&apiKey=6c82ec66d2ea40c586e897cdc47b4413";

const obj = document.getElementById("news");
let output = ""; // Changed const to let
const fetchData = (api, callback) => {
    fetch(api)
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok'); // Throw an error if response is not ok
            return response.json();
        })
        .then(data => {
            data.articles.forEach(article => { // Iterate over articles
                output += `<li>${article.title}</li>`; // Use backticks for template literals
            });
            obj.innerHTML = output; // Display the data on HTML
            callback(data, null);
        })
        .catch(error => {
            callback(null, error);
        });
}

const callback = (data, error) => {
    console.log(error ? "There is an error" : "You should be getting some data");
}

fetchData(api, callback);