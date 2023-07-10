import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Books from './pages/Books.js';
import Update from './pages/Update.js';
import Add from './pages/Add.js';

import './style.css';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Books />}></Route>
          <Route path='/update/:id' element={<Update />}></Route>
          <Route path='/add' element={<Add />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
