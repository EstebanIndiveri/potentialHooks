import useCounterPage from '../../hooks/useCounterPage';
import { renderHook } from "@testing-library/react-hooks";
import '@testing-library/jest-dom';

describe('pruebas en useCounterPage', () => {
    test('debe de retornar valores por defecto', () => {
        const {result}=renderHook(()=>useCounterPage());
        console.log(result.current);
        expect(result.current.counter).toBe(10);
        expect(typeof result.current.decrement).toBe('function');
        expect(typeof result.current.increment).toBe('function');
        expect(typeof result.current.reset).toBe('function');
    });
    
})
