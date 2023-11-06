import * as readline from 'readline';
import { memoize } from './memoize';


// Ejemplo de función para memoizar
function square(x: number): number {
  console.log('Calculating square of', x);
  return x * x;
}

const memoizedSquare = memoize(square);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function runCLI() {
  rl.question('Enter a number to calculate the square (q to quit): ', (input) => {
    if (input === 'q') {
      rl.close();
    } else {
      const number = parseFloat(input);
      if (!isNaN(number)) {
        const result = memoizedSquare(number);
        console.log(`Square of ${number} is ${result}`);
      } else {
        console.log('Invalid input. Please enter a number.');
      }
      runCLI();
    }
  });
}

runCLI();

rl.on('close', () => {
  console.log('CLI closed.');
});
