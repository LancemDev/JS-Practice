
const apiURL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=6c82ec66d2ea40c586e897cdc47b4413"

const makeRequest = (url, callback) => {
    var xhr = new XMLHttpRequest();
    xhr.onload = () =>{
        if(xhr.status === 200){
            const response = xhr.responseText;
            callback(null, response);
        }else{
            callback(xhr.status, null);
        }
    }
    xhr.onerror = () => {
        console.log(xhr.status);
    }

    xhr.open("GET", url, true);
    xhr.send();
}

const requestCallback = (error, data) => {
    console.log(
        error ? error : data
    )
}

makeRequest(apiURL, requestCallback);