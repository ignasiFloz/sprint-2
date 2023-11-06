import readline from 'readline';
import { debounce } from './debounce'; // Asegúrate de que el archivo debounce.js esté en la misma carpeta

// Configura la interfaz de línea de comandos para la entrada del usuario
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Crea una función que se ejecutará cuando el temporizador esté completo
const onTimerDone = () => {
  console.log('Timer is done!');
  process.exit(0)
};

// Crea una función debounced que ejecutará onTimerDone después de un retraso
const debouncedOnTimerDone = debounce(onTimerDone, 1000); // El segundo argumento es el tiempo de espera en milisegundos

// Escucha la entrada del usuario
rl.on('line', (input) => {
  console.log('Input received:', input);
  debouncedOnTimerDone(); // Reinicia el temporizador cada vez que se recibe una entrada
});

console.log('CLI is running. Enter number(1) to reset the timer.');
