import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SignIn from './pages/Signin';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import About from './pages/About';
import Home from './pages/Home';




function App(  ) {
  return<BrowserRouter>
<Routes>
  <Route path='/' element={<Home />}></Route>
  <Route path='/sign-in' element={<SignIn />}></Route>
  <Route path='/sign-out' element={<SignUp/>}></Route>

  <Route path='/profile' element={<Profile />}></Route>
  <Route path='/about' element={<About/>}></Route>
</Routes>
  </BrowserRouter>
}
export default App;