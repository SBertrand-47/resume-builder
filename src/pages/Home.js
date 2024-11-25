import React from 'react';
import { Link } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';
import Header from '../components/Header';
import writingAnimation from '../animations/writting.json';
import arrowAnimation from '../animations/arrow.json';
import pdfAnimation from '../animations/pdf.json';
import { HiArrowNarrowRight } from 'react-icons/hi'; // React icon for the "Get Started" button

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
            {/* Include the Header */}
            <Header />
            <div className="flex flex-col items-center justify-center text-center p-10">
                {/* Lottie Animation Steps */}
                <div className="flex items-center space-x-4">
                    {/* Step 1: Writing */}
                    <div className="flex flex-col items-center">
                        <Player
                            autoplay
                            loop
                            src={writingAnimation}
                            className="w-32 h-32"
                        />
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mt-2">
                            Step 1: Write
                        </p>
                    </div>

                    {/* Arrow */}
                    <Player
                        autoplay
                        loop
                        src={arrowAnimation}
                        className="w-16 h-16"
                    />

                    {/* Step 2: PDF */}
                    <div className="flex flex-col items-center">
                        <Player
                            autoplay
                            loop
                            src={pdfAnimation}
                            className="w-32 h-32"
                        />
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mt-2">
                            Step 2: PDF
                        </p>
                    </div>
                </div>

                {/* Title and CTA */}
                <h1 className="text-4xl font-bold text-indigo-700 dark:text-indigo-300 mt-6">
                    Create Your Free Resume
                </h1>
                <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
                    Build a professional resume in minutes. No cost, no hassle.
                </p>
                <Link to="/builder">
                    <button className="mt-6 px-6 py-3 bg-indigo-500 text-white rounded-md shadow-md hover:bg-indigo-600 dark:bg-indigo-400 dark:hover:bg-indigo-500 transition-all flex items-center space-x-2">
                        <span>Get Started</span>
                        <HiArrowNarrowRight size={20} />
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Home;
