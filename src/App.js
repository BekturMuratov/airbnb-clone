import React from 'react';
import './App.css';
import Home from './pages/Home';
import Header from './components/Header';


function App() {
  return (
    <div className="app">
    <Header />
    <Home/>
    </div>
  );
}

export default App;
