/* 
Realizar una función que permita contar la cantidad de vocales que tiene un texto que se recibe como parámetro. No habrá discriminación entre las vocales en mayúscula y en minúscula. Las vocales acentuadas no se contarán. El valor obtenido se retornará al terminar la función. Si se no se recibe un string retornará -1.
*/
function contarVocales(texto) {

  // Creo variable contador para contar vocales
  var contador = 0;
  // Creo variables vocales con un string conteniendo los posibles valores del parametro texto
  var vocales = 'aeiouAEIOU';

  // utilizo typeof para ver si texto es un string
  if(typeof texto === 'string') {
    
    // recorro el string texto
    for(var i=0; i<texto.length; i++) {
      // utilizo indexOf para ver si algun caracter del parametro texto se encuentra dentro de la variable vocales, sino se encuentra retorna -1. Si se encuentra, el contador se incrementa.
      if(vocales.indexOf(texto[i]) > -1){
        contador++;
      }
    }
  
  // si parametro texto no es un string, me devueleve -1
  } else {
    return -1;
  }
  
  return contador;
}

/* 
Crear un repo en github y subir todo el proyecto. Se ignorará la carpeta node_modules (para ellos está creado el archivo .gitignore en este proyecto) Esta función devolverá un string con la url del repo.
*/
function urlRepo() {
  return 'https://github.com/benjabarreiro/tp1.git';
}

/* 
Crear una función arrow, que devuelva una clase en ES6 que contendrá dos métodos llamados contadorPalabras y hayNumeros. La clase recibirá un texto que se guardará en una propiedad llamada texto. contadorPalabras retornará la cantidad de palabras encontradas en la propiedad texto y hayNumeros devolverá true en caso de que encuentre un número en dicho texto, caso contrario retorna false. En ambos métodos, si el texto no es válido, se devolverá -1
Crear un propiedad estática contadorInstancias que me indique cuantas instancias hay de esa clase.
*/
const crearClase = () => {
  return
}

module.exports = {
  contarVocales,
  urlRepo,
  crearClase
};
