import React from 'react'

export default function Info() {
  return (
    <div>
        <div>
            <img src="/profile-pic.png" alt="profile" className="profile-pic" />
        </div>
        <div className="profile-info">
            <h2>
                Laura Smith
            </h2>
            <p className="profile-desc">Frontend Developer</p>
            <p>laurasmith.website</p>
        </div>
        <div className="profile-buttons">
            <button className='email'>Email</button>
            <button className='linkedIn'>LinkedIn</button>
        </div>
        
    </div>
  )
}
