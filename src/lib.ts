export default class functionsTesting {
  debounce(func: Function, delay: number): (...args: any[]) => void {
    let timer: NodeJS.Timeout;

    return (...args: any[]): void => {
        clearTimeout(timer);

        timer = setTimeout(() => {
        func(...args);
        }, delay);
    };
  }
  throttle(func: (...args: any[]) => void, delay: number): (...args: any[]) => void {
    let timeoutId: NodeJS.Timeout | undefined;
    let allArgs: any[] = [];
  
    return function (...args: any[]) {
      allArgs.push(...args);
  
      if (!timeoutId) {
        timeoutId = setTimeout(() => {
          func(...allArgs);
          allArgs = [];
          timeoutId = undefined;
        }, delay);
      }
    };
  }
  memoize<T, U>(func: (arg: T) => U): (arg: T) => U {
    const cache = new Map<T, U>();
  
    return (arg: T) => {
      if (cache.has(arg)) {
        return cache.get(arg)!;
      } else {
        const result = func(arg);
        cache.set(arg, result);
        return result;
      }
    };
  }


  
  
}



  





