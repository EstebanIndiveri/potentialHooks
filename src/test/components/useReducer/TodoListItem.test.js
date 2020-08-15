import React from 'react';
import { shallow } from 'enzyme';
import TodoListItem from '../../../components/useReducer/TodoListItem';


describe('<TodoListItem/>', () => {
    const wrapper=shallow(<TodoListItem todo/>)
    test('debe de mostrar correctamente', () => {
        //snap
    });

    test('llama function handleDelete', () => {
        //jest.fn();
        //havebeencalledwith
    });

    test('llama functon handleToggle', () => {
        //jest.fn()
        //havebeencalledwith
    });
    test('mostrar el testo correctamente', () => {
        //p content
    })
    

})
