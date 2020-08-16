import React from 'react';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { UserContext } from '../../../components/useContext.js/UserContext';
const { default: HomeScreen } = require("../../../components/useContext.js/HomeScreen");

    describe('pruebas con <HomeScreen/>', () => {
        const user={
            name:'fernan',
            email:'gmai.com'
        }
        const wrapper=mount(
            <UserContext.Provider value={{user}}>
                <HomeScreen/>
            </UserContext.Provider>
        )
        test('should ', () => {
            expect(wrapper).toMatchSnapshot();
        })
        
    });
    