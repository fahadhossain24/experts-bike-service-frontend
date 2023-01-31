import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/home/Home';
import About from './pages/about/About';
import Header from './pages/shared/header/Header';
import Footer from './pages/shared/footer/Footer';
import Login from './pages/login/login/Login'
import NotFound from './pages/shared/notFound/NotFound';
import ServiceDetail from './pages/home/serviceDetail/ServiceDetail';
import Register from './pages/login/register/Register';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes> 
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
