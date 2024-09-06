import React, { useEffect, useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/><Home/><Footer/></>,
    },
    {
      path: "/about",
      element: <><Navbar/><About/><Footer/></>,
    },
    {
      path: "/contact",
      element: <><Navbar/><Contact/><Footer/></>,
    },
    
  ]);
  // const [an, setAn] = useState(true)

  // useEffect(() => {
    

    
  // }, [])
  // const handleclose=()=>{
  //   setAn(false)
  // }
  return (
    <>
    <RouterProvider router={router} />
    {/* {an && <div>
      <div id="announcement-modal" className="modal">
        <div className="modal-content">
            <span className="close" onClick={handleclose}>×</span>
            <p>Important Announcement: Our new Orthopaedics and Joint Replacement department is now open!</p>
        </div>
    </div>
      </div>} */}
    </>
  )
}

export default App