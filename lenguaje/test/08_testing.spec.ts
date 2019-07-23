import { factorial } from "./08_testing";

// Suite
fdescribe('Calculo del factorial', () => {
    
    // Espectativas
    fit('4 should be 4', () => {
        let x= 4
        expect(x).toBe(4)
     });

     fit('5 should not be 4', () => {
        let x= 5
        expect(x).not.toBe(4)
     });

     fit('0! should be 1', () => {
        let x= 1
        expect(factorial(x)).toBe(1)
     });

     fit('5! should be 120', () => {
        let x= 1
        expect(factorial(x)).toBe(1)
     });
     fit('5! should be 120', () => {
        let x= 1
        expect(factorial(x)).toBe(1)
     });
     fit('-5! should throw error', () => {
        let x= -5
        expect(() => factorial(x)).toThrow()
     });
     fit('5.5! should throw error', () => {
        let x= 5.5
        expect(() => factorial(x)).toThrowError()
     });

});