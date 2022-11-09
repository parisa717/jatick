import React from "react";
import start from "../../../assets/img/icons/star.svg";
const SpecialTipCard = ({ img, rate, title, des }) => {
  return (
    <div className="SpecialTipCard w-[309px] rounded-[30px]">
      <div
        className="SpecialTipCard__img  w-[309px] h-[386px] "
        style={{ backgroundImage: `url(${img})` }}
      />
      <div className="white-bg SpecialTipCard__sub">
        <div className="flex items-start">
          {" "}<img src={start} className='mr-[5px]'/>
          <p className="text-[#12171C] font-bold">4.5</p>
        </div>
        <div className="text-[24px] text-[#292D32] my-[5px]">
          خانه جنگلی زیبا با مسافت 200 متری در محبود آباد
        </div>
        <div className="text-[17px] text-[#797D82] ">
          4 اتاق خواب ، 200 متر ، تا 8 مهمان
        </div>
      </div>
    </div>
  );
};

export default SpecialTipCard;
