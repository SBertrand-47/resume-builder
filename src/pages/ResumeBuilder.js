import React, { useState, useMemo } from 'react'; // Import useMemo
import Header from '../components/Header';
import Form from '../components/Form';
import ResumePreview from '../components/ResumePreview';
import axios from 'axios';
import { FiDownload } from 'react-icons/fi';

const ResumeBuilder = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        location: '',
        linkedin: '',
        portfolio: '',
        education: [],
        experiences: [],
        projects: [],
        skills: [],
    });

    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false); // Add loading state

    const isSectionValid = (section) => {
        return Array.isArray(section) && section.some(item => Object.values(item).some(value => value?.toString().trim() !== ''));
    };

    const isFormDataValid = useMemo(() => {
        const { name, email, education, experiences, projects, skills } = formData;

        if (!name.trim() || !email.trim() || !email.includes('@')) {
            return false;
        }

        return (
            isSectionValid(education) ||
            isSectionValid(experiences) ||
            isSectionValid(projects) ||
            isSectionValid(skills)
        );
    }, [formData]); // Recompute validation only when formData changes

    const generatePDF = async () => {
        if (!isFormDataValid) {
            setErrorMessage(
                "Please make sure to provide your name, a valid email, and fill at least one section (education, experience, projects, or skills) with valid data."
            );
            return;
        }
    
        setIsLoading(true);
        try {
            const response = await axios.post(
                'https://resume-build-43ec79ce8b7c.herokuapp.com/generate_pdf',
                formData,
                { responseType: 'blob' } // Receive the response as a Blob
            );
    
            // Extract filename from the Content-Disposition header
            const contentDisposition = response.headers['content-disposition'];
            let filename = 'resume.pdf'; // Default fallback
            if (contentDisposition) {
                const matches = contentDisposition.match(/filename="([^"]+)"/);
                if (matches && matches[1]) {
                    filename = matches[1];
                }
            }
    
            // Create a Blob URL and download the file
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', filename); // Use the extracted filename
            document.body.appendChild(link);
            link.click();
            link.remove();
    
            setErrorMessage('');
        } catch (error) {
            if (error.response && error.response.data) {
                const { message, error: backendError } = error.response.data;
                console.error('Full Backend Response:', error.response.data);
                setErrorMessage(
                    message
                        ? `Backend Error: ${message}${backendError ? ` - ${backendError}` : ''}`
                        : "Unknown error occurred."
                );
            } else if (error.request) {
                console.error('No response from backend:', error.request);
                setErrorMessage('No response from the server. Please check your network or contact support.');
            } else {
                console.error('Error setting up request:', error.message);
                setErrorMessage('Unexpected client-side error. Please refresh the page and try again.');
            }
        } finally {
            setIsLoading(false);
        }
    };
    
    
    

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
    <Header />
    <div className="container mx-auto py-8 px-4">
        <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">
                Resume Builder
            </h1>
        </div>
        <div className="flex space-x-6">
            {/* Left Section */}
            <div className="w-2/3">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    {/* Form Component */}
                    <Form formData={formData} setFormData={setFormData} />
                    {errorMessage && (
                        <div className="mt-4 bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md shadow-md">
                            <p className="text-sm">{errorMessage}</p>
                        </div>
                    )}
                    {/* Generate Button */}
                    <div className="mt-6 flex justify-center">
                        <button
                            onClick={generatePDF}
                            className={`inline-flex items-center px-6 py-3 rounded-md shadow transition-all ${
                                isFormDataValid && !isLoading
                                    ? 'bg-indigo-500 text-white hover:bg-indigo-600 dark:bg-indigo-400 dark:hover:bg-indigo-500'
                                    : 'bg-gray-400 cursor-not-allowed'
                            }`}
                            disabled={!isFormDataValid || isLoading}
                        >
                            {isLoading ? (
                                <span className="flex items-center">
                                    <svg
                                        className="animate-spin h-5 w-5 mr-2 text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        ></circle>
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                        ></path>
                                    </svg>
                                    Generating...
                                </span>
                            ) : (
                                <>
                                    <FiDownload className="mr-2 text-xl" />
                                    Generate
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {/* Right Section */}
            <div className="w-1/3 h-screen overflow-auto sticky top-6">
                <ResumePreview formData={formData} />
            </div>
        </div>
    </div>
</div>

    );
};

export default ResumeBuilder;
