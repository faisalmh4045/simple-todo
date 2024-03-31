import { useEffect, useState } from "react";
import { TodoContext } from "./TodoContext";

const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);

    const addTodo = (newTodo) => {
        setTodos([newTodo, ...todos]);
    };

    const updateTodo = (todo) => {
        setTodos((prev) =>
            prev.map((prevTodo) => (prevTodo.id === todo.id ? todo : prevTodo))
        );
    };

    const deleteTodo = (id) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    };

    const toggleComplete = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem("todos"));
        if (todos && todos.length > 0) setTodos(todos);
    }, []);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <TodoContext.Provider
            value={{
                todos,
                addTodo,
                updateTodo,
                deleteTodo,
                toggleComplete,
            }}
        >
            {children}
        </TodoContext.Provider>
    );
};

export default TodoProvider;
