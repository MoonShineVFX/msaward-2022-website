import React from 'react'

function Header() {
  return (
    <div className='w-full h-[75vh] bg-cover bg-no-repeat bg-top'
    style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/header_bg.jpg'})`}}
    >

    </div>
  )
}

export default Header