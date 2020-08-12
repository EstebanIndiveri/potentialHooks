import React, { useReducer } from 'react';
import './TodoApp.css'
import TodoReducer from './TodoReducer';
import useForm from '../../hooks/useForm';

// const initialState=[{
//     id:new Date().getTime(),
//     desc:'Terminar proyecto React',
//     done:false
// }]

const init=()=>{
    return[{
        id:new Date().getTime(),
        desc:'Terminar proyecto React',
        done:false
    }];
}

const TodoApp = () => {

    const [todos, dispatch] = useReducer(TodoReducer,[],init);

    const [{description},handleInputChange,reset] = useForm({
        description:''
    })

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
                        <ul className="list-group list-group-flush">
                        {todos.map((todo,index)=>(
                            <li
                            key={todo.id}
                            className="list-group-item"
                            >
                                <p className="text-center">{index + 1 }- {todo.desc}</p>
                                <button
                                className="btn btn-danger"
                                >
                                    Borrar
                                </button>
                            </li>
                        ))}
                    </ul>
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