import React, { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className=" text[var(--text-heading)] pt-5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold">Etech.</div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-4">
            <li className=" cursor-pointer">Courses</li>
            <li className=" cursor-pointer">About</li>
            <li className=" cursor-pointer">Offers</li>
            <li className=" cursor-pointer">Contact</li>
            <li className="border border-[var(--accent-pink)] px-4 py-1 rounded-md  cursor-pointer">Sign In</li>
            <li className="bg-linear-to-b from-[var(--gradient-start)] to-[var(--accent-pink)] px-4 py-1 rounded-md text-[var(--text)] cursor-pointer">Free Trial</li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <i class='text-xl ri-close-large-line'></i> : <i class='text-xl ri-menu-fill'></i>}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden flex flex-col space-y-2 mt-2">
            <li className="cursor-pointer">Courses</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Offers</li>
            <li className="cursor-pointer">Contact</li>
            <li className="text-[var(--accent-pink)] cursor-pointer">Sign In</li>
            <li className="text-[var(--primary-purple-dark)] cursor-pointer">Free Trial</li>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
