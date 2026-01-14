import React, { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaShoppingBag, FaTimes } from 'react-icons/fa'; // Using React Icons for hamburger menu
import { CartContext } from '../context/CartContext';

// Define an array of nav items
const navItems = [
    { path: '/', label: 'Furniture' },
    { path: '/shop', label: 'Shop' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact' },
];

// Reusable NavItems component with map function
const NavItems = ({ toggleMenu }) => {
    return (
        <ul className="flex flex-col items-center gap-8 md:flex-row md:space-x-8">
            {navItems.map((item, index) => (
                <li key={index} onClick={toggleMenu}>
                    <NavLink
                        to={item.path}
                        className={({ isActive }) => isActive ? 'text-primary font-bold' : 'hover:text-primary'}
                    >
                        {item.label}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
};

const Navbar = () => {
    const { cartCount } = useContext(CartContext);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle mobile menu

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState); // Correctly toggle menu state
    };

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition duration-300 ease-in-out ${isScrolled ? 'bg-white shadow-md text-black' : 'bg-transparent text-white'}`}>
            <nav className="container flex items-center justify-between px-4 py-6 mx-auto max-w-screen-2xl">
                <NavLink to="/" className="font-bold">Panto</NavLink>

                {/* Hamburger Icon for Mobile */}
                <div className="text-xl cursor-pointer md:hidden" onClick={toggleMenu}>
                    {isMenuOpen ? null : <FaBars />}
                </div>

                {/* Desktop Nav Items */}
                <div className="hidden md:flex">
                    <NavItems />
                </div>

                {/* Mobile Menu */}
                <div className={`fixed top-0 left-0 w-full h-screen bg-black bg-opacity-80 flex flex-col items-center justify-center space-y-8 text-white transition-transform transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
                    <div className="absolute text-xl cursor-pointer top-4 right-4" onClick={toggleMenu}>
                        <FaTimes />
                    </div>
                    <NavItems toggleMenu={toggleMenu} />
                </div>

                <div className="relative hidden cursor-pointer md:block">
                    <FaShoppingBag className="text-xl" />
                    <sup className="absolute top-0 flex items-center justify-center w-5 h-5 text-xs text-white rounded-full -right-3 bg-amber-500">
                        {cartCount}
                    </sup>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
