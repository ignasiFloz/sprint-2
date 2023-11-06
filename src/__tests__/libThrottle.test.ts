import { throttle } from '../throttle';

describe('throttle', () => {
  it('should throttle the function execution', () => {
    jest.useFakeTimers();
    let callCount = 0;
    const func = () => {
      callCount++;
      
    };

    const throttledFunc = throttle(func, 1000);
    throttledFunc();
    throttledFunc();
    jest.runAllTimers(); 
    expect(callCount).toBe(1);
    
    throttledFunc();
    throttledFunc();
    jest.runAllTimers(); 
    expect(callCount).toBe(2);
  });
});

