import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMoon, FiSun, FiHome, FiFileText } from 'react-icons/fi'; // Import icons from react-icons

const Header = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        // Set default theme to light mode
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
    );
};

export default Header;
