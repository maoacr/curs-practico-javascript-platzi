//Evaluacion de conocimiwentos previos:

//Variables y operaciones

//1️⃣ Responde las siguientes preguntas en la sección de comentarios:

//¿Qué es una variable y para qué sirve?
let rta1 = 'espacio en memoria para almacenar uno o mas datos y puede o no cambiar en el tiempo';
//¿Cuál es la diferencia entre declarar e inicializar una variable?
let rta2 = 'Declarar es crear en el programa la variable e inicializarla es definirle o asignarle un valor';
//¿Cuál es la diferencia entre sumar números y concatenar strings?
let rta3 = 'La suma de numeros es una operacion aritmetica y la concatenacion de strings es unir uno o mas caracteres';
//¿Cuál operador me permite sumar o concatenar?
let rta4 = '+';

//2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

//Nombre
//Apellido
//Nombre de usuario en Platzi
//Edad
//Correo electrónico
//Mayor de edad
//Dinero ahorrado
//Deudas

//3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

let nombre = "Mario"; /*String*/
let apellido = "Crespo"; /*String*/
let userPlatzi = "maoacr"; /*String*/
let edad = 28; /*Number*/
let email = "maoacr@gmail.com"; /*String*/
let mayorDeEdad = true; /*Boolean*/
let dineroAhorrado = 10000; /*Number*/
let deudas = 0;/*Number*/

//4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

//Nombre completo (nombre y apellido)
//Dinero real (dinero ahorrado menos deudas)

let nombreCompleto = `${nombre} + ${apellido}`;
let dineroReal = dineroAhorrado - deudas;

//Funciones

//1️⃣ Responde las siguientes preguntas en la sección de comentarios:

//¿Qué es una función?
let rta5 = 'Un bloque de codigo que recibe o no parametros, ejecuta o hace algo y retorna o no un resultado';
//¿Cuándo me sirve usar una función en mi código?
let rta5 = 'Cuando necesito ejecutar el mismo codigo varias veces';
//¿Cuál es la diferencia entre parámetros y argumentos de una función?
let rta6 = '';

//2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

function formatearOracion(name, lastname, nickname) {
    return console.log(`Mi nombre es ${name} ${lastname}, pero prefiero que me digas ${nickname}.`)
}

formatearOracion('Juan David', 'Castro Gallego', 'JuanDC');

//Condicionales

//1️⃣ Responde las siguientes preguntas en la sección de comentarios:

//¿Qué es una condicional?
let rta7 = 'Una sentencia de codigo que evalua un parametro o dato para tomar una desicion'

//¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
let rta8 = 'if, else if, else, switch y operadores logicos';

//¿Puedo combinar funciones y condicionales?
let rta9 = true;

//2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break
}

if(tipoDeSuscripcion === 'Free'){
    console.log("Solo puedes tomar los cursos gratis");    
}else if (tipoDeSuscripcion === 'Basic'){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}else if(tipoDeSuscripcion === 'Expert'){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}else {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"); 
}

//3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

if(tipoDeSuscripcion === 'Free'){
    console.log("Solo puedes tomar los cursos gratis");    
}
if (tipoDeSuscripcion === 'Basic'){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}
if(tipoDeSuscripcion === 'Expert'){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}
if (tipoDeSuscripcion === 'ExpertPlus'){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"); 
}

//Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays y un solo condicional. 😏


let bonus = '';

//Ciclos

//1️⃣ Responde las siguientes preguntas en la sección de comentarios:

//¿Qué es un ciclo?
let rta10 = 'Fragmento de codigo que se ejecuta mientras se cumpla una condicion o no';

//¿Qué tipos de ciclos existen en JavaScript?
let rta11 = 'for, while,do while, for.. in, for .. of'

//¿Qué es un ciclo infinito y por qué es un problema?
let rta12 = 'Codigo qu una vez inicia o se ejecuta, no se detiene y se convierte en un problema del uso de nuestros recursos de memoria y eventualmnte un problema de rendimiento';

//¿Puedo mezclar ciclos y condicionales?
let rta12 = true;

//2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}
for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}


let i = 0;
while (i < 5) {
    i++
    console.log("El valor de i es: " + i);
}

let i = 10;
while (i >=2 ) {
    i--
    console.log("El valor de i es: " + i);
}


//3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.
//Pista: puedes usar la función prompt de JavaScript.


let userNumber; 
while(userNumber !=4){
    userNumber = parseInt(prompt('Cuanto es 2 + 2 ?'))
    userNumber == 4 ? (alert('Felicitaciones !')) : (null)
}

//Listas

//1️⃣ Responde las siguientes preguntas en la sección de comentarios:

//¿Qué es un array?
let rta13 = 'Una estructura de datos nativa de Js que puede guardar listas de valores como Objetos, incluso otros arrays o valores individuales y parea poder acceder a estos datos necesitamos un a posicion o un índice';

//¿Qué es un objeto?
let rta13 = 'Una estructura de datos nativa de Js de tipo clave valor';

//¿Cuándo es mejor usar objetos o arrays?
let rta14 = ''; 

//¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
let rta15 = true;

//2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
function firstElement(params) {
    console.log(params[0])
}

//3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
params=[1,2,3,4,5,6,7,8,9]
function elements(params) {
    for(i=0; i <= params.lenght ;i++){
        console.log(params.i)
    }
}

//4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
let Mario = {
    name: 'Mario',
    apellido: 'Crespo',
    nickmame: 'maoacr',
    edad: 28
}

function imprimirElementosDelObjeto(object) {
    for(object.prop in Mario){
        console.log(object[prop])
    }
}

imprimirElementosDelObjeto(Mario)
