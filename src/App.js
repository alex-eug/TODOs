import {
  Routes,
  Route,
} from "react-router-dom";
import InputText from "./Component/InputText/InputText";
//import TodoDetail from "./Component/InputText/TodoDetail/TodoDetail"

import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className='todo--title'>Todo list</h1>
      <Routes>
        <Route path="/" element={<InputText />} />
      </Routes>

    </div>
  );
}

export default App;
