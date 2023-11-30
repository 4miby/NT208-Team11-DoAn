import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Infor from './pages/infor/Infor';
import AboutUs from './pages/aboutUs/AboutUs';
import List from './pages/List/List';
function App() {
  return (
    <div className="App">
      <div className='content'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/infor/:id" element={<Infor/>}/>
          <Route path="/Aboutus" element={<AboutUs/>}/>
          <Route path='/hotels' element={<List/>}/>
          <Route path='/hotels/:id' element={<List/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
