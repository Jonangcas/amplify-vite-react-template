import { useEffect, useState } from "react";

type Todo = {
  id: string;
  content: string | null;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  // Cargar algunos todos de ejemplo al iniciar (simula datos iniciales)
  useEffect(() => {
    setTodos([
      { id: "1", content: "Aprender React sin Amplify" },
      { id: "2", content: "Entregar práctica en Vocareum" },
    ]);
  }, []);

  function createTodo() {
    const content = window.prompt("Todo content");
    if (!content) return;

    const newTodo: Todo = {
      id: crypto.randomUUID(),
      content,
    };

    setTodos((prev) => [...prev, newTodo]);
  }

  return (
    <main>
      <h1>My todos (sin Amplify)</h1>
      <button onClick={createTodo}>+ new</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.content}</li>
        ))}
      </ul>
      <div>
        🥳 App funcionando sólo con React y estado local.
        <br />
        Ya no usa AWS Amplify ni ningún backend.
      </div>
    </main>
  );
}

export default App;
