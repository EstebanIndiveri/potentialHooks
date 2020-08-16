import React from 'react';
import { mount } from 'enzyme';
import AppRouter from '../../../components/useContext.js/AppRouter';
import { UserContext } from '../../../components/useContext.js/UserContext';

describe('pruebas en AppRouter/>', () => {
    
    const user={
        name:'fernan',
        email:'gmai.com'
    }
    const setUser=jest.fn();
    const wrapper=mount(
        <UserContext.Provider value={{user,setUser}}>
            <AppRouter/>
        </UserContext.Provider>
    );
    test('match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
})
