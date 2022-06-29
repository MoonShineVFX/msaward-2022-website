import { useRecoilValue } from 'recoil';
import { modalState, movieState } from '../atoms/modalAtom';

import SideNavbar from './SideNavbar';
import Header from './Header'
import Top3 from './Top3';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Modal from './Modal';
//scss style
import './customs.scss'

//data 
import top3Data from "./top3.json"
import top10Data from './top10.json'
import specialWorksData from './specialWorks.json'
import masterData from './Masters.json'

function App() {
  const showModal = useRecoilValue(modalState);
  const {top} = top3Data
  const {top10}= top10Data
  const {special_works} =specialWorksData
  const {masters} = masterData
  return (
    <div className="App bg-black">
      <SideNavbar />
      <Header/>
      <Top3 data={top}/>;
      <Section2 data={top10}/>
      <Section3 data={special_works}/>
      <Section4 data={masters}/>
      <Section5 />
      <div className='w-10/12 mx-auto border-t border-zinc-500'>
        <div className='grid grid-cols-4 px-5 pt-6 text-zinc-400 xs:grid-cols-1'>
          <div className='text-xs '>
            <div className='mb-5'>主辦單位</div>
            <div className=' w-44 xs:w-32'>
              <img src={process.env.PUBLIC_URL+ '/images/mslogo.png'} alt="" />
            </div>
            
          </div>
          <div className='text-xs'>
            <div className='mb-5'>贊助單位</div>
            <div className='w-24'>
              <img src={process.env.PUBLIC_URL+ '/images/ROG_Logo.svg'} alt="" />
            </div>
            
          </div>
          <div className='text-xs col-span-2 xs:mt-5'>
            <div className='mb-5'>夢想動畫</div>
            <div className='mb-2'>Tel | 02-2785-7037</div>
            <div className='mb-2'>Email | info@moonshine.tw</div>
            <div className='mb-2'>Address | 3F, No.481, Sec. 6, Zhongxiao E. Rd., Nangang Dist., Taipei City 115, Taiwan (R.O.C.)</div>
            <ul className='flex items-center mt-6'>
              <li className='mr-3'>
                <a href="https://moonshine.tw/" target='_blank' rel="noreferrer">
                  <img src={process.env.PUBLIC_URL+ '/images/mslogo.png'} alt="" className='w-28' />
                </a>
              </li>
              <li className='mr-3' target='_blank' rel="noreferrer">
                <a href="https://www.facebook.com/MoonShineAnimation">
                  <img src={process.env.PUBLIC_URL+ '/images/fb.svg'} alt="" className='h-6' />
                </a>
              </li>
              <li className='' target='_blank' rel="noreferrer">
                <a href="https://www.instagram.com/moonshine.tw/?hl=zh-tw">
                  <img src={process.env.PUBLIC_URL+ '/images/ins.svg'} alt="" className='h-6' />
                </a>
              </li>
            </ul>
          </div>

        </div>
        <div className='text-zinc-500 text-right text-xs py-5'>Copyright © 2022 MoonShine. All Rights Reserved.</div>
      </div>

      {showModal && <Modal />}
    </div>
  );
}

export default App;
