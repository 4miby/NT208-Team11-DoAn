import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Infor from './pages/infor/Infor';
import Navbar from './pages/components/Navbar';
import AboutUs from './pages/aboutUs/AboutUs';
import Footer from './pages/components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className='content'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="infor" element={<Infor/>}/>
          <Route path="Aboutus" element={<AboutUs/>}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
