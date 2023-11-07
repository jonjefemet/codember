import fetch from 'node-fetch';


/**
 * La función fetchText() recupera el contenido de un archivo de texto de una URL especificada y
 * devuelve los datos como una cadena.
 * @returns La función `fetchText()` devuelve el contenido de texto de la respuesta de la URL
 * 'https://codember.dev/data/message_01.txt'.
 */
async function fetchText() {
  const response = await fetch('https://codember.dev/data/message_01.txt');
  const data = await response.text();
  return data;
}

/* La `función asíncrona main()` es la función principal del programa. Es una función asincrónica que
se encarga de ejecutar la lógica del programa. */
async function main() {

  /* La línea `const file = await fetchText();` llama a la función `fetchText()` y espera su resultado.
  La función `fetchText()` recupera el contenido de un archivo de texto de una URL especificada y
  devuelve los datos como una cadena. Al usar `await`, el programa espera a que se complete la función
  `fetchText()` y asigna el valor devuelto a la variable `file`. */
  const file = await fetchText();

  /* La línea `const fileLowerCase = file.toLowerCase();` está convirtiendo la cadena `file` a
  minúsculas. Utiliza el método `toLowerCase()`, que es un método JavaScript integrado para cadenas,
  para convertir todos los caracteres de la cadena a minúsculas. Esto se hace para garantizar que el
  recuento de palabras no distinga entre mayúsculas y minúsculas, lo que significa que las palabras
  con diferentes mayúsculas se tratarán como la misma palabra. */
  const fileLowerCase = file.toLowerCase();

  /* La línea `const palabras = fileLowerCase.split(' ');` está dividiendo la cadena `fileLowerCase` en
  una matriz de palabras. Utiliza el método `split()`, que es un método JavaScript integrado para
  cadenas, para dividir la cadena en una matriz basada en el delimitador especificado, en este caso,
  un espacio (' '). Cada palabra de la cadena se convierte en un elemento de la matriz resultante. */
  const words = fileLowerCase.split(' ');

  /* El código `const palabrasSinRepeticiones = palabras.filtro((palabra, índice) => {
      return palabras.indexOf(palabra) === índice;
    });` está filtrando las palabras repetidas de la matriz `palabras`. */
  const wordsWithoutRepetitions = words.filter((word, index) => {
    return words.indexOf(word) === index;
  });

  /* El código `mensaje constante = palabrasSinRepeticiones.reduce((acc, palabra) => {
      const total = palabras.filtro((Palabra actual) => Palabra actual === palabra).longitud;
      devolver cuenta + ``;
    }, "");` está calculando la frecuencia de cada palabra única en la matriz `words` y creando una
  cadena de mensaje que incluye cada palabra seguida de su frecuencia. */
  const message = wordsWithoutRepetitions.reduce((acc, word) => {
    const total = words.filter((currentWord) => currentWord === word).length;
    return acc + `${word}${total}`;
  }, "");

  return message;
}
main().then((message) => console.log(message));



