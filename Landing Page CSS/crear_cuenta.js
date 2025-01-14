const API_URL = 'https://jsonplaceholder.typicode.com';

const xhr = new XMLHttpRequest();

function onRequestHandler() {
    if(this.readyState == 4 && this.status == 200){
        //0=unset no se llamo al metodo open
        //1=set se llamo al metodo open
        //2=headers recieved se llamo al metodo send
        //3=loading esta cargando, recibiendo respuesta
        //4=done, se ha completado la operacion
        console.log(this.response);
    }
}

xhr.addEventListener("load", onRequestHandler);
xhr.open('GET','https://jsonplaceholder.typicode.com/users');
xhr.send();
console.log('hola');

const AWS = require("aws-sdk");
AWS.config.update({ region: 'us-east-1' });


const docClient = new AWS.DynamoDB.DocumentClient();


