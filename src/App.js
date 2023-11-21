import logo from './logo.svg';
import './App.css';
import Carousel from './components/Carousel';
import Facilities from './components/Data'

function App() {
  return (
    <div className="App">
      <div id = "topContent">
        <h2>Facilities Listings</h2>
        <h3>
          List of Facilities we have
        </h3>
        </div>

        <Carousel images = {Facilities}/>
    </div>
  );
}

export default App;
