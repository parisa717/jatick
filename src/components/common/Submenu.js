import React from "react";
import menu from "../../assets/img/icons/menu.svg";
import apartment from "../../assets/img/icons/buildings.svg";
import villa from "../../assets/img/icons/house-2.svg";
import village from "../../assets/img/icons/house.svg";
import hotel from "../../assets/img/icons/buliding.svg";
import Button from "../shared/Button";

const Submenu = () => {
  const menuItems = [
    {
      link: "",
      title: "آپارتمان",
      icon: apartment
    },
    {
      link: "",
      title: "ویلا و باغ",
      icon: villa
    },
    {
      link: "",
      title: "خانه روستایی",
      icon: village
    },
    {
      link: "",
      title: "هتل و مهمان پذیر",
      icon: hotel
    }
  ];
  return (
    <div>
      <div className="container">
        <hr className="mt-[17px] mb-[37px]" />
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex items-center  ml-[34px]">
              <img src={menu} className="ml-[10px]" />
              <div className="text-[#12171C] text-[20px]">منو وبسایت</div>
            </div>
            {menuItems.map(i =>
              <div className="flex items-center ml-[34px] ">
                <img src={i.icon} className="ml-[10px]" />
                <div className="text-[#797D82] text-[20px]">
                  {" "}{i.title}
                </div>
              </div>
            )}
          </div>
          <Button varient="primary">افزودن اقامتگاه</Button>
        </div>
      </div>
    </div>
  );
};

export default Submenu;
