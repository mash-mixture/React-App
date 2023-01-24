import Header from './components/header';
import Footer from './components/footer';
import './App.css';
import {BrowserRouter as Router , Route, Routes} from 'react-router-dom'
// Import Pages
import Home from './pages/Home';
import About from './pages/About';
function App() {
  return (
    <Router>
      <div className="App">
        <div className='site-header'>
        <Header/>
        </div>
        <div className='body'>
        <Routes>
          <Route path='/React-App' element={<Home/>}></Route>
          <Route path='/React-App/about' element={<About/>}></Route>
        </Routes>
        </div>
        <div className='site-footer'>
        <Footer/>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
