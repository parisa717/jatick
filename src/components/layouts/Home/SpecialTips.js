import React from 'react'
import shapedevider from "../../../assets/img/icons/shape-divider.svg"
import clock from "../../../assets/img/icons/timer.svg"
import Filterrow from '../../common/Filterrow'
import SpecialTipsCarousel from './SpecialTipsCarousel'
const SpecialTips = ({}) => {
  return (
    <div className=''>
        <div className='container'>
            <div className='flex justify-between items-center'>
               <div>
                   <img src={shapedevider}/>
                   <h4 className='font-[700] text-[40px] text-[#292D32]'>تـخـفـیـف هـای ویـژه</h4>
                   <div className='text-[20px] text-[#797D82]'>بهترین اقامتگاه ها را با مناسب ترین قیمت ها و  امکانات رزرو کنید </div>
               </div>
               <div className='common-bg flex items-center'>
                   <img src={clock} />
                   <div className='white-bg flex items-center justify-center mx-[10px]'>43  :  21  :  08</div>
                   <div className='text-[24px] text-[#292D32]'>
                   زمان باقی مانده
                   </div>

               </div>
            </div>
            <div className='my-[40px]'>
      
                <SpecialTipsCarousel />
            </div>
        </div>
    </div>
  )
}

export default SpecialTips