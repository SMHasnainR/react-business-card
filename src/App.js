import logo from './logo.svg';
import About from './components/About';
import Interests from './components/Interests';
import Footer from './components/Footer';
import Info from './components/Info'
import './App.css';

function App() {
  return (
    <div className='card'>
      <Info />
      <div className="card-body">
        <About />
        <Interests />
      </div>
      <Footer />
    </div>
  );
}

export default App;
