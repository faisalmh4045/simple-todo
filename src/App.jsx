import TodoProvider from "./contexts/TodoProvider";
import TodoForm from "./components/TodoForm";
import TodoItems from "./components/TodoItems";

function App() {
    return (
        <TodoProvider>
            <div className="text-center bg-secondary-subtle vh-100 pt-5">
                <h1>Manage Your Todos</h1>
                <TodoForm />
                <TodoItems />
            </div>
        </TodoProvider>
    );
}

export default App;
