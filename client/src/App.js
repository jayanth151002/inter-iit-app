import './App.css';
import Home from './components/Home';
import Add from './components/Add';
import View from './components/View';
import Delete from './components/Delete';
import { Routes, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<Add />} />
        <Route path='/view' element={<View />} />
        <Route path='/delete' element={<Delete />} />
      </Routes>
    </div>
  );
}

export default App;
