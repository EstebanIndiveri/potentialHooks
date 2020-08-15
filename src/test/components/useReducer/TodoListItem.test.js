import React from 'react';
import { shallow } from 'enzyme';
import TodoListItem from '../../../components/useReducer/TodoListItem';
import { demoTodos } from '../../fixtures/demoTodos';
import '@testing-library/jest-dom';

describe('<TodoListItem/>', () => {
    const handleDelete=jest.fn();
    const handleToggle=jest.fn();
    const wrapper=shallow(<TodoListItem 
        todo={demoTodos[0]} 
        index={demoTodos[0].id} 
        handleDelete={handleDelete} 
        handleToggle={handleToggle}
        />)
    test('debe de mostrar correctamente', () => {
        //snap
        expect(wrapper).toMatchSnapshot();
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
