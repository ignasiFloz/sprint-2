
import  { throttle }  from './throttle';
import { memoize } from './memoize';
import { debounce } from './debounce';

//debounce function
function hi(a: string){
  console.log(a)
}

let hiD = debounce(hi, 1000)
hiD('A')
hiD('B')
hiD('C')
hiD('D')


//Throttle function
function ejemplo(...args: any[]) {
    console.log('Función ejecutada con argumentos:', args);
  }
const throttledFunc = throttle(ejemplo, 2000);
// Simulación de llamadas con argumentos continuos durante 2 segundos.
throttledFunc(1);
throttledFunc(2);
setTimeout(() => throttledFunc(3), 500);
setTimeout(() => throttledFunc(4), 1500);
setTimeout(() => throttledFunc(5), 2500);




//memoize function
function expensiveOperation(n: number): number {
  console.log(`Calculating ${n}`);
  return n * 2;
}
const memoizedExpensiveOperation = memoize(expensiveOperation);
console.log(memoizedExpensiveOperation(5)); 
console.log(memoizedExpensiveOperation(5));
console.log(memoizedExpensiveOperation(10)); 
console.log(memoizedExpensiveOperation(10)); 