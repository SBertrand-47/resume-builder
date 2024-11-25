import React from 'react';

const ResumePreview = ({ formData }) => {
    return (
        <div className="border p-6 shadow-lg rounded-lg bg-white dark:bg-gray-800 transition-all">
            {/* Notice */}
            <div className="mb-4 text-sm bg-yellow-50 text-yellow-800 border border-yellow-300 rounded p-3">
                <p>
                    <strong>Note:</strong> The PDF output may slightly differ from this preview, which is optimized for a smaller display.
                </p>
            </div>

            {/* Personal Information */}
            <div className="border-b pb-4 mb-4">
                <h1 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
                    {formData.name || 'Your Name'}
                </h1>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                    {formData.location || 'Location'} | {formData.email || 'email@example.com'} | {formData.phone || '+1 123 456 7890'}
                </p>
                <p className="text-sm text-indigo-600 dark:text-indigo-400">
                    {formData.linkedin && (
                        <a href={formData.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
                            LinkedIn
                        </a>
                    )}
                    {formData.linkedin && formData.portfolio && ' | '}
                    {formData.portfolio && (
                        <a href={formData.portfolio} target="_blank" rel="noopener noreferrer" className="hover:underline">
                            Portfolio
                        </a>
                    )}
                </p>
            </div>

            {/* Education */}
            {Array.isArray(formData.education) && formData.education.length > 0 && (
                <div className="mb-6">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Education</h2>
                    {formData.education.map((edu, index) => (
                        <div key={index} className="mb-4">
                            <p className="font-medium text-gray-800 dark:text-gray-200">
                                {edu.degree || 'Degree'} – <span className="italic">{edu.university || 'University Name'}</span>
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{edu.educationDates || 'Dates'}</p>
                            <p className="text-sm text-gray-700 dark:text-gray-300">
                                {edu.relevantCourses || 'Relevant Courses'}
                            </p>
                        </div>
                    ))}
                </div>
            )}

            {/* Experiences */}
            {Array.isArray(formData.experiences) && formData.experiences.length > 0 && (
                <div className="mb-6">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Experience</h2>
                    {formData.experiences.map((experience, index) => (
                        <div key={index} className="mb-4">
                            <p className="font-medium text-gray-800 dark:text-gray-200">
                                {experience.jobTitle || 'Job Title'} –{' '}
                                <span className="italic">{experience.company || 'Company Name'}</span>
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{experience.jobDates || 'Dates'}</p>
                            <p className="italic text-sm text-gray-700 dark:text-gray-300">
                                Technologies: {experience.jobTechnologies || 'Technologies Used'}
                            </p>
                            <ul className="list-disc ml-6 text-sm text-gray-700 dark:text-gray-300">
                                {Array.isArray(experience.accomplishments) && experience.accomplishments.length > 0
                                    ? experience.accomplishments.map((item, idx) => (
                                          <li key={idx}>{item || 'Accomplishment'}</li>
                                      ))
                                    : <li>No accomplishments listed.</li>}
                            </ul>
                        </div>
                    ))}
                </div>
            )}

            {/* Projects */}
            {Array.isArray(formData.projects) && formData.projects.length > 0 && (
                <div className="mb-6">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Projects</h2>
                    {formData.projects.map((project, index) => (
                        <div key={index} className="mb-4">
                            <p className="font-medium text-gray-800 dark:text-gray-200">
                                {project.projectName || 'Project Name'} –{' '}
                                <span className="italic text-sm">{project.projectTech || 'Technologies'}</span>
                            </p>
                            <p className="text-sm text-gray-700 dark:text-gray-300">
                                {project.projectDescription || 'Project Description'}
                            </p>
                        </div>
                    ))}
                </div>
            )}

            {/* Technical Skills */}
            {Array.isArray(formData.skills) && formData.skills.length > 0 && (
                <div className="mb-6">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Technical Skills</h2>
                    {formData.skills.map((category, index) => (
                        <div key={index} className="mb-4">
                            <p className="font-medium text-gray-800 dark:text-gray-200">
                                {category.categoryName || 'Category Name'}:
                            </p>
                            <p className="text-sm text-gray-700 dark:text-gray-300">
                                {category.skills && category.skills.length > 0
                                    ? category.skills.join(', ')
                                    : 'No skills listed.'}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ResumePreview;
