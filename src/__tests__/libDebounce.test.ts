import { debounce } from '../debounce';
import expect from 'expect';

jest.useFakeTimers();


describe('debounce', () => {
  it('debe ejecutar la función después del retraso', () => {
    const mockFn = jest.fn();
    

    const debouncedFn = debounce(mockFn, 200);

    debouncedFn();
    expect(mockFn).not.toBeCalled();

    // Avanzar el tiempo en 200ms
    jest.advanceTimersByTime(200);

    expect(mockFn).toBeCalled();
  });

  it('debe reiniciar el retraso si se llama nuevamente antes de que expire', () => {
    const mockFn = jest.fn();
    

    const debouncedFn = debounce(mockFn, 200);

    debouncedFn();
    expect(mockFn).not.toBeCalled();

    // Avanzar el tiempo en 100ms
    jest.advanceTimersByTime(100);

    debouncedFn(); // Llamar nuevamente antes de que expire
    expect(mockFn).not.toBeCalled();

    // Avanzar el tiempo en 100ms más para que expire
    jest.advanceTimersByTime(200);

    expect(mockFn).toBeCalled();
  });
});
