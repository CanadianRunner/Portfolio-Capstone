import './scss/app.scss';
import Navbar from './components/Navbar';
import Home from './components/Main/Home';

function App() {
  window.addEventListener('scroll', triggerAnimationOnScroll)
  // Component methods
  function triggerAnimationOnScroll() {
    // const element = document.getElementsByClassName('about__content');
    // const windowHeight = window.innerHeight;
    // const elementTop = element.getBoundingClientRect().top;
    // const elementVisible = 150;
    // if (elementTop < windowHeight - elementVisible) {
    //   element.classList.add('');
    // } else {
    //   element.classList.remove('');
    // }
  }

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

