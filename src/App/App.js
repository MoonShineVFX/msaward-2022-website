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
      <div className='text-zinc-500 text-center text-xs py-10'>MoonShine  © 2022 Copyright. All Rights Reserved.</div>
      {showModal && <Modal />}
    </div>
  );
}

export default App;
