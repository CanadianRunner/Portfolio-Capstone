import './scss/app.scss';
import Navbar from './components/Navbar';
import Home from './components/Main/Home';


function App() {
  return (
    <div className="app">
      <div className='app__navbar'>
        <Navbar />
      </div>
      <Home />
    </div>
  );
}

export default App;

