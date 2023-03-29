import './App.css';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Attractions from './components/Attractions/Attractions';
import Venues from './components/Venues/Venues';
import Events from './components/Events/Events';
import SearchAttractions from './components/Attractions/SearchAttractions';
import SearchEvents from './components/Events/SearchEvents';
import SearchVenues from './components/Venues/SearchVenues';
import Home from './components/Home';

function App() {
   
  return (
    <Router>
    <div className='App'>
      <header className='App-header'>
        {/* <img src={logo} className='App-logo' alt='logo' /> */}
        <h1 className='App-title'>
          Welcome to the React.js TV Maze API Example
        </h1>
        <Link className='showlink' to='/'>
          Home
        </Link>
        <Link className='showlink' to='/events/page/1'>
          Events
        </Link>
        <Link className='showlink' to='/attractions/page/1'>
          Attractions
        </Link>
        <Link className='showlink' to='/venues/page/1'>
          Venues
        </Link>
      </header>
      <br />
      <br />
      <div className='App-body'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/events/page/:id' element={<Events />} />
          <Route path='/events/:id' element={<SearchEvents />} />
          <Route path='/attractions/page/:id' element={<Attractions />} />
          <Route path='/attractions/:id' element={<SearchAttractions />} />
          <Route path='/venues/page/:id' element={<Venues />} />
          <Route path='/venues/:id' element={<SearchVenues />} />
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
