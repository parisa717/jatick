import React from "react";
import Search from "../../assets/img/icons/search-normal.svg";
import IconBox from "./IconBox";
const SearchInput = () => {
  return (
    <div className="SearchInput relative">
      <input
        className="SearchInput__input"
        placeholder="اقامتگاه مورد نظر خود را جست و جو کنید ..."
      />
      <IconBox white small>
        {" "}<img className="" src={Search} />
      </IconBox>
    </div>
  );
};

export default SearchInput;
