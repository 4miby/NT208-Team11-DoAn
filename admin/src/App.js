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
import NewHotel from './Admin/NewHotel/NewHotel';
import NewRoom from './Admin/newRoom/NewRoom';
import HotelInfo from './Admin/HotelInfo/HotelInfo';
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
          <Route path='users/:id'
            element = {<ProtectedRoute>
              <Info inputs={userInputs}/>
            </ProtectedRoute>}
          />

         
          
          <Route path='hotels' 
          element={<ProtectedRoute>
            <List columns={hotelColumns}/>
          </ProtectedRoute>}/>
          <Route path='hotels/new'
            element = {<ProtectedRoute>
              <NewHotel/>
            </ProtectedRoute>}
            />
            <Route path='hotels/:id'
            element = {<ProtectedRoute>
              <HotelInfo></HotelInfo>
            </ProtectedRoute>}
            />

          <Route path='rooms' 
          element={<ProtectedRoute>
            <List columns={roomColumns}/>
          </ProtectedRoute>}/>
          <Route path='rooms/new'
            element = {<ProtectedRoute>
              <NewRoom/>
            </ProtectedRoute>}
            />
            <Route path='rooms/:id'
            element = {<ProtectedRoute>
              <HotelInfo></HotelInfo>
            </ProtectedRoute>}
            />
        </Route>
      </Routes>
      
    </div>  
  );
}
export default App;