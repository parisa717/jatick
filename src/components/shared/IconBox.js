import React from 'react'

const IconBox = ({children,className,white,small,...rest }) => {
  return (
    <button className={`IconBox center  ${white ? "IconBox__white":"IconBox__green" } ${small ? "IconBox__small":"IconBox__big" } ${className}`} {...rest}>{children}</button>
  )
}

export default IconBox