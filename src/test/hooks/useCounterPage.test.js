import useCounterPage from '../../hooks/useCounterPage';
import { renderHook,act } from "@testing-library/react-hooks";
import '@testing-library/jest-dom';

describe('pruebas en useCounterPage', () => {
    test('debe de retornar valores por defecto', () => {
        const {result}=renderHook(()=>useCounterPage());
        expect(result.current.counter).toBe(10);
        expect(typeof result.current.decrement).toBe('function');
        expect(typeof result.current.increment).toBe('function');
        expect(typeof result.current.reset).toBe('function');
    });

    test('counter en 100', () => {
        const {result}=renderHook(()=>useCounterPage(100));
        expect(result.current.counter).toBe(100);
    });
    test('incrementar el counter en 1', () => {
        const {result}=renderHook(()=>useCounterPage(100));
        const{increment}=result.current;
        act(()=>{
            increment();
        });
        const{ counter}=result.current;
        expect(counter).toBe(101);
    });
    test('decrementar el counter en 1', () => {
        const {result}=renderHook(()=>useCounterPage(100));
        const{decrement}=result.current;
        act(()=>{
            decrement();
        });
        const{ counter}=result.current;
        expect(counter).toBe(99);
    });
    test('reset del counter a 100', () => {
        const {result}=renderHook(()=>useCounterPage(100));
        const{increment,reset}=result.current;
        act(()=>{
            increment();
            reset();
        });
        const{ counter}=result.current;
        expect(counter).toBe(100);
    });
    
    
})
