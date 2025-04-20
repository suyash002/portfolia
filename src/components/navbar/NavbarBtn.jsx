import { useState } from "react";
import { Link } from "react-scroll";
import { LuArrowDownRight } from "react-icons/lu";
import resume from "../../../public/resume/Suyash-Resume-Apr2025.pdf";

const NavbarBtn = () => {
  const handleClick = () => {
    
    const link = document.createElement("a");
    link.href = resume; 
    link.download = "Suyash-Resume-Apr2025.pdf"; 
    link.click(); 
  };

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 rounded-full text-xl font-bold font-body text-white border-cyan border flex items-center gap-1 bg-gradient-to-r from-darkCyan to-orange transition-all duration-500 hover:scale-110 hover:border-orange cursor-pointer hover:shadow-cyanShadow"
    >
      <span>
        <Link spy={true} smooth={true} duration={500} offset={-120} to="contact">
          Resume download
        </Link>
      </span>
      <div className="sm:hidden md:block">
        <LuArrowDownRight />
      </div>
    </button>
  );
};

export default NavbarBtn;
