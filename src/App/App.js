import Header from './Header'
import Top3 from './Top3';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
function App() {
  return (
    <div className="App bg-black">
      <Header/>
      <Top3 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <div className='text-white'>MoonShine  © 2022 Copyright. All Rights Reserved.</div>
    </div>
  );
}

export default App;
