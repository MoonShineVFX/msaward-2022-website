import React from 'react'
import ReactPlayer from 'react-player';
import { HiOutlineX} from "react-icons/hi";
import { useRecoilState, useRecoilValue } from 'recoil';
import { modalState, movieState } from '../atoms/modalAtom';
import { motion,AnimatePresence } from "framer-motion"

function Modal() {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const movie = useRecoilValue(movieState);
  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 mx-auto w-full   h-screen z-20"
    > 
      <div className='w-full h-screen bg-[#00000091] z-10 absolute' onClick={handleClose}></div>
      <div className='mt-10 z-40 relative max-w-5xl mx-auto rounded-sm overflow-hidden top-[12%]'>
        <button
            onClick={handleClose}
            className="modalButton absolute right-5 top-5 z-40 h-10 w-10 border-none bg-[#181818] hover:bg-1[#181818] flex justify-center items-center rounded-full"
          >
          <HiOutlineX className="h-6 w-6"  color="white"/>
        </button>
        <div className='flex bg-black'>
          <div className="relative aspect-video w-3/5">
            <ReactPlayer
              url={movie?.video_link}
              width="100%"
              height="100%"
              style={{ position: 'absolute', top: '0', left: '0' }}
              playing
              controls
            />
          </div>
          <div className="flex flex-col w-2/5 space-x-16 rounded-b-md bg-zinc-900 px-10 py-8 text-white">
            <div className="space-y-6 text-lg">
              <div className="flex items-center space-x-2 text-xl  ">
                <p className="font-semibold text-white-600">
                  {movie?.title}
                </p>
              </div>

              <div className="flex flex-col  gap-x-10 font-light md:flex-row  ">
                <div className="whitespace-pre-line w-full overflow-y-auto max-h-48 text-sm"> {movie?.desc} </div>

              </div>
              <div className='grid grid-cols-2 xs:grid-cols-2 gap-2'>
              { movie.review &&
                movie.review.map((item,index)=>{
                  return(
                    
                    <motion.div 
                      key={index}
                      className="w-full p-5 bg-zinc-800 mb-5 max-h-40 overflow-y-auto" 
                      initial={{ opacity: 0   }}
                      animate={{ opacity: 1 }}
                      exit={{opacity: 0  }}
                      transition={{delay:`${item.id}/5`  , ease:"easeIn"}}
                    >
                      <p className="mb-4 text-xs "> 
                        <span className="text-primary-900">"</span>{item.desc}
                        <span className="text-primary-900">"</span>
                      </p>
                      <div className="flex items-center"> 
                        <img alt={item.name} className="w-10 mr-4 rounded-full bg-neutral-500" src={process.env.PUBLIC_URL+'/images/master/p0'+item.id+'.png'}/>
                        <div className="flex flex-col items-start"> 
                          <span className="mb-1 text-xs font-bold">{item.name}</span> 
                          <div className="text-xs text-zinc-300"> {item.title} </div>
                        </div>
                      </div>
                    </motion.div>
                    
                  )
                })
              }
              </div>
            </div>
          </div>

        </div>
        

      </div>
      
      
    </div>
  )
}

export default Modal