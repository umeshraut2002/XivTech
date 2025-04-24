import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './components/Header';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div>
        <header/>
        <Route path='' Component={} />
      </div>
    </BrowserRouter>
  )
}

export default App
