import logo from './logo.svg';
import './App.css';
import Navbar from './components/atoms/Navbar';
import Hero from './components/Sections/Hero';
import Features from './components/Sections/Features';
import Steps from './components/Sections/Steps';

function App() {
  return (
    <div className="bg-white">
    <Navbar/>
    <Hero/>
    <Steps/>
    <Features/>
    </div>


  );
}

export default App;
