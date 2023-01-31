import Header from './components/header';
import Footer from './components/footer';
import Comment from './components/Comment.js';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// Import Pages
import Home from './pages/Home';
import About from './pages/About';
//import Timer from './components/Timer';
function App() {
 // const ele = <h1 className='asad'>I am H1</h1>;
  return (
    <Router>
      <div className="App">
        <div className='site-header'>
          <Header name="asad" data="header-data" />
          { 
            //console.log(ele.props) 
          }
        </div>
        <div className='body'>
          <Routes>
            <Route path='/React-App' element={<Home />}></Route>
            <Route path='/React-App/about' element={<About />}></Route>
          </Routes>
          
          
          <Comment/>
        </div>
        <div className='site-footer'>
          <Footer />
        </div>
      </div>
    </Router>

  );
}

export default App;
