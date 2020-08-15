import React from 'react';
import {shallow} from 'enzyme';
import '@testing-library/jest-dom';
import RealExampleRef from '../../../components/useRef/RealExampleRef'

describe('pruebas en <RealExampleRef/>', () => {
    const wrapper=shallow(<RealExampleRef/>)
    test('muestra correctamente', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);

    });
    test('muestra el componente <MultipleCustomHooks/>', () => {
        wrapper.find('button').simulate('click');
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);

    });
})
