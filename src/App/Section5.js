import React from 'react'

function Section5() {
  return (
    <div name="gift" className='w-9/12 text-white mx-auto flex flex-col justify-center items-center  relative mt-64 xs:w-full xs:mt-16'>
      <div className='flex w-3/5 justify-between items-center mb-2  xs:w-5/6'>

        <div className='flex items-center '>
          <img src={process.env.PUBLIC_URL+'/images/max.png'} alt="" className='h-20 mr-5 xs:h-14'/>
          <div className='text-4xl font-bold w-3/5 xs:text-xl'>夢想 × ROG <span className='text-red-600'>MAX</span>！禮物軍團</div>
        
        </div>
        <div className='w-24  xs:mx-auto xs:mt-0 xs:w-20 '>
          <div className='text-xs text-zinc-400 xs:hidden'>贊助單位</div>
          <img src={process.env.PUBLIC_URL+'/images/ROG_Logo.svg'} alt="" />
        </div>
      </div>
      <div className='w-2/5 text-xs text-center text-zinc-400 my-6 xs:w-4/5'>
        前三名獲獎同學，將依名次分別獲得由 ROG 贊助 の MAX! 禮物軍團，且還能與所屬校系同享 ASUS ProArt 創作者系列指定產品購買優惠。
      </div>
      <div className='w-full my-6'>
        <div className='w-3/5 bg-[#ffffff04] rounded-sm p-6 ml-auto relative  mb-32 borderstyle borderstyle_center xs:w-5/6 xs:mx-auto xs:mb-20'>
            <div className='w-3/5 relative z-10 xs:w-full'>
              <div className='w-24 '>
                <img src={process.env.PUBLIC_URL+'/images/a.png'} alt="" />
              </div>
            
              <div className='text-sm text-zinc-300 mt-5  xs:w-full'>
                ROG Delta S 電競耳麥 (價值 $5,890)
                <ul className='text-zinc-400 mt-3'>
                  <li>• 引領業界的 Hi-Res ESS 9281 四核心DAC™ 技術，加上 MQA編解碼器提供無比細膩逼真的音質</li>
                  <li>• 具備 ASUS AI 降噪麥克風，提供極致清晰的遊戲語音</li>
                </ul>
                <br />
                <a 
                  href="https://shop.asus.com/tw/rog/90yh02k0-b2ua00-rog-delta-s.html" 
                  className='px-3 py-3 text-xs border-2  border-zinc-500 rounded-full mt-6 w-24 hover:text-white hover:border-white'
                  target="_blank" rel="noreferrer"
                >了解更多＞＞</a>
              </div>
            </div>
          
            <div className='w-2/5 absolute top-3 right-0 xs:w-4/5 xs:-top-3 xs:relative xs:mx-auto'>
              <img src={process.env.PUBLIC_URL+'/images/gift/product1.png'} alt="" />
            </div>
           
        </div>
        <div className='w-3/5 bg-[#ffffff04] rounded-sm p-6 mr-auto relative mb-32 borderstyle borderstyle_center xs:w-5/6 xs:mx-auto xs:mb-10'>
          <div className='w-3/5 relative z-10 xs:w-full'>
            <div className='w-24'>
              <img src={process.env.PUBLIC_URL+'/images/b.png'} alt="" />
            </div>
            <div className='text-sm text-zinc-300 mt-5  xs:w-full '>
              ROG Chakram X 無線 RGB 電競滑鼠 (價值 $4,990)
              <ul className='text-zinc-400 mt-3'>
                <li>• ROG AimPoint 光學感測器: 全新 36,000 dpi 感測器具備 8000 Hz 輪詢率，提供極致精準度</li>
                <li>• 三模連接能力: 有線USB、2.4 GHz RF、藍牙 (可配對至多三個裝置)</li>
              </ul>
              <br />
              <a 
                href="https://shop.asus.com/tw/rog/90mp02n0-bmua00-rog-chakram-x.html" 
                className='px-3 py-3 text-xs border-2  border-zinc-500 rounded-full mt-6 w-24 hover:text-white hover:border-white'
                target="_blank" rel="noreferrer"
              >了解更多＞＞</a>
            </div>

          </div>
          <div className='w-2/6 absolute top-4 right-0 xs:w-3/5 xs:top-4 xs:relative xs:mx-auto'>
            <img src={process.env.PUBLIC_URL+'/images/gift/product2.png'} alt="" />
          </div>

           
        </div>
        <div className='w-3/5 bg-[#ffffff04] rounded-sm p-6 ml-auto relative mb-32 borderstyle borderstyle_center xs:w-5/6 xs:mx-auto'>
          <div className='w-3/5 relative z-10 xs:w-full'>
            <div className='w-24'>
              <img src={process.env.PUBLIC_URL+'/images/c.png'} alt="" />
            </div>
            
            <div className='text-sm text-zinc-300 mt-5  xs:w-full'>
              ROG Strix Scope NX Wireless Deluxe 機械式電競鍵盤 (價值 $4,590)
              <ul className='text-zinc-400 mt-3'>
                <li>• 三模連線功能：提供藍牙、2.4 GHz、有線 USB 連接選項，使用藍牙連接可配對三台裝置</li>
                <li>• 超長續航力：藍牙模式可提供高達 316.5 小時續航力，2.4 GHz 無線模式則能享受 315 小時遊戲時間</li>
              </ul>
              <br />
              <a 
                href="https://shop.asus.com/tw/rog/rog-strix-scope-nx-wireless-deluxe.html" 
                className='px-3 py-3 text-xs border-2  border-zinc-500 rounded-full mt-6 w-24 hover:text-white hover:border-white'
                target="_blank" rel="noreferrer"
              >了解更多＞＞</a>
            </div>

          </div>

          <div className='w-3/6 absolute top-10 -right-28 z-10 xs:w-full xs:right-0 xs:top-6 xs:relative xs:mx-auto'>
            <img src={process.env.PUBLIC_URL+'/images/gift/product3.png'} alt="" />
          </div>
           
        </div>
      </div>

    </div>
  )
}

export default Section5