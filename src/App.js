import './App.css';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import AuthDetails from './components/auth/AuthDetails';
//import addUser from './backend/functions/addUser';
import UserForm from './backend/functions/addUser';

function App() {
  return (
    <div className="App">
      <SignIn />
      <SignUp />
      <AuthDetails />
      <UserForm/>
    </div>
  );
}

export default App;
