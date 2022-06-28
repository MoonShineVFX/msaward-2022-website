import React from 'react'
import { useRecoilState } from 'recoil';
import { modalState, movieState } from '../atoms/modalAtom';
function Section3({data}) {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);
  return (
    <div className='w-9/12 text-white mx-auto w-full flex justify-center items-start  relative mt-64'>
      <div className='p-12 w-4/12'>
        <div className='text-4xl font-bold'>公開配信</div>
        <div className='text-xs text-zinc-400 my-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</div>
      </div>
      <div className='w-8/12 grid grid-cols-5 gap-5'>
        {
          data.map((item,index)=>{
            const {id, title, school,desc,video_link,cover} = item
            return(
              <div 
                className='bg-black w-[9vw] aspect-[3/4.3] bg-cover bg-no-repeat bg-center relative rounded-md hover:-translate-y-3 transition cursor-pointer duration-200 mb-10'
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