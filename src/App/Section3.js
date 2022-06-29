import React from 'react'
import { useRecoilState } from 'recoil';
import { modalState, movieState } from '../atoms/modalAtom';
function Section3({data}) {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);
  return (
    <div name="specialworks" className='w-9/12 text-white mx-auto flex justify-center items-start  relative mt-64 xs:w-full xs:mt-16 xs:flex-col'>
      <div className='p-12 w-4/12 xs:w-full'>
        <div className='text-4xl font-bold'>公開配信</div>
        <div className='text-xs text-zinc-400 my-6'>由夢想動畫評審團評選出的佳作作品</div>
      </div>
      <div className='w-8/12 grid grid-cols-5 gap-5 xs:grid-cols-3 xs:w-5/6 xs:mx-auto'>
        {
          data.map((item,index)=>{
            const {id, title, school,desc,video_link,cover} = item
            return(
              <div 
                key={index}
                className='bg-black w-[9vw] aspect-[3/4.3] bg-cover bg-no-repeat bg-center relative rounded-md hover:-translate-y-3 transition cursor-pointer duration-200 mb-10  xs:w-[25vw] brightness-75 hover:brightness-105'
                style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/special_works/'+cover})`}}
                onClick={() => {
                  setShowModal(true);
                  setCurrentMovie(item);
                }}
                >
                  <div className=' absolute -bottom-10 text-xs'>{title}</div>
              </div>
            )
          })
        }
        
      </div>
    </div>
  )
}

export default Section3