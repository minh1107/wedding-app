import React from "react";
import { NavLink } from "react-router-dom";
import "boxicons";
import { menuHeader } from "../../utils/menuHeader";
import "@fontsource/great-vibes";

function Header() {
  
  return (
    <div className="h-[88px] fixed w-full bg-header-color  text-text-normal">
      <div className="flex flex-wrap h-full mr-[10%] ml-[10%] items-center w-[80%] justify-between">
        <div style={{fontFamily: "Great Vibes"}} className='text-[30px]'>
          <NavLink to="" end="" className='flex gap-1 items-center'>
            Wedding
            <box-icon name="heart" type="solid" size='60px' color='red' animation="flashing"></box-icon>
            forever
          </NavLink>
        </div>
        <div className="flex gap-4  ">
          {menuHeader?.map((item) => (
            <NavLink
              className="flex items-center gap-2"
              key={item.path}
              to={item.path}
              end={item.path}
            >
              <span className="flex items-center text-te">{item.icon}</span>
              <span>{item.text}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
