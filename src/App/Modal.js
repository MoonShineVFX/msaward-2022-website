import React from 'react'
import ReactPlayer from 'react-player';
import { HiOutlineX} from "react-icons/hi";
import { useRecoilState, useRecoilValue } from 'recoil';
import { modalState, movieState } from '../atoms/modalAtom';

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
      <div className='mt-10 z-40 relative max-w-5xl mx-auto  rounded-sm overflow-hidden'>
        <button
            onClick={handleClose}
            className="modalButton absolute right-5 top-5 z-40 h-10 w-10 border-none bg-[#181818] hover:bg-1[#181818] flex justify-center items-center rounded-full"
          >
          <HiOutlineX className="h-6 w-6"  color="white"/>
        </button>
        <div className="relative aspect-video">
          <ReactPlayer
            url={movie?.video_link}
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: '0', left: '0' }}
            playing
            controls
          />
        </div>
        <div className="flex flex-col w-full space-x-16 rounded-b-md bg-zinc-900 px-10 py-8 text-white">
          <div className="space-y-6 text-lg">
            <div className="flex items-center space-x-2 text-xl  ">
              <p className="font-semibold text-white-600">
                {movie?.title}
              </p>
            </div>

            <div className="flex flex-col  gap-x-10 font-light md:flex-row  ">
              <div className="whitespace-pre-line w-full overflow-y-auto max-h-48 text-sm"> {movie?.desc} </div>

            </div>
          </div>
        </div>

      </div>
      
      
    </div>
  )
}

export default Modal