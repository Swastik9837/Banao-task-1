import './App.css';
import TopBar from '../components/TopBar'
import Home from '../components/Home';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import LocationState from '../context/LocationState';

function App() {
  return (
    <>
      <BrowserRouter>
        <LocationState>
          <TopBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/logged-in' element={<Home />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </LocationState>
      </BrowserRouter>
    </>
  );
}

export default App;
