import { useTodo } from "../contexts/TodoContext";
import TodoItem from "./TodoItem";

const TodoItems = () => {
    const { todos } = useTodo();
    return (
        <div>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </div>
    );
};

export default TodoItems;
