import 'bootstrap/dist/css/bootstrap.min.css';
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import AdminDashBoard from './components/admin/adminDashBoard';
import UserDashBoard from './components/user/userDashBoard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/Home';
import OtpSend from './components/OtpSend';
import SubmitOTP from './components/SubmitOTP';
import ForgetPassword from './components/ForgetPassword';
import Profile from './components/admin/profile';
import Sidebar from './components/admin/Sidebar';
import AdminHome from './components/admin/AdminHome';
import UserHome from './components/user/UserHome';
import Categories from './components/admin/Categories';
import FacultyDashBoard from './components/faculty/FacultyDashBoard';
import AddQuestion from './components/faculty/AddQuestion';
import AddCategory from './components/admin/AddCategory';
import AddQuiz from './components/admin/AddQuiz';
import CategoriesForQuiz from './components/admin/CategoriesForQuiz';
import Quizzes from './components/admin/Quizzes';
import Questions from './components/admin/Questions';
import UserQuizComponent from './components/user/UserQuizComponent';
import QuestionPaper from './components/user/QuestionPaper';
import Results from './components/user/Results';
import AskLogin from './components/AskLogin';
import FacultySignIn from './components/faculty/FacultySignIn';
import AdminSignIn from './components/admin/AdminSignIn';
function App() {


  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/who' element={<AskLogin/>}/>
          <Route path='/signin' element={<SignIn />} />
          <Route path='/facultySignIn' element={<FacultySignIn/>}/>
          <Route path='/adminSignIn' element={<AdminSignIn/>}/>
          <Route path='/otpSend' element={<OtpSend />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/admin-dashboard' element={<AdminDashBoard />}>
            <Route path='menu' element={<Sidebar />} />
            <Route path='admin-home' element={<AdminHome />} />
            <Route path='profile' element={<Profile />} />
            <Route path='categories' element={<Categories/>}/>
            <Route path='categoriesForQuiz' element={<CategoriesForQuiz/>}/>
            <Route path='getQuizzes' element={<Quizzes/>}/>
            <Route path='questions/:qid' element={<Questions/>}/>
          </Route>
          <Route path='/admin-dashboard/addCategory' element={<AddCategory/>}/>
          <Route path='/admin-dashboard/addQuiz/:cid' element={<AddQuiz/>}/>
          <Route path='/user-dashboard' element={<UserDashBoard />}>
            <Route path='menu' element={<Sidebar />} />
            <Route path='user-home' element={<UserHome/>} />
            <Route path='profile' element={<Profile />} />
            <Route path='quizzes/:category' element={<UserQuizComponent/>}/>
            {/* <Route path='results/:qId' element={<Results/>}/> */}
          </Route>
          <Route path='/user-dashboard/questionPaper/:qid' element={<QuestionPaper/>}/>
          <Route path='/submitOTP' element={<SubmitOTP />} />
          <Route path='/forgetPassword' element={<ForgetPassword />} />
          <Route path='/faculty-dashboard' element={<FacultyDashBoard/>}/>
          <Route path='/faculty-dashboard/addQuestion/:qid' element={<AddQuestion/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
