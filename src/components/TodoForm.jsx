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

    return (
        <form onSubmit={handleAddTodo}>
            <div className="input-group mb-3 input-group-lg">
                <input
                    type="text"
                    value={todoText}
                    onChange={(e) => setTodoText(e.target.value)}
                    className="form-control"
                    placeholder="add todo here..."
                />
                <button className="btn btn-success" type="submit">
                    Add
                </button>
            </div>
        </form>
    );
};

export default TodoForm;
