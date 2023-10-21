const api = "https://newsapi.org/v2/top-headlines?country=us&apiKey=6c82ec66d2ea40c586e897cdc47b4413";
const div = document.getElementById('app');

let toDo = new Promise((resolve, reject) => {
    const data = fetch(api)
    .then( response =>{
        return response.ok ? response.json() : response.error;
    })
    .then(data => {
        let articles = data.articles;
        let output = '';
        articles.forEach( (article) => {
            output += '\
            <div> <h1> ' + article.title + ' </h1></div>';
        });
        resolve(output);
    })
    .catch(error => {
        reject(error);
    });
});

toDo.then(
    function(output){
        console.log(output);
        const newDiv = document.createElement('div');
        newDiv.innerHTML = output;
        div.appendChild(newDiv);
    },
    function(error){console.log(error);}
);
