import React from 'react'

function Section2() {
  return (
    <div className='w-9/12 text-white mx-auto w-full flex flex-col justify-center items-center  relative mt-64'>
        <div className='text-4xl font-bold'>強力放送</div>
        <div className='w-3/5 text-xs text-center text-zinc-400 my-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</div>
        <div className='flex w-11/12 justify-center'>
          <div 
            className='bg-black w-40 h-[220px] bg-cover bg-no-repeat bg-center relative rounded-md hover:-translate-y-3 transition cursor-pointer duration-300 mr-5'
            style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/work01.png'})`}}>
              <div className=' absolute -bottom-10 text-xs'>照耀你，照耀我 ( Shine on us )</div>
          </div>
          <div 
            className='bg-black w-40 h-[220px] bg-cover bg-no-repeat bg-center relative rounded-md hover:-translate-y-3 transition cursor-pointer duration-300 mr-5'
            style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/work01.png'})`}}>
              <div className=' absolute -bottom-10 text-xs'>照耀你，照耀我 ( Shine on us )</div>
          </div>
          <div 
            className='bg-black w-40 h-[220px] bg-cover bg-no-repeat bg-center relative rounded-md hover:-translate-y-3 transition cursor-pointer duration-300 mr-5'
            style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/work01.png'})`}}>
              <div className=' absolute -bottom-10 text-xs'>照耀你，照耀我 ( Shine on us )</div>
          </div>
          <div 
            className='bg-black w-40 h-[220px] bg-cover bg-no-repeat bg-center relative rounded-md hover:-translate-y-3 transition cursor-pointer duration-300 mr-5'
            style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/work01.png'})`}}>
              <div className=' absolute -bottom-10 text-xs'>照耀你，照耀我 ( Shine on us )</div>
          </div>
          <div 
            className='bg-black w-40 h-[220px] bg-cover bg-no-repeat bg-center relative rounded-md hover:-translate-y-3 transition cursor-pointer duration-300 mr-5'
            style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/work01.png'})`}}>
              <div className=' absolute -bottom-10 text-xs'>照耀你，照耀我 ( Shine on us )</div>
          </div>
          <div 
            className='bg-black w-40 h-[220px] bg-cover bg-no-repeat bg-center relative rounded-md hover:-translate-y-3 transition cursor-pointer duration-300'
            style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/work01.png'})`}}>
              <div className=' absolute -bottom-10 text-xs'>照耀你，照耀我 ( Shine on us )</div>
          </div>
          

        </div>
    </div>
  )
}

export default Section2