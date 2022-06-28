import React from 'react'
import { useRecoilState } from 'recoil';
import { modalState, movieState } from '../atoms/modalAtom';
function Section2({data}) {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);
  return (
    <div className='w-9/12 text-white mx-auto w-full flex flex-col justify-center items-center  relative mt-64'>
        <div className='text-4xl font-bold'>強力放送</div>
        <div className='w-3/5 text-xs text-center text-zinc-400 my-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</div>
        <div className='w-5/6 grid grid-cols-6 gap-6'>
          {
            data.map((item,index)=>{
              const {id, title, school,desc,video_link,cover} = item
              return(
                <div 
                  className='bg-black w-full h-[220px] bg-cover bg-no-repeat bg-center relative hover:-translate-y-3 transition cursor-pointer duration-300 mr-5 mb-10 rounded-md'
                  style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/top10/'+cover})`}}
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

export default Section2