
var x;

if(true){
    var y;
}

x=2;
y=2;

const z = 5;
//si aquí le pones const, ya ni le muevas a la variable

const consObjeto = {nombre: "loquesea"};
consObjeto.nombre ="Majora";
consObjeto.prop = 1;

console.log(z + " es una constante");

//si concatenas un objeto con una cadena, lo va a convertir en cadena de texto
console.log(consObjeto );
console.log(+consObjeto.prop);

consObjeto.nombre = {nombre : "mask"}; //así lo puedes ir cambiando
console.log(consObjeto );



console.log(x*y);
console.log("leonardo");

function nombrefuncion(parametroreceptor){

    a = 5;
    console.log(a +" Esto viene de mi función");

}

function retornar(parametro){

    b = 10;
    return b;


}

console.log(retornar());

//nombrefuncion();