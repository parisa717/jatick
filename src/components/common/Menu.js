import React from "react";
import logo from "../../assets/img/Logo/logo.svg";
import user from "../../assets/img/icons/user.svg";
import arrow from "../../assets/img/icons/arrow-down.svg";
import notification from "../../assets/img/icons/notification-bing.svg";
import SearchInput from "../shared/SearchInput";
import IconBox from "../shared/IconBox";
const Menu = () => {
  return (
    <div>
      <div className="container">
        <div className="flex justify-between mt-[17px]  ">
          <img src={logo} alt="logo" />
          <SearchInput />
          <div className="flex  items-center ">
            <div className="flex px-[27px] ml-[27px] border-l-[1px] border-solid border-[#D2D7D9]">
              <img src={user}  className="ml-[13px] w-[17px]" alt='user'/>
              <img src={arrow} alt='arrow' className="w-[10px] cursor-pointer" />
            </div>
            <div className="common-bg flex items-center">
              <img src={notification} alt='notification' />
              <div className="ml-[27px] mr-[14px] font-bold text-[18px]">اعلانات شما</div>
              <IconBox small white>2</IconBox>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
