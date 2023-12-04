import 'bootstrap/dist/css/bootstrap.min.css';
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import AdminDashBoard from './components/admin/adminDashBoard';
import UserDashBoard from './components/user/userDashBoard';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/Home';

function App() {

 
  return (
    <>
     <BrowserRouter>
     <ToastContainer/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/admin-dashboard' element={<AdminDashBoard/>}/>
        <Route path='/user-dashboard' element={<UserDashBoard/>}/>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
