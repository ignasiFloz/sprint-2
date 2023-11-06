import readline from 'readline';
import { throttle } from './throttle'; // Asegúrate de que el archivo throttle.js esté en la misma carpeta

// Configura la interfaz de línea de comandos para la entrada del usuario
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Importa la función throttle que proporcionaste

const savedValues: string[] = [];
const saveValueThrottled = throttle((value) => {
  savedValues.push(value);
}, 1000);

console.log('Iniciando la grabación. Presiona Enter para almacenar un valor cada segundo. Cuando termines, escribe "F" y presiona Enter.');

rl.on('line', (input) => {
  if (input.toLowerCase() === 'f') {
    rl.close();
    showSavedValues();
  } else {
    saveValueThrottled(input);
  }
});

function showSavedValues() {
  console.log('Valores guardados:');
  console.log(savedValues);
}
