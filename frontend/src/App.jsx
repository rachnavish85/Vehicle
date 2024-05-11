import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import './App.css'
import Footer from './components/Footer'
import Signup from './components/Signup'
import Login from './components/Login'
import Browse from './components/Browse'
import Navbar from './components/Navbar'
import { UserProvider } from './UserContext';
import ShowVehicle from './components/ShowVehicle'
import Manage from './components/Manage'
import UserAuth from './UserAuth'
import About from './components/About'
import Services from './components/Services'
import AddVehicle from './components/AddVehicle'
const App = () => {
  return (
    <div>

      <BrowserRouter>
        <UserProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} ></Route>
            <Route path='signup' element={<Signup />} ></Route>
            <Route path='login' element={<Login />} ></Route>
            <Route path='addvehicle' element={<UserAuth><AddVehicle /></UserAuth>} ></Route>
            <Route path='browse' element={<Browse />} ></Route>
            <Route path='showvehicle/:id' element={<ShowVehicle/>} />
            <Route path='manage' element={<UserAuth><Manage/></UserAuth>}/>
            <Route path='about' element={<About />} ></Route>
            <Route path='service' element={<Services />} ></Route>
          
          </Routes>
          <Footer />
        </UserProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
