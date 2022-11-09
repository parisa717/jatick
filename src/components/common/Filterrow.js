import React, { useState } from "react";

const Filterrow = () => {
  const [tagID, setTagID] = useState(1);
  const tagList = [
    {
      id: 1,
      title: "همه اقامتگاه ها"
    },
    {
      id: 2,
      title: "اقامتگاه محبوب"
    },
    {
      id: 3,
      title: "اقامتگاه لوکس"
    },
    {
      id: 4,
      title: "اقامتگاه اقتصادی"
    }
  ];

  return (
    <div className="Filterrow flex ">
   { tagList.map(i=> <div onClick={()=>setTagID(i.id)} className={` cursor-pointer center rounded-[16px] px-[36px] py-[20px] w-[180px] ml-[24px] ${i.id === tagID  ? "bg-[#E9BD22]":"bg-[#EEF3F5]"}`} >
          <div className={`text-[#292D32] text-[16px]`}>
             {i.title}git add 
          </div>

      </div>) }
    </div>
  );
};

export default Filterrow;
