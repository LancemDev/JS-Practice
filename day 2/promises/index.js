
const apiURL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=6c82ec66d2ea40c586e897cdc47b4413"

const makeRequest = new Promise((resolve, reject) => {
    const xhr = new XMLHTTPRequest();
    xhr.onload = () =>{
        if(xhr.status === 200){
            const data = xhr.responseText;
            resolve(data);
        }else{
            reject(xhr.status);
        }
    }

    xhr.open("GET", apiURL, true);
    xhr.send();
});