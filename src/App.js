import './App.css';
import Home from './Components/AppBar/Home';
import Multilevel from './Components/AppBar/MultilevelDropDown/Multilevel';
import NavBar from './Components/AppBar/NavBar';
import TopBar from './Components/AppBar/TopBar';
import ExampleCarousel from './Components/gptCarosel';

function App() {
  return (
    <div className="">
      <TopBar />
      <Multilevel />
      <NavBar />
      <ExampleCarousel />
      <Home />
    </div>
  );
}

export default App;
