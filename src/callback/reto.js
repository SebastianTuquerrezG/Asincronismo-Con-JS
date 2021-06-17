//Instancia de request, permite hacer peticiones a la nube, API o URL.
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

//Nos permite traer la informacion desde nuestra API, desencademos los llamados que necesitamos.
function fetchData(url_api, callback){
    //Construccion de peticion, referencia a un objeto XMLHTTP
    let xhhtp = new XMLHttpRequest(); //Aporte de Microsoft
    //Como hace un llamado a una URL...?
    xhttp.open('GET', url_api, true);
    /*
    Parametro 1: que es lo que queremos hacer, metodo.
    Parametro 2: URL
    Parametro 3: Definir si es asincrono o no, por defecto poner 'true'
     */
        //Generar un escuchador de la conexion de peticion
        xhttp.onreadystatechange = function (event){
            /*validacion de ejecucion, la cual puede tener varios estados 
            Estado 0: inicializando
            Estado 1: Cargando
            Estado 2: Cargado
            Estado 3: Ya hay algo cargado
            Estado 4: Completado                */
            if(xhttp.readystate === 4){
                if(xhttp.status === 200) {
                    //Verificar estado, aqui un resumen de los casos mas comunes:
            /*
            ESTADO 1xx (100 - 199): Indica que la petición esta siendo procesada.
            ESTADO 2xx (200 - 299): Indica que la petición fue recibida, aceptada y procesada correctamente.
            ESTADO 3xx (300 - 399): Indica que hay que tomar acciones adicionales para completar la solicitud. Por lo general indican redireccionamiento.
            ESTADO 4xx (400 - 499): Errores del lado del cliente. Indica se hizo mal la solicitud de datos.
            ESTADO 5xx (500 - 599): Errores del Servidor. Indica que fallo totalmente la ejecución.
            */

            //Estandar de Node con los CallBacks, 1 parametro: error, 2 parametro: resultado.
                    callback(null, JSON.parse(xhttp.responseText));
                } else {
                    const error = new Error('Error' + url_api);
                    return callback(error, null);
                }
            }
        }
        //Enviar la solicitud
        xhttp.send();
}