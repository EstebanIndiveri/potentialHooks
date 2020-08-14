import React from 'react';
import '@testing-library/jest-dom';
import useForm from '../../hooks/useForm';
const { renderHook,act } = require("@testing-library/react-hooks");

describe('pruebas useForm', () => {
    const initalForm={
        name:'fernand',
        email:'ferna@gmail.com'
    };

    /**
     * 
     */
    test('regresa un formulario por default', () => {
        const {result}=renderHook(()=>useForm(initalForm));
        const [formValues,handleInputChange,reset]=result.current;
        expect(formValues).toEqual(initalForm);
        expect(typeof handleInputChange).toBe('function')
        expect(typeof reset).toBe('function')

    });

    test('camiar valor del form (name)', () => {
        const {result}=renderHook(()=>useForm(initalForm));
        const [ , handleInputChange]=result.current;
        act(()=>{
            handleInputChange({
                target:{
                    name:'name',
                    value:'mellisa'
                }
            });
        });
        const [formValues]=result.current;
        expect(formValues).toEqual({...initalForm,name:'mellisa'});

    });
    
    test('debe de reestablecer el form con RESET()', () => {
        const {result}=renderHook(()=>useForm(initalForm));
        const [ , handleInputChange, reset]=result.current;
        act(()=>{
            handleInputChange({
                target:{
                    name:'name',
                    value:'mellisa'
                }
            });
            reset();
        });
        const [formValues]=result.current;
        expect(formValues).toEqual(initalForm);

    });
    
    

})
