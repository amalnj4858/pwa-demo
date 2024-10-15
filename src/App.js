import React from 'react';
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PushNotif from './Components/PushNotif/PushNotif';
import NavBar from './Components/NavBar/NavBar';


function App() {
  return (
    <BrowserRouter>
    <NavBar></NavBar>
    <div className="App">
      <Routes>
          <Route path='/notif' element={<PushNotif/>}></Route>
          <Route path='/' element={<HomePage/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
