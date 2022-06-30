import React from 'react'
import { Link } from 'react-scroll'
import { BsFillPenFill } from "react-icons/bs";

function SideNavbar() {
  return (
    <div className='sideNavbar fixed text-white right-0 top-1/2 p-6 flex flex-col text-xs -translate-y-1/2 text-right z-20 
      xs:w-full xs:bottom-0 xs:top-auto xs:flex-row xs:bg-zinc-800 xs:justify-between xs:py-2 xs:px-2 xs:flex-wrap xs:-translate-y-0'>
      <Link className='my-2 text-zinc-500 hover:text-white cursor-pointer' activeClass="active" to="home" spy={true} smooth={true}>首頁</Link>
      <Link className='my-2 text-zinc-500 hover:text-white cursor-pointer' activeClass="active" to="top3" spy={true} smooth={true}>一番賞</Link>
      <Link className='my-2 text-zinc-500 hover:text-white cursor-pointer' activeClass="active" to="top10" spy={true} smooth={true}>強力放送</Link>
      <Link className='my-2 text-zinc-500 hover:text-white cursor-pointer' activeClass="active" to="specialworks" spy={true} smooth={true}>公開配信</Link>
      <Link className='my-2 text-zinc-500 hover:text-white cursor-pointer' activeClass="active" to="masters" spy={true} smooth={true}>評審團</Link>
      <Link className='my-2 text-zinc-500 hover:text-white cursor-pointer' activeClass="active" to="gift" spy={true} smooth={true}>ROG 禮物軍團</Link>

      <div className=' mt-5 xs:flex xs:mt-3 xs:basis-[100%] xs:items-center xs:justify-center'>
        <a href="https://tw.asus.click/ASUSProArt_Student" alt="獲獎同學請填寫下列問券，ASUS ProArt 指定產品購買優惠折扣碼後續將由ASUS寄送提供。" target="_blank" rel="noreferrer"
            className='block mb-3 xs:mb-0 text-zinc-400 border-dashed border border-zinc-500 rounded-md p-2 hover:text-white hover:border-2 hover:border-white bg-zinc-800 hover:bg-black  ' >
            <div className='xs:hidden'><BsFillPenFill /> 獲獎同學填寫問卷<br /> 指定產品購買優惠</div>
            <div className=' hidden xs:block '>獲獎同學問卷</div>
        </a>
        <a href="https://tw.asus.click/ASUSProArt_School" alt="獲獎同學所屬校系請填寫下列問券， ASUS ProArt 指定產品購買優惠後續將由ASUS專人聯繫服務。" target="_blank" rel="noreferrer"
            className='block mb-2 xs:mb-0 xs:ml-3 text-zinc-400 border-dashed border border-zinc-500 rounded-md p-2 hover:text-white hover:border-2 hover:border-white bg-zinc-800 hover:bg-black '>
            <div className='xs:hidden'><BsFillPenFill /> 獲獎同學所屬校系填寫問卷<br /> 指定產品購買優惠</div>
            <div className='hidden xs:block '>獲獎同學所屬校系問卷</div>
        </a>
      </div>
    </div>
  )
}

export default SideNavbar