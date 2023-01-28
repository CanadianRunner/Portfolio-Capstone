import './scss/app.scss';
import Navbar from './components/Navbar';
import Home from './components/Main/Home';
import MobileNav from './components/Main/MobileNav';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';

function App() {
  const isMobile = () => {
    if (window.outerWidth > 912) {
      return <Navbar />
    } else {
      return <div className='app__hamburger'><FontAwesomeIcon icon={faBars} size='3x' color='#2C3333'/></div>
    }
  }
  return (
    <div className="app">
      <MobileNav />
      <div className='app__navbar'>
          {isMobile()}
      </div>
      <div>
        <Home />
      </div>
    </div>
  );
}


export default App;

