//Codigo del cuadrado
console.group("Cuadrado")
const ladoCuadrado = 5;
console.log("Los ladoas del cuadrdo miden " + ladoCuadrado + "cm cada uno");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es de " + perimetroCuadrado + " centimetros")

const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log("El area del cuadrado es de " + areaCuadrado + " centimetros cuadrados")

console.groupEnd()


function perimetroDeUnCuadrado(lado) {
  let rta = lado * 4
  return console.log("El perimetro del cuadrado es de " + rta + " centimetros")
}

function areaDeUnCuadrado(lado) {
  let area = lado * lado;
  return console.log("El area del cuadrado es de " + area + " centimetros cuadradoos")
}

//Código para el triangulo
console.group("Triangulo")

const ladoUno =  6;
const ladoDos = 6;
const ladoTres = 4;
const alturaTriangulo = 5.5;

console.log("Los lados del triagulo miden: "+ ladoUno + " cms, " + ladoDos + " cms y " + ladoTres + " cms")

const perimetroTriangulo = ladoUno + ladoDos + ladoTres;
console.log("El perimetro del triangulo es de " + perimetroTriangulo + " centimetros")

const areaTriangulo = (ladoTres*alturaTriangulo)/2
console.log("El area del triangulo es de " + areaTriangulo + " cms cuadrados")
console.groupEnd()

function perimetroDeUnTriangulo(ladoUno, ladoDos, baseDelTriangulo){
  let perimetroTriangulo = ladoUno + ladoDos + baseDelTriangulo;
  return console.log("El perimetro del triangulo es de " + perimetroTriangulo + " centimetros")
}

function areaDeUnTriangulo (baseDelTriangulo, alturaDelTriangulo) {
  let areaTriangulo = (baseDelTriangulo*alturaDelTriangulo)/2
  return console.log("El area del triangulo es de " + areaTriangulo + " cms cuadrados")
}

//Código del circulo
console.group("Circulo")

//Radio
const radioCirculo = 4;
console.log("El radio del circulo es de " + radioCirculo + " cms" )

//Diametro
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es de " + diametroCirculo + " cms" )

function diametroDeUnCirculo(radio){
  let diametroDeCirculo = radio * 2;
  return console.log("El diametro del circulo es de " + diametroDeCirculo + " cms" )
}

//PI
const PI = Math.PI;
console.log("PI equivale a " +  PI)

//Circunferencia
const circunferenciaCirculo = diametroCirculo * PI;
console.log("La circunferencia del circulo es de " + circunferenciaCirculo + " cms" )

function circunfereniaDeUnCirculo (diametro){
  let circunferencia = diametro * PI;
  return console.log("La circunferencia del circulo es de " + circunferencia + " cms" )
}

//Area
const areaCirculo = (radioCirculo*radioCirculo) * PI
console.log("El area del circlo es de " + areaCirculo + " cms cuadrados" )

function areaDeUnCirculo (radio){
  let areaDelCirculo = (radio*radio)*PI;
  return console.log("El area del circlo es de " + areaDelCirculo + " cms cuadrados" )

}

console.groupEnd()
