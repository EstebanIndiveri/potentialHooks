import React from 'react';
import MultipleCustomHooks from '../../../components/examples/MultipleCustomHooks'
import {shallow} from 'enzyme';
import '@testing-library/jest-dom';
import useFetch from '../../../hooks/useFetch';
import useCounterPage from '../../../hooks/useCounterPage';
jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounterPage');

describe('multiple custom hooks', () => {

    useCounterPage.mockReturnValue({
        counter:10,
        increment:()=>{}
    });

    test('debe mostrar correctamente', () => {
        useFetch.mockReturnValue({
            data:null,
            loading:true,
            error:null
        })
        const wrapper=shallow(<MultipleCustomHooks/>)
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar info', () => {
        useFetch.mockReturnValue({
            data:[{
                author:'fer',
                quote:'hola mundo'
            }],
            loading:false,
            error:null
        });
        const wrapper=shallow(<MultipleCustomHooks/>)

        expect(wrapper.find('.alert').exists()).toBe(false);
        expect(wrapper.find('.mb-0').text().trim()).toBe('hola mundo');
        expect(wrapper.find('footer').text().trim()).toBe('fer');


    })
    
    
    
})
