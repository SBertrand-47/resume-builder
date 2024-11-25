import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMoon, FiSun, FiHome, FiFileText, FiInfo } from 'react-icons/fi';
import { Dialog } from '@headlessui/react';
import { Player } from '@lottiefiles/react-lottie-player'; // Import Lottie Player
import aboutAnimation from '../animations/about.json'; // Import the animation file

const Header = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [isAboutOpen, setIsAboutOpen] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <>
            <header className="flex justify-between items-center p-4 bg-gray-800 text-white dark:bg-gray-900 shadow-md">
                {/* Logo */}
                <div
                    className="text-2xl font-extrabold flex items-center space-x-2 transform hover:rotate-1 transition-transform duration-200"
                    title="Free Resume Builder"
                >
                    <FiFileText size={28} className="text-yellow-400" />
                    <span>
                        Resume<span className="text-yellow-400">Wizard</span>
                    </span>
                </div>

                {/* Navigation */}
                <nav className="flex space-x-6 text-sm font-medium">
                    <Link
                        to="/"
                        className="flex items-center space-x-2 hover:text-yellow-400 transition-colors duration-200"
                    >
                        <FiHome size={18} />
                        <span>Home</span>
                    </Link>
                    <Link
                        to="/builder"
                        className="flex items-center space-x-2 hover:text-yellow-400 transition-colors duration-200"
                    >
                        <FiFileText size={18} />
                        <span>Build Resume</span>
                    </Link>
                    <button
                        onClick={() => setIsAboutOpen(true)}
                        className="flex items-center space-x-2 hover:text-yellow-400 transition-colors duration-200"
                    >
                        <FiInfo size={18} />
                        <span>About</span>
                    </button>
                </nav>

                {/* Dark Mode Toggle */}
                <button
                    onClick={toggleDarkMode}
                    className="flex items-center justify-center w-10 h-10 bg-gray-700 text-yellow-400 dark:bg-gray-600 dark:text-yellow-300 rounded-full shadow hover:bg-gray-600 dark:hover:bg-gray-500 transition-all"
                >
                    {darkMode ? (
                        <FiSun size={24} title="Switch to Light Mode" />
                    ) : (
                        <FiMoon size={24} title="Switch to Dark Mode" />
                    )}
                </button>
            </header>

            {/* About Modal */}
            <Dialog
                open={isAboutOpen}
                onClose={() => setIsAboutOpen(false)}
                className="fixed z-50 inset-0 overflow-y-auto flex items-center justify-center"
            >
                <div className="bg-black bg-opacity-50 fixed inset-0" />
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-lg mx-auto p-6 relative z-10">
                    {/* Modal Header */}
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                            About Us
                        </h2>
                        <button
                            onClick={() => setIsAboutOpen(false)}
                            className="text-gray-700 dark:text-gray-300 hover:text-red-500"
                        >
                            ✖
                        </button>
                    </div>

                    {/* Animation */}
                    <div className="flex justify-center mb-6">
                        <Player
                            autoplay
                            loop
                            src={aboutAnimation}
                            className="w-48 h-48"
                        />
                    </div>

                    {/* Modal Content */}
                    <p className="text-gray-700 dark:text-gray-300 text-center">
                        ResumeWizard is inspired by Jake's clean, minimalistic resume design, which has helped people land jobs at leading companies, including FAANG. 
                        The app is <span className="font-semibold text-indigo-600 dark:text-indigo-400">completely free</span>, with no strings attached.
                    </p>




                    {/* Close Button */}
                    <div className="mt-6 text-center">
                        <button
                            onClick={() => setIsAboutOpen(false)}
                            className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 dark:bg-indigo-400 dark:hover:bg-indigo-500 transition-all"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </Dialog>
        </>
    );
};

export default Header;
