import React, { useReducer, useEffect } from 'react';
import './TodoApp.css'
import TodoReducer from './TodoReducer';
import useForm from '../../hooks/useForm';
import TodoList from './TodoList';

const init=()=>{
    return JSON.parse(localStorage.getItem('todos')) || [];
}

const TodoApp = () => {
    const [todos, dispatch] = useReducer(TodoReducer,[],init);
    const [{description},handleInputChange,reset] = useForm({
        description:''
    })

    useEffect(()=>{
        localStorage.setItem('todos',JSON.stringify(todos));
    },[todos])

    const handleDelete=(id)=>{
        const action={
            type:'delete',
            payload:id
        }
        dispatch(action);
    }
    const handleToggle=(todoId)=>{
        dispatch({
            type:'toggle',
            payload:todoId
        })
    }
    const handleSubmit=e=>{
        e.preventDefault();
        if(description.trim().length<=1){
            return;
        }
        const newTodo={
            id:new Date().getTime(),
            desc:description,
            done:false
        }
        const action={
            type:'add',
            payload:newTodo
        }
        dispatch(action);
        reset();
    }

    return ( 
        <div>
            <h1>Todo App ({todos.length})</h1>
            <hr/>

            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} handleDelete={handleDelete} handleToggle={handleToggle}/>
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr/>
                    <form
                    onSubmit={handleSubmit}
                    >
                        <input
                        type="text"
                        name="description"
                        placeholder="Comenzar"
                        autoComplete="off"
                        className="form-control"
                        onChange={handleInputChange}
                        value={description}
                        />
                        <button
                        type="submit"
                        className="btn btn-outline-secondary mt-1 btn-block"
                        >
                            Agregar
                        </button>
                    </form>
                </div>
            </div>
       
        </div>
     );
}
 
export default TodoApp;