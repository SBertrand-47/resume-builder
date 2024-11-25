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

        try {
            const response = await axios.post('http://127.0.0.1:5000/generate_pdf', formData, {
                responseType: 'blob',
            });

            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'resume.pdf');
            document.body.appendChild(link);
            link.click();
            link.remove();
        } catch (error) {
            console.error('Error generating PDF:', error);
            setErrorMessage(
                "An unexpected error occurred while generating the PDF. Please try again."
            );
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
                    <div className="w-2/3 flex flex-col">
                        <div className="flex-1">
                            <Form formData={formData} setFormData={setFormData} />
                        </div>
                        {errorMessage && (
                            <div className="mt-4 w-full bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md shadow-md">
                                <p className="text-sm">{errorMessage}</p>
                            </div>
                        )}
                        <div className="mt-4 flex justify-center">
                            <button
                                onClick={generatePDF}
                                className={`inline-flex items-center px-6 py-3 rounded-md shadow transition-all ${
                                    isFormDataValid
                                        ? 'bg-indigo-500 text-white hover:bg-indigo-600 dark:bg-indigo-400 dark:hover:bg-indigo-500'
                                        : 'bg-gray-400 cursor-not-allowed'
                                }`}
                                disabled={!isFormDataValid}
                            >
                                <FiDownload className="mr-2 text-xl" />
                                Generate
                            </button>
                        </div>
                    </div>
                    <div className="w-1/3 h-screen overflow-auto sticky top-6">
                        <ResumePreview formData={formData} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResumeBuilder;
