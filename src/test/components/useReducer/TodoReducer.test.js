const { default: TodoReducer } = require("../../../components/useReducer/TodoReducer");
const { demoTodos } = require("../../fixtures/demoTodos");



describe(' pruebas en <TodoReducer/>', () => {
    test('retorna un estado por default', () => {
        const state=TodoReducer(demoTodos,{});
        expect(state).toEqual(demoTodos);
    });
    test('Agregar un TODO', () => {
        const newTodo={
            id:3,
            desc:'test',
            done:false
        };
        const action={
            type:'add',
            payload:newTodo
        };
        const state=TodoReducer(demoTodos,action);
        expect(state.length).toBe(3);
        expect(state).toEqual([...demoTodos,newTodo]);
    });

    test('debe de borrar un TODO', () => {
        const action={
            type:'delete',
            payload:1
        }
        const state=TodoReducer(demoTodos,action);
        expect(state.length).toBe(1);
        expect(state).toEqual([demoTodos[1]])
    })
    test('cambiar hacer un toggle del todo', () => {
        const action={
            type:'toggle',
            payload:1
        }
        const state=TodoReducer(demoTodos,action);
        expect(state[0].done).toBe(true);
        expect(state[1]).toEqual(demoTodos[1]);
    })
        
    
    
})
