import React from 'react';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import LoginScreen from '../../../components/useContext.js/LoginScreen';
import { UserContext } from '../../../components/useContext.js/UserContext';

    describe('<LoginScreen/>', () => {
        const user={
            name:'fernan',
            email:'gmai.com'
        }
        const setUser=jest.fn();
        const wrapper=mount(
            <UserContext.Provider value={{user,setUser}}>
                <LoginScreen/>
            </UserContext.Provider>
        );
        
        test('matchsnapshot', () => {
            expect(wrapper).toMatchSnapshot();
        })
        test('ejecutar argunmento esperado', () => {
            wrapper.find('button').prop('onClick')();
            expect(setUser).toHaveBeenCalledWith({
                id:123,
                name:"algo"
            });
        });
        
        
    })
    