import React from 'react'
import { Link } from 'react-scroll'
import { BsFillPenFill } from "react-icons/bs";

function SideNavbar() {
  return (
    <div className='sideNavbar fixed text-white right-0 top-1/2 p-6 flex flex-col text-xs -translate-y-1/2 text-right z-20'>
      <Link className='my-2 text-zinc-500 hover:text-white cursor-pointer' activeClass="active" to="home" spy={true} smooth={true}>首頁</Link>
      <Link className='my-2 text-zinc-500 hover:text-white cursor-pointer' activeClass="active" to="top3" spy={true} smooth={true}>一番賞</Link>
      <Link className='my-2 text-zinc-500 hover:text-white cursor-pointer' activeClass="active" to="top10" spy={true} smooth={true}>強力放送</Link>
      <Link className='my-2 text-zinc-500 hover:text-white cursor-pointer' activeClass="active" to="specialworks" spy={true} smooth={true}>公開配信</Link>
      <Link className='my-2 text-zinc-500 hover:text-white cursor-pointer' activeClass="active" to="masters" spy={true} smooth={true}>評審團</Link>
      <Link className='my-2 text-zinc-500 hover:text-white cursor-pointer' activeClass="active" to="gift" spy={true} smooth={true}>ROG 禮物軍團</Link>

      <div className=' mt-5 '>
        <a href="https://tw.asus.click/ASUSProArt_Student" alt="獲獎同學請填寫下列問券，ASUS ProArt 指定產品購買優惠折扣碼後續將由ASUS寄送提供。" target="_blank" rel="noreferrer"
            className='block mb-2 text-zinc-400 border-dashed border border-zinc-500 rounded-md p-2 hover:text-white hover:border-2 hover:border-white bg-zinc-800 hover:bg-black ' >
            <BsFillPenFill /> 獲獎同學填寫問卷<br /> 指定產品購買優惠
        </a>
        <a href="https://tw.asus.click/ASUSProArt_School" alt="獲獎同學所屬校系請填寫下列問券， ASUS ProArt 指定產品購買優惠後續將由ASUS專人聯繫服務。" target="_blank" rel="noreferrer"
            className='block mb-2 text-zinc-400 border-dashed border border-zinc-500 rounded-md p-2 hover:text-white hover:border-2 hover:border-white bg-zinc-800 hover:bg-black '>
            <BsFillPenFill /> 獲獎同學所屬校系填寫問卷<br /> 指定產品購買優惠
        </a>
      </div>
    </div>
  )
}

export default SideNavbar