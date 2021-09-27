import "./App.css";

function App() {
  return (
    <div className="App">
      <form>
        <h1>Create An Account</h1>
        <label>
          Email:
          <input name="email" type="email" required />
        </label>
        <label>
          Password:
          <input name="password" type="password" required />
        </label>
        <button>Sign Up!</button>
      </form>
    </div>
  );
}

export default App;
