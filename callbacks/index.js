
// The callback function that accepts a function as a param
// In calling this function one can use 3 parameters. i.e the last two parameters can be the callback params
// 
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