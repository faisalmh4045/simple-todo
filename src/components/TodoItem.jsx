import { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

const TodoItem = ({ todo }) => {
    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [todoMsg, setTodoMsg] = useState(todo.todo);
    const { toggleComplete, updateTodo, deleteTodo } = useTodo();

    const handleToggleCompleted = () => {
        toggleComplete(todo.id);
    };

    const handleEditTodo = () => {
        if (isTodoEditable) updateTodo({ ...todo, todo: todoMsg });
        setIsTodoEditable(!isTodoEditable);
    };

    const handleDeleteTodo = () => {
        deleteTodo(todo.id);
    };

    return (
        <div>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={handleToggleCompleted}
            />
            <input
                type="text"
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            <button onClick={() => handleEditTodo()} disabled={todo.completed}>
                {isTodoEditable ? "save" : "edit"}
            </button>
            <button onClick={handleDeleteTodo}>delete</button>
        </div>
    );
};

export default TodoItem;
