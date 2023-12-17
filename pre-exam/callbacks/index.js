const api = '';

const fetchData = (api, callback) =>{
    fetch(api)
        .then(
            response =>{
                response.ok ? response.json() : response.error();
            }
        )
        .then(
            data =>{
                callback(data, null);
            }
        )
        .catch(
            error =>{
                callback(null, error);
            }
        )
}

const getError = (data, error) =>{
    console.log(
        error ? "There is an error. ${error}" : "You should be getting some data"
    );
}

fetchData(api, getError);