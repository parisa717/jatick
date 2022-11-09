import React from "react";

const Button = ({ varient, fullwidth, maxwidth, children, className, ...rest }) => {
  //varient =>primary , secondary ,thirdbtn,/// fullwidth, maxwidth
  return (
    <button
      className={`button ${className} ${varient === "primary"
          ? "button__primary" :
          varient === "outlined" ?
            "button__outlined"
            : varient === "secondary"
              ? "button__secondary"
              : varient === "thirdbtn"
                ? "button__thirdbtn" : varient === "white"
                  ? "button__white" :varient === "fifth" ?
                  "button__fifthbtn"
                  : fullwidth
                    ? "fullwidth"
                    : maxwidth
                      ? "maxwidth"
                      : null
        }`}
      {...rest}
      
    >
      {children}
    </button>
  );
};

export default Button;


