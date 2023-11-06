// cli.ts
import  { throttle }  from './throttle';

function ejemplo(args: any[]) {
  console.log('Función ejecutada con argumentos:', args);
}
const throttledFunc = throttle(ejemplo, 5000);
// Parse command line arguments
const args = process.argv.slice(2).map((arg) => JSON.parse(arg));
throttledFunc(args);
