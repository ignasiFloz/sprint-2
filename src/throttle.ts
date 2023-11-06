export function throttle(func: (...args: any[]) => void, delay: number): (...args: any[]) => void {
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

   



  
  