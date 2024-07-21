import "./App.css";
import Chat from "./components/Chat";

function App() {
  return (
    <main className="App">
      <div className="container">
        <div className="header">
          <h1 className="header-title">ChatGPT</h1>
          <p className="header-subtitle">Asistente de chat de IA</p>
        </div>
        <Chat />
      </div>
    </main>
  );
}

export default App;
