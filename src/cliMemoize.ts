import * as readline from 'readline';
import { memoize } from './memoize';


function factorial(n: number): number {
  console.log('Calculating factorial of', n);
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

const memoizedFactorial = memoize(factorial);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function runCLI() {
  rl.question('Enter a number to calculate the factorial (q to quit): ', (input) => {
    if (input === 'q') {
      rl.close();
    } else {
      const number = parseFloat(input);
      if (!isNaN(number) && Number.isInteger(number) && number >= 0) {
        const result = memoizedFactorial(number);
        console.log(`Factorial of ${number} is ${result}`);
      } else {
        console.log('Invalid input. Please enter a non-negative integer.');
      }
      runCLI();
    }
  });
}

runCLI();

rl.on('close', () => {
  console.log('CLI closed.');
});
