import { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

const TodoForm = () => {
    const [todoText, setTodoText] = useState("");
    const { addTodo } = useTodo();

    const handleAddTodo = (e) => {
        e.preventDefault();
        if (todoText.trim() !== "") {
            const newTodo = {
                id: Date.now(),
                todo: todoText.trim(),
                completed: false,
            };
            addTodo(newTodo);
            setTodoText("");
        }
    };
    console.log("form render...");

    return (
        <form onSubmit={handleAddTodo}>
            <input
                type="text"
                placeholder="Write Todo..."
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default TodoForm;
