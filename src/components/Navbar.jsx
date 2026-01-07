import React, { useState } from 'react';
import { FaBagShopping } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
const navItems = [
    {path:"/", label:"Furniture",},
    {path:"/shop", label:"Shop",},
    {path:"/about", label:"About Us",},
    {path:"/contact", label:"Contact",},
]
const NavItems = ({ toggleMenu }) => {
  return (
    <ul className="flex flex-col items-center gap-8 md:flex-row md:space-x-8">
      {navItems.map((item, index) => (
        <li key={index} onClick={toggleMenu}>
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              isActive ? "text-amber-600 font-bold" : "hover:text-amber-600"
            }
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};


const Navbar = () => {
    const [isMenuOpen, setIsmenuOpen] = useState(false)
    const toggleMenu = () => {
        setIsmenuOpen(prevState => !prevState)
     }
    const [ isKeyPress, setIsKeyPress] = useState("lock");
    const KeyPress = () => {
        setIsKeyPress("Lock Open")
    }
    return (
<header>
    <nav className='container flex items-center justify-between px-4 py-6 mx-auto max-w-screen-2xl'>
        <Link to="/" className='font-bold'>Logo</Link>
        {/* Hambuger mobile menu */}
     <div onClick={toggleMenu} className='text-xl cursor-pointer md:hidden hover:text-amber-600'>
        {
            isMenuOpen ? <p>X</p> : <FaBars />
        }
     </div>
 
     
        {/* Desktop Menu item */}
        <div className='hidden md:flex'>
            <NavItems/>
        </div>

    {/* mobile menu item */}
        <div className={`fixed top-0 left-0 w-full h-screen bg-black opacity-80 flex flex-col items-center justify-center space-y-8 text-white transition-transform transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full' } md:hidden `}>
          <div className='absolute text-xl cursor-pointer top-4 right-4' onClick={toggleMenu}>
        <FaTimes />
          </div>

          <NavItems toggleMenu = {toggleMenu}/>
        </div>

        <div className='relative hidden cursor-pointer md:block'><FaBagShopping className='text-xl' />
        <sup className='absolute top-0 flex items-center justify-center w-5 h-5 text-xs text-white rounded-full -right-3 bg-amber-600'>0</sup>
        </div>
    </nav>
</header>
    );
};

export default Navbar;