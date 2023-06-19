import {Flight} from './components/Flight'
import {Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/NavBar'
import About from './components/About'


function App() {
  return (
      <>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/flight'  element={<Flight />} />
          <Route path='/about'  element={<About />} />

        </Routes>

      </>

  );
}

export default App;
