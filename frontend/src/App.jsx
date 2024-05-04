import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoutes from './components/auth/ProtectedRoutes';
import RegisterForm from './components/auth/RegisterForm';
import LoginForm from './components/auth/LoginForm';
import LogoutForm from './components/auth/LogoutForm';
import './App.css';




function App() {



  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<RegisterForm />} />
          <Route path='/login' element={<ProtectedRoutes />} />
          <Route path='/' element={<ProtectedRoutes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
