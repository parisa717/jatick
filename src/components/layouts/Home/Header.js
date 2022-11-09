import React from "react";
import location from "../../../assets/img/icons/location.svg";
import cal1 from "../../../assets/img/icons/calendar-2.svg";
import cal2 from "../../../assets/img/icons/calendar-tick.svg";
import user from "../../../assets/img/icons/user-edit.svg";
import search from "../../../assets/img/icons/search-white.svg";
import IconBox from "../../shared/IconBox";
const Header = () => {
  return (
    <div className="container">
      <div className="Header-box rounded[46px] overflow-hidden py-[64px] px-[117px]">
        <h1 className="text-[64px] text-[#fff] w-[55%] font-[900] ">
          هر جای ایران به کمک ما سفر کن و مثل خونه خودت احساس راحتی کن
        </h1>
        <h2 className="text-[35px] text-[#fff] w-[55%] font-[500] mt-[20px] ">
          از ویلای استخر دار تا بوم گردی جا با ما جوره :)
        </h2>
      </div>
      <div className="sub-headerbox flex justify-between items-center">
        <div className="">
          <div className="flex items-center">
            <img src={location} className="ml-[12px]" alt=''/>
            <div className="text-[25px] font-[500] ">مقصد شما</div>
          </div>
          <div className="text-[#797D82] text-[16px] mt-[20px]">
            شهر یا روستا مورد نظر خود را بنویسید
          </div>
        </div>
        <div className="">
          <div className="flex items-center">
            <img src={cal1} className="ml-[12px]" alt=''/>
            <div className="text-[25px] font-[500] "> تاریخ ورود</div>
          </div>
          <div className="text-[#797D82] text-[16px] mt-[20px]">
          تاریخ ورود خود را وارد کنید
          </div>
        </div>
        <div className="">
          <div className="flex items-center">
            <img src={cal2} className="ml-[12px]" alt=''/>
            <div className="text-[25px] font-[500] ">تاریخ خروج</div>
          </div>
          <div className="text-[#797D82] text-[16px] mt-[20px]">
          تاریخ خروج خود وارد کنید
          </div>
        </div>
        <div className="">
          <div className="flex items-center">
            <img src={user} className="ml-[12px]" alt=''/>
            <div className="text-[25px] font-[500] ">تعداد نفرات</div>
          </div>
          <div className="text-[#797D82] text-[16px] mt-[20px]">
          تعداد نفرات همسفران خود را وارد کنید
          </div>
        </div>
        <IconBox ><img src={search} /></IconBox>
      </div>
    </div>
  );
};

export default Header;
