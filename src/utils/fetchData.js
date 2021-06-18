//Convertido de EcmaScript general a EcmaScript 6
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const fetchData = (url_api, callback) => {0
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', url_api, true);
        xhttp.onreadystatechange = (() => {
        if(xhttp.readyState === 4){
            //Condicional Ternario
            (xhttp.status === 200)
                ? resolve(JSON.parse(xhttp.responseText))
                : reject(new Error('Error', url_api))
        }
    });
    xhttp.send();
    });
}

module.exports = fetchData;