import React from 'react'

function Section4({data}) {
  return (
    <div name="masters" className='w-9/12 text-white mx-auto flex flex-col justify-center items-center  relative mt-64 xs:w-full xs:mt-16'>
       <div className='text-4xl font-bold'>評審團</div>
       <div className='w-full grid grid-cols-4 gap-5 mt-16 xs:grid-cols-2 xs:w-5/6'>
        {
          data.map((item,index)=>{
            const {id, name, title, hashtag, desc} =item
            return(
              <div key={id} className='w-full bg-[#ffffff04] rounded-sm p-5 text-center borderstyle borderstyle_draw '>
                <div 
                  className='bg-cover bg-no-repeat bg-center w-20 h-20 rounded-full border-4 border-white mx-auto mb-5'
                  style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/master/p0'+id+'.png'})`}}
                ></div>
                <div className='text-sm font-bold'>{name} ／{title}</div>
                <div className='text-xs text-zinc-400 my-3'>{hashtag}</div>
                <div className='text-sm'>{desc}</div>
              </div>
            )
          })
        }
       </div>
    </div>
  )
}

export default Section4