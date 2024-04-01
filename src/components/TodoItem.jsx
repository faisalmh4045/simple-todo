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
            <div className="input-group mb-3 input-group-lg shadow-sm rounded-3 border">
                <div className="input-group-text border-0">
                    <input
                        className="form-check-input mt-0"
                        type="checkbox"
                        checked={todo.completed}
                        onChange={handleToggleCompleted}
                    />
                </div>
                <input
                    type="text"
                    className={
                        todo.completed
                            ? "form-control border-0 text-decoration-line-through bg-light"
                            : "form-control border-0"
                    }
                    value={todoMsg}
                    onChange={(e) => setTodoMsg(e.target.value)}
                    readOnly={!isTodoEditable}
                />

                {/* update todo button */}
                <button
                    onClick={() => handleEditTodo()}
                    disabled={todo.completed}
                    className="btn btn-light border-0"
                    type="submit"
                >
                    {isTodoEditable ? (
                        <i className="text-warning fa-regular fa-folder-closed"></i>
                    ) : (
                        <i className="text-warning fa-regular fa-pen-to-square"></i>
                    )}
                </button>

                {/* delete todo button */}
                <button
                    onClick={handleDeleteTodo}
                    className="btn btn-light border-0"
                    type="submit"
                >
                    <i className="fa-regular fa-trash-can text-danger"></i>
                </button>
            </div>
        </div>
    );
};

export default TodoItem;
