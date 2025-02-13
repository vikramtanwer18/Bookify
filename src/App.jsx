
import './App.css'
// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'bootstrap/dist/css/bootstrap.min.css'; 

import { Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import MyNavbar from './components/Navbar';
import MyFooter from './components/Footer';
import ListPage from './pages/List'
import TestPage from './pages/Test';
function App() {
 

  return (
   <div>
    <MyNavbar/>
   
   <Routes>
    <Route path='/' element={<Home/>} > </Route>
    <Route path='/signup' element={<Signup/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='book/listing' element={<ListPage/>}/>
    <Route path = '/test' element = {<TestPage/>}/>
   </Routes>
    <MyFooter/>
   </div>
  )
}

export default App
