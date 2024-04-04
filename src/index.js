import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Login from './Components/Login';
import Signup from './Components/Signup';
// import Contactus from './Components/Contactus';
import NewIn from './Components/NewIn';
import './style.css'
// import ProDetail from './Components/ProDetail';
import Detail from './Components/Detail';
import Choli from './Components/Choli';
import Saree from './Components/Saree';
import Gowns from './Components/Gowns';
import Accessories from './Components/Accessories';
import KurtaSet from './Components/KurtaSet';
import Contact from './Components/Contact';










const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/new" element={<NewIn/>}></Route>
      <Route path="/detail" element={<Detail/>}></Route>
      <Route path="/choli" element={<Choli/>}></Route>
      <Route path="/saree" element={<Saree/>}></Route>
      <Route path="/gowns" element={<Gowns/>}></Route>
      <Route path="/accessories" element={<Accessories/>}></Route>
      <Route path="/kurtas" element={<KurtaSet/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>


    </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);


