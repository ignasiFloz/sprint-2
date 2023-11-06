export function debounce(func: Function, delay: number): (...args: any[]) => void {
    let timer: NodeJS.Timeout;

    return (...args: any[]): void => {
        clearTimeout(timer);

        timer = setTimeout(() => {
        func(...args);
        }, delay);
    };
}
 
    
    
  
  
  