import 'bootstrap/dist/css/bootstrap.min.css';
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
     <BrowserRouter>
     <ToastContainer/>
      <Routes>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
