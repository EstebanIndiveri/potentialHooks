import React, { useReducer } from 'react';
import './TodoApp.css'
import TodoReducer from './TodoReducer';

const initialState=[{
    id:new Date().getTime(),
    desc:'Terminar proyecto React',
    done:false
}]

const TodoApp = () => {

    const [todos, dispatch] = useReducer(TodoReducer, initialState);
    console.log(todos);
    return ( 
        <div>
            <h1>Todo App</h1>
            <hr/>

            <ul>
                <li>hola</li>
                <li>Mundo</li>
                <li>Hola de nuevo</li>
            </ul>
        </div>
     );
}
 
export default TodoApp;