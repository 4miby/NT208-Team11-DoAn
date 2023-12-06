import Dashboard from './Admin/Dashboard/dashboard';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Users from './Users/users';
import Info from './Info/info';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<Dashboard/>}/>
          <Route path='dashboard' element={<Dashboard/>}/>
          <Route path='users' element={<Users/>}/>
          <Route path='info' element={<Info/>}/>
        </Route>
      </Routes>
      
    </div>  
  );
}
export default App;