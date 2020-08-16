import React from 'react';
import { shallow } from 'enzyme';
import Tododd from '../../../components/useReducer/TodoAdd';
import '@testing-library/jest-dom';
    describe('<Tododd/>', () => {
        const handleAddTodo=jest.fn();
        const wrapper=shallow(
            <Tododd
            handleAddTodo={handleAddTodo}
            />
            )
        test('match con snap', () => {
           expect(wrapper).toMatchSnapshot();
        });

        test('No debe de llamar handleAddTodo', () => {
            const formSumbit=wrapper.find('form').prop('onSubmit');
            formSumbit({preventDefault(){}});
            expect(handleAddTodo).toHaveBeenCalledTimes(0);
        });
        test('llama function handleAddTodo', () => {
            //argumento
            const value='apdender react';
            wrapper.find('input').simulate('change',{
                target:{
                    value,
                    name:'description'
                }
            });
            const formSumbit=wrapper.find('form').prop('onSubmit');
            formSumbit({preventDefault(){}});
            expect(handleAddTodo).toHaveBeenCalledTimes(1);
            expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
            expect(handleAddTodo).toHaveBeenCalledWith({
                id:expect.any(Number),
                desc:value,
                done:false,
            }); 
            expect(wrapper.find('input').prop('value')).toBe('');
        });
    })
    