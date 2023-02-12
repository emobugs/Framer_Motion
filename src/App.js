import "./App.css";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="App">
      <motion.form
      animate={{x:0}}
      initial={{x:-800}}
      transition={{duration: 0.8}}
      >
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
      </motion.form>
    </div>
  );
}

export default App;
