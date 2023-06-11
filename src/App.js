import './Assets/style/App.css'
import {Flight} from './Flight.js'
import Home from './Home'
import HeroLogo from './Assets/icon/hero-logo.png'
import { Route, Routes, Link} from 'react-router-dom'
import {flightData} from './prac.js'


function App() {
  return (
<>
<nav className='navBar'>
  <img src={HeroLogo} alt="aircraft img" className='flyLeft'/>
  <Link to='/'>Home</Link>
  <Link to='/flight'>Check Flights</Link>

</nav>


<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/flight'  element={<Flight />} />

</Routes>


</>
  );
}

export default App;
