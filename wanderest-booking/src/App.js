import './App.css';
import { Routes,Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import Infor from './pages/infor/Infor';
import AboutUs from './pages/aboutUs/AboutUs';
import List from './pages/List/List';
import Hotel from './pages/Hotel/Hotel';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register'
function App() {
  return (
    <div className="App">
      <div className='content'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/infor/:id" element={<Infor/>}/>
            <Route path="/Aboutus" element={<AboutUs/>}/>
            <Route path='/hotels' element={<List/>}/>
            <Route path='/login'element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/hotels/:id' element={<Hotel/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
