import React, { useEffect, useState } from 'react'

import './Home.css'

const Home = () => {
  const [an, setAn] = useState(true)

  useEffect(() => {
    setAn(true)

    
  }, [])
  const handleclose=()=>{
    setAn(false)
  }
  return (
    <>
    {an && <div>
      <div id="announcement-modal" className="modal">
        <div className="modal-content">
            <span className="close" onClick={handleclose}>×</span>
            <p>Important Announcement: Our new Orthopaedics and Joint Replacement department is now open in india</p>
        </div>
    </div>
      </div>}
    <section id="home" className="hero">
        <div className="hero-content">
            <h1>Welcome to Our Healthcare Center</h1>
            <p>Your health is our priority. We provide the best medical services in Delhi,Mumbai.</p>
        </div>
    </section>
    </>
  )
}

export default Home