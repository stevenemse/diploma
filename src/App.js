import './styles/App.css';
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
import SignIn from './components/auth/SignIn';
import Dashboard from './pages/Dashboard';
import { useEffect, useState } from 'react';
//import SignUp from './components/auth/SignUp';
//import AuthDetails from './components/auth/AuthDetails';
//import addUser from './backend/functions/addUser';
//import UserForm from '../src/backend/functions/Users/addUser';


function App() {
  const [auth,setAuth] = useState(false)
  const reload=localStorage.getItem("auth")
  useEffect(( ) => {
    const auths= localStorage.getItem("auth")
    if (auths === "true"){
      setAuth(true)
    }
  }, [reload]) 
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path='signin' element={<SignIn/>}/> 
        <Route path='' element={auth? <Dashboard/> : <Navigate to = "signin"/>}/> 
      </Routes>    
     </BrowserRouter>
    </div>
  );
}

export default App;
