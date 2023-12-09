import { useContext } from 'react';
import Dashboard from './Admin/Dashboard/dashboard';
import Info from './Admin/Info/info';
import Login from './Admin/Login/Login';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import List from './Admin/List/List';
import New from './Admin/New/New';
import { hotelColumns, roomColumns, userColumns } from './datatablesource';
import { userInputs } from './formsource';


function App() {
  const ProtectedRoute = ({children}) =>{
    const {user} = useContext(AuthContext);
    if(!user){
      return <Navigate to="/login"/>
    }
    return children;
  }
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route path='login' element={<Login/>}/>

          <Route index 
          element={<ProtectedRoute>
            <Dashboard/>
          </ProtectedRoute>}/>

          <Route path='users' 
          element={<ProtectedRoute>
            <List columns={userColumns}/>
          </ProtectedRoute>}/>

            <Route path='users/new'
            element = {<ProtectedRoute>
              <New inputs={userInputs} title="Add New User" />
            </ProtectedRoute>}
            />
          
          <Route path='hotels' 
          element={<ProtectedRoute>
            <List columns={hotelColumns}/>
          </ProtectedRoute>}/>
          <Route path='rooms' 
          element={<ProtectedRoute>
            <List columns={roomColumns}/>
          </ProtectedRoute>}/>
          

          <Route path='info'
          element={<ProtectedRoute>
            <Info/>
          </ProtectedRoute>}/>
        </Route>
      </Routes>
      
    </div>  
  );
}
export default App;