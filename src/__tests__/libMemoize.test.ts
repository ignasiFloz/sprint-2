import { memoize }  from '../memoize';



test('memoize should cache results and count calls', () => {
    // Simulamos la función original con jest.fn()
    const myFunction = jest.fn((arg) => arg * 2);
    // Creamos la función memoizada
    const memoizedFunction = memoize(myFunction);
  
    // Llamada inicial
    const result1 = memoizedFunction(5);
    expect(result1).toBe(10);
    expect(myFunction).toHaveBeenCalledWith(5);
    
  
    // Verifica cuántas veces se ha llamado la función simulada
    expect(myFunction).toBeCalledTimes(1);
  
    // Llamada repetida con el mismo argumento
    const result2 = memoizedFunction(5);
    expect(result2).toBe(10);
    // La función original no se debe llamar nuevamente
    expect(myFunction).toBeCalledTimes(1); // El recuento debe seguir siendo 1
  
    // Nueva llamada con argumento diferente
    const result3 = memoizedFunction(10);
    expect(result3).toBe(20);
    expect(myFunction).toHaveBeenCalledWith(10);
    // Verifica cuántas veces se ha llamado la función simulada
    expect(myFunction).toBeCalledTimes(2); // Ahora debería ser 2
  });