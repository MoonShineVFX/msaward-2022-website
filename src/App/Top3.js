import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { motion,AnimatePresence } from "framer-motion"
function Top3({data}) {
  const [currentData, setCurrentData] = useState({});



  useEffect(()=>{
    setCurrentData(data[0])
  },[])  
  return (
    <div className='w-9/12 text-white mx-auto w-full  bg-[#ffffff04] rounded-lg flex relative mt-20'>
      <div className='videocontent w-4/6 relative'>
        <div className='text-[#73695c] text-3xl font-bold pl-10 mt-10 mb-0 tracking-widest w-2/6'>
          <img src={process.env.PUBLIC_URL+'/images/'+currentData.award_icon} alt="" />
        </div>
        <AnimatePresence>
          <motion.div 
            key={currentData.id}
            className='bg-black w-full pt-[65%] bg-cover bg-no-repeat bg-center  absolute top-[20%] -left-[6%] border-2 border-[#73695c] ' 
            initial={{ opacity: 0 , x :"-3vw"  }}
            animate={{ opacity: 1  , x: 0}}
            exit={{opacity: 0  , x: "-3vw"}}
            transition={{delay:0.1 , ease:"easeIn"}}
            >
              <ReactPlayer
                className='react-player absolute top-0 left-0'
                url={currentData.video_link}
                width='100%'
                height='100%'
              />

          </motion.div>
        </AnimatePresence>
      </div>
      <div className='text-sm box-border px-14 py-10 w-3/6  mt-6 transition-all'>
        <div className='menu flex mb-6'>
          {
            data.map((item,index)=>{
              const {id, award_name,title} =item
              return(
                <div 
                  key={id} 
                  className={"mr-12 font-100 last:mr-0 cursor-pointer transition hover:border-b-2 " + 
                    (currentData.id === id ? 'text-orange-500  border-b-2 border-orange-500' :'text-orange-100')}
                  onClick={()=>setCurrentData(data[index])}
                >
                  {award_name} <br />{title}
                </div>
              )
            })
          }
        </div>
        <div className='info mt-16'>
          <div className='mb-5'>{currentData.school}</div>
          <div className='mb-8'>{currentData.desc}</div>
          
          <div>
          <AnimatePresence>
            { currentData.review &&
              currentData.review.map((item,index)=>{
                return(
                  
                  <motion.div 
                    key={index}
                    className="w-full p-5 bg-zinc-900 mb-5" 
                    initial={{ opacity: 0   }}
                    animate={{ opacity: 1 }}
                    exit={{opacity: 0  }}
                    transition={{delay:`${item.id}/5`  , ease:"easeIn"}}
                  >
                    <p className="mb-4"> 
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
          </AnimatePresence>
          </div>
          

        </div>
      </div>
    </div>
  )
}

export default Top3