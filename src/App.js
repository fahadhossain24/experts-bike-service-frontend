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
import Checkout from './pages/checkout/checkout/Checkout';
import RequireAuth from './pages/login/requireAuth/RequireAuth';
import AddService from './pages/addService/AddService';
import ManageService from './pages/manageService/ManageService';
import { ToastContainer } from 'react-toastify';
import Orders from './pages/orders/Orders';

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
        <Route path='/checkout/:serviceId' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path='/addservice' element={
          <RequireAuth>
            <AddService></AddService>
          </RequireAuth>
        }></Route>
        <Route path='/manage' element={
          <RequireAuth>
            <ManageService></ManageService>
          </RequireAuth>
        }></Route>
        <Route path='/orders' element={
          <RequireAuth>
            <Orders></Orders>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
