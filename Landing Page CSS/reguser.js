/*const AWS = import("aws-sdk");
AWS.config.update({ region: 'us-east-1' });


const docClient = new AWS.DynamoDB.DocumentClient();
*/

var idbonusPAR;
var correoPAR;
var contraPAR;
var nombrePAR;
var apellPAR;
var numcelPAR="55555";

function obtenerdatos(){
    
}


docClient.put({
    TableName: 'usuarios',
    Item: {
        user_id: idbonusPAR,
        email: correoPAR,
        contra: contraPAR,
        nombre: nombrePAR,
        apellido: apellPAR,
        numtel: numcelPAR,
        isAdmin: 'false'
    }
}, (err,data)=>{
    if(err){
        console.log(err);
    } else {
        console.log(data);
    }
});

/*obtenerdatos("ejemplo@ejemplo","contraejemplo","nombrejemplo2","appellejemplo","juanitoejemplo2","555555222");



/*docClient.put({
    TableName: 'usuarios',
    Item: {
        user_id: UserNameEjemplo,
        email: EmailEjemplo,
    }
}, (err,data)=>{
    if(err){
        console.log(err);
    } else {
        console.log(data);
    }
});*/