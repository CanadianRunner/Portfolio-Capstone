import React from 'react';
import './scss/app.scss';
import Navbar from './components/Navbar';
import Home from './components/Main/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function App() {
  return (
    <div className="app">
      <div className='app__navbar'>
        <Navbar />
      </div>
      <ToastContainer />
      <Home />
    </div>
  );
}

export default App;
