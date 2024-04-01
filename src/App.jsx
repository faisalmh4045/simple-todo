import TodoProvider from "./contexts/TodoProvider";
import TodoForm from "./components/TodoForm";
import TodoItems from "./components/TodoItems";

function App() {
    return (
        <TodoProvider>
            <div className="container text-center pt-5">
                <div className="col-lg-7 mx-auto">
                    <h1 className="mb-4 fs-2">What would you like to do?</h1>
                    <TodoForm />
                    <TodoItems />
                </div>
            </div>
        </TodoProvider>
    );
}

export default App;
