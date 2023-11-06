export function memoize<T, U>(func: (arg: T) => U): (arg: T) => U {
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
  
    
  
  
  