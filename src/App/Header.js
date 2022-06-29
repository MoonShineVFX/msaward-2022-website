import React from 'react'
function Header() {
  return (
    <div name="home" className="header w-9/12 mx-auto"
    >
      <div className='xs:hidden brightness-90 '>
        <img src={process.env.PUBLIC_URL+'/images/header_bg.jpg'} alt="" />
      </div>

    </div>
  )
}

export default Header