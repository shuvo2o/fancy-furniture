import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        /* Section-er dimension Materials-er moto set kora holo */
        <footer className="mt-24 bg-secondary-bg dark:bg-gray-900">
            {/* Main Content Container: Materials-er moto same alignment */}
            <div className="px-4 pt-20 pb-12 mx-auto max-w-7xl section-container">
                <div className="grid grid-cols-1 gap-8 text-black sm:grid-cols-2 md:grid-cols-5 dark:text-white">
                    
                    {/* First Div: Logo and Description (Wider Column) */}
                    <div className="md:col-span-2">
                        <h2 className="mb-4 text-2xl font-bold">Panto</h2>
                        <p className="text-gray-600 md:mr-12 dark:text-gray-400">
                            YourCompany is dedicated to providing the best quality products to enhance your home and lifestyle. We combine style and comfort to transform your living spaces into modern sanctuaries.
                        </p>
                    </div>

                    {/* Second Div: Menu 1 */}
                    <div>
                        <h3 className="mb-4 text-xl font-semibold">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-600 transition hover:text-amber-500 dark:text-gray-400">About Us</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 transition hover:text-amber-500 dark:text-gray-400">Services</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 transition hover:text-amber-500 dark:text-gray-400">Contact</a>
                            </li>
                        </ul>
                    </div>

                    {/* Third Div: Menu 2 */}
                    <div>
                        <h3 className="mb-4 text-xl font-semibold">Customer Care</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-600 transition hover:text-amber-500 dark:text-gray-400">FAQ</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 transition hover:text-amber-500 dark:text-gray-400">Returns</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 transition hover:text-amber-500 dark:text-gray-400">Support</a>
                            </li>
                        </ul>
                    </div>

                    {/* Fourth Div: Social Media */}
                    <div>
                        <h3 className="mb-4 text-xl font-semibold">Follow Us</h3>
                        <div className="flex flex-col space-y-2">
                            <a href="#" className="flex items-center space-x-2 text-gray-600 transition hover:text-amber-500 dark:text-gray-400">
                                <FaFacebookF /> <span>Facebook</span>
                            </a>
                            <a href="#" className="flex items-center space-x-2 text-gray-600 transition hover:text-amber-500 dark:text-gray-400">
                                <FaTwitter /> <span>Twitter</span>
                            </a>
                            <a href="#" className="flex items-center space-x-2 text-gray-600 transition hover:text-amber-500 dark:text-gray-400">
                                <FaInstagram /> <span>Instagram</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Footer Border-t: Etao max-w-7xl er bhitore thakbe */}
                <div className="flex flex-col gap-4 pt-8 mt-12 text-sm text-gray-500 border-t border-gray-300 sm:flex-row sm:justify-between sm:items-center dark:border-gray-700">
                    <p> &copy; {new Date().getFullYear()} Panto. All rights reserved.</p>
                    <div className='flex gap-6'>
                        <Link to="/" className="transition hover:text-amber-500">Terms & Conditions</Link>
                        <Link to="/" className="transition hover:text-amber-500">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;