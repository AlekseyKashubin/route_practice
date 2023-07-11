import './App.css';
import Say from './components/Say';

import { useState } from 'react';

import { Route, Routes, Link, useNavigate } from 'react-router-dom';

function App() {

  return (
    <div className="App">
    <h1>ROUTING PRACTICE</h1>
    <hr/>



      <Routes>
        <Route path='/home' element={<h1>Welcome</h1>} ></Route>
        <Route path='/:word' element={<Say/>}></Route>
        <Route path='/:word/:color/:backgroundColor' element={<Say/>} ></Route>
        



      </Routes>



    </div>
  );
}

export default App;
