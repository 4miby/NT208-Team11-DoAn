import Dashboard from './Admin/Dashboard/dashboard';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Users from './Users/users';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<Dashboard/>}/>
          <Route path='dashboard' element={<Dashboard/>}/>
          <Route path='users' element={<Users/>}/>
      
        </Route>
      </Routes>
      
    </div>  
  );
}
export default App;