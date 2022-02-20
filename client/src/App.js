import './App.css';
import Home from './components/Home';
import { Routes, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
