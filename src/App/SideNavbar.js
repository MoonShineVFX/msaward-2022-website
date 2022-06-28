import React from 'react'
import { Link } from 'react-scroll'
function SideNavbar() {
  return (
    <div className='sideNavbar fixed text-white right-0 top-1/2 p-6 flex flex-col text-xs -translate-y-1/2 text-right z-20'>
      <Link className='my-2 text-zinc-500 hover:text-white cursor-pointer' activeClass="active" to="home" spy={true} smooth={true}>首頁</Link>
      <Link className='my-2 text-zinc-500 hover:text-white cursor-pointer' activeClass="active" to="top3" spy={true} smooth={true}>一番賞</Link>
      <Link className='my-2 text-zinc-500 hover:text-white cursor-pointer' activeClass="active" to="top10" spy={true} smooth={true}>強力放送</Link>
      <Link className='my-2 text-zinc-500 hover:text-white cursor-pointer' activeClass="active" to="specialworks" spy={true} smooth={true}>公開配信</Link>
      <Link className='my-2 text-zinc-500 hover:text-white cursor-pointer' activeClass="active" to="masters" spy={true} smooth={true}>評審團</Link>
      <Link className='my-2 text-zinc-500 hover:text-white cursor-pointer' activeClass="active" to="gift" spy={true} smooth={true}>ROG 禮物軍團</Link>
    </div>
  )
}

export default SideNavbar