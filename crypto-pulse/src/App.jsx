import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './components/Header';
import './App.css'
import Homepage from './pages/Homepage';
import Coinpage from './pages/Coinpage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <header/>
        <Route path='/' Component={Homepage} exact />
        <Route path='/coin/id' Component={Coinpage} />
      </div>
    </BrowserRouter>
  )
}

export default App
