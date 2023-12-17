const api = "https://newsapi.org/v2/top-headlines?country=us&apiKey=6c82ec66d2ea40c586e897cdc47b4413"

let output = "";
obj = document.getElementById('news');
const fetchData = (api, callback) => {
    xhr = new XMLHttpRequest();
    xhr.onload = () =>{
        if(xhr.status === 200){
            response = JSON.parse(xhr.responseText);
            response.articles.forEach((article)=>{
                output += `<li><a href=${article.url}>${article.title}</a></li>`
            });
            obj.innerHTML = output;
            callback(response, null);
        }else{
            callback(null, error);
        }
    }

    xhr.onerror = () =>{
        console.log(xhr.statusText);
    }

    xhr.open("GET", api, true);
    xhr.send();
}


// let output="";

const callback = (data, error) =>{
    if(error){
        console.log("there's an error")
    }else{
        // data.articles.forEach((article)=>{
        //     output += `<li><a href=${article.url}>${article.title}</a></li>`
        // });
        // obj.innerHTML = output;
    }
}

fetchData(api, callback);