import Dashboard from './Admin/Dashboard/dashboard';
import './App.css';

import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
      </Routes>
      
    </div>  
  );
}
export default App;