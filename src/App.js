import './App.css';
import Home from './Components/AppBar/Home';
import Header from './Components/AppBar/MultilevelDropDown/Header';
import NavBar from './Components/AppBar/NavBar';
import TopBar from './Components/AppBar/TopBar';
import ExampleCarousel from './Components/gptCarosel';

function App() {
  return (
    <div className="">
      <TopBar />
      <NavBar />
      <Header />
      <ExampleCarousel />
      <Home />
    </div>
  );
}

export default App;
