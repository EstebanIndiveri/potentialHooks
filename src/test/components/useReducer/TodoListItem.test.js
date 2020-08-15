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
        wrapper.find('button').simulate('click');
        expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);
    });

    test('llama functon handleToggle', () => {
        //jest.fn()
        //havebeencalledwith
        wrapper.find('p').simulate('click');
        expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id);
    });
    test('mostrar el texto correctamente', () => {
        //p content
        const p=wrapper.find('p');
        expect(p.text().trim()).toBe(`${demoTodos[0].id + 1 }- ${demoTodos[0].desc}`)
    });

    test('debe tener clase complete si todo.done=true', () => {
        const todo=demoTodos[0];
        todo.done=true
        const wrapper=shallow(<TodoListItem 
            todo={todo} 
            index={todo.id} 
            handleDelete={handleDelete} 
            handleToggle={handleToggle}
            />)
            expect(wrapper.find('p').hasClass('complete')).toBe(true);
    })
    
    

})
