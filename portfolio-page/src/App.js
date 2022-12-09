import './scss/app.scss';
import Navbar from './components/Navbar';
import Home from './components/Main/Home';
import Skills from './components/Main/Skills'


function App() {
  return (
    <div className="app">
      <div className='app__navbar'>
        <Navbar />
      </div>
      <Home />
      <Skills />
    </div>
  );
}

export default App;

