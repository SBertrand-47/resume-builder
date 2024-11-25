// Form.js
import React from 'react';
import InputField from './InputField';
import {
    FiPlus,
    FiTrash2,
    FiUser,
    FiMapPin,
    FiMail,
    FiPhone,
    FiLinkedin,
    FiGlobe,
    FiBriefcase,
    FiCalendar,
    FiBookOpen,
    FiCode,
    FiCheckCircle,
    FiFileText,
} from 'react-icons/fi';

const Form = ({ formData, setFormData }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // List of common degrees
  const degreeOptions = [
    'Bachelor of Science in Computer Science',
    'Bachelor of Arts in Psychology',
    'Master of Science in Electrical Engineering',
    'Master of Business Administration',
    'Doctor of Philosophy',
    'Associate of Arts',
    'Bachelor of Engineering',
    'Master of Arts in Teaching',
    // Add more common degrees as needed
  ];

  // List of common skills
  const skillOptions = [
    'Python',
    'JavaScript',
    'Java',
    'C++',
    'React',
    'Node.js',
    'Angular',
    'SQL',
    'NoSQL',
    'AWS',
    'Docker',
    'Kubernetes',
    'Git',
    'HTML',
    'CSS',
    'TypeScript',
    // Add more common skills as needed
  ];

  // Add new education
  const addEducation = () => {
    const newEducation = {
      degree: '',
      university: '',
      educationDates: '',
      relevantCourses: '',
    };
    setFormData({
      ...formData,
      education: [...(formData.education || []), newEducation],
    });
  };

  // Update education
  const updateEducation = (index, field, value) => {
    const updatedEducation = [...formData.education];
    updatedEducation[index][field] = value;
    setFormData({ ...formData, education: updatedEducation });
  };

  // Remove education
  const removeEducation = (index) => {
    const updatedEducation = [...formData.education];
    updatedEducation.splice(index, 1);
    setFormData({ ...formData, education: updatedEducation });
  };

  // Add new experience
  const addExperience = () => {
    const newExperience = {
      jobTitle: '',
      jobDates: '',
      company: '',
      jobTechnologies: '',
      accomplishments: [],
    };
    setFormData({
      ...formData,
      experiences: [...(formData.experiences || []), newExperience],
    });
  };

  // Update experience
  const updateExperience = (index, field, value) => {
    const updatedExperiences = [...formData.experiences];
    updatedExperiences[index][field] = value;
    setFormData({ ...formData, experiences: updatedExperiences });
  };

  // Remove experience
  const removeExperience = (index) => {
    const updatedExperiences = [...formData.experiences];
    updatedExperiences.splice(index, 1);
    setFormData({ ...formData, experiences: updatedExperiences });
  };

  // Add responsibility (accomplishment)
  const addAccomplishment = (experienceIndex) => {
    const updatedExperiences = [...formData.experiences];
    updatedExperiences[experienceIndex].accomplishments.push('');
    setFormData({ ...formData, experiences: updatedExperiences });
  };

  // Update responsibility (accomplishment)
  const updateAccomplishment = (experienceIndex, accomplishmentIndex, value) => {
    const updatedExperiences = [...formData.experiences];
    updatedExperiences[experienceIndex].accomplishments[accomplishmentIndex] = value;
    setFormData({ ...formData, experiences: updatedExperiences });
  };

  // Remove responsibility (accomplishment)
  const removeAccomplishment = (experienceIndex, accomplishmentIndex) => {
    const updatedExperiences = [...formData.experiences];
    updatedExperiences[experienceIndex].accomplishments.splice(accomplishmentIndex, 1);
    setFormData({ ...formData, experiences: updatedExperiences });
  };

  // Add new project
  const addProject = () => {
    const newProject = {
      projectName: '',
      projectTech: '',
      projectDescription: '',
    };
    setFormData({
      ...formData,
      projects: [...(formData.projects || []), newProject],
    });
  };

  // Update project
  const updateProject = (index, field, value) => {
    const updatedProjects = [...formData.projects];
    updatedProjects[index][field] = value;
    setFormData({ ...formData, projects: updatedProjects });
  };

  // Remove project
  const removeProject = (index) => {
    const updatedProjects = [...formData.projects];
    updatedProjects.splice(index, 1);
    setFormData({ ...formData, projects: updatedProjects });
  };

  // Add new skill category
  const addSkillCategory = () => {
    const newCategory = {
      categoryName: '',
      skills: [],
    };
    setFormData({
      ...formData,
      skills: [...(formData.skills || []), newCategory],
    });
  };

  // Remove skill category
  const removeSkillCategory = (categoryIndex) => {
    const updatedSkills = [...formData.skills];
    updatedSkills.splice(categoryIndex, 1);
    setFormData({ ...formData, skills: updatedSkills });
  };

  // Update skill category name
  const updateSkillCategoryName = (categoryIndex, value) => {
    const updatedSkills = [...formData.skills];
    updatedSkills[categoryIndex].categoryName = value;
    setFormData({ ...formData, skills: updatedSkills });
  };

  // Add a skill to a category
  const addSkillToCategory = (categoryIndex) => {
    const updatedSkills = [...formData.skills];
    updatedSkills[categoryIndex].skills.push('');
    setFormData({ ...formData, skills: updatedSkills });
  };

  // Remove a skill from a category
  const removeSkillFromCategory = (categoryIndex, skillIndex) => {
    const updatedSkills = [...formData.skills];
    updatedSkills[categoryIndex].skills.splice(skillIndex, 1);
    setFormData({ ...formData, skills: updatedSkills });
  };

  // Update a skill in a category
  const updateSkillInCategory = (categoryIndex, skillIndex, value) => {
    const updatedSkills = [...formData.skills];
    updatedSkills[categoryIndex].skills[skillIndex] = value;
    setFormData({ ...formData, skills: updatedSkills });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
      {/* Header */}
      <h1 className="text-3xl font-bold text-center mb-8 text-indigo-600 dark:text-indigo-400">
        Create Your Resume
      </h1>

      {/* Personal Information */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
          Personal Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField
            label="Full Name"
            value={formData.name}
            onChange={handleInputChange}
            name="name"
            placeholder="John Doe"
            icon={FiUser}
          />
          <InputField
            label="Location"
            value={formData.location}
            onChange={handleInputChange}
            name="location"
            placeholder="City, State"
            icon={FiMapPin}
          />
          <InputField
            label="Email"
            value={formData.email}
            onChange={handleInputChange}
            name="email"
            placeholder="email@example.com"
            type="email"
            icon={FiMail}
          />
          <InputField
            label="Phone"
            value={formData.phone}
            onChange={handleInputChange}
            name="phone"
            placeholder="+1 123 456 7890"
            type="tel"
            icon={FiPhone}
          />
          <InputField
            label="LinkedIn"
            value={formData.linkedin}
            onChange={handleInputChange}
            name="linkedin"
            placeholder="https://linkedin.com/in/username"
            icon={FiLinkedin}
          />
          <InputField
            label="Portfolio"
            value={formData.portfolio}
            onChange={handleInputChange}
            name="portfolio"
            placeholder="https://yourportfolio.com"
            icon={FiGlobe}
          />
        </div>
      </section>

      {/* Education */}
      <section className="mb-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Education</h2>
          <button
            type="button"
            onClick={addEducation}
            className="flex items-center px-4 py-2 bg-green-500 text-white rounded-md shadow hover:bg-green-600 transition-colors"
          >
            <FiPlus className="mr-2" /> Add Education
          </button>
        </div>
        {Array.isArray(formData.education) &&
          formData.education.map((edu, index) => (
            <div
              key={index}
              className="mb-6 p-6 bg-gray-50 dark:bg-gray-800 rounded-md shadow"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300">
                  Education {index + 1}
                </h3>
                <button
                  type="button"
                  onClick={() => removeEducation(index)}
                  className="text-red-500 hover:text-red-600 transition-colors"
                >
                  <FiTrash2 size={20} />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Degree Field with Datalist */}
                <div className="relative">
                  <InputField
                    label="Degree"
                    value={edu.degree}
                    onChange={(e) => updateEducation(index, 'degree', e.target.value)}
                    name={`degree-${index}`}
                    placeholder="Select or type your degree"
                    icon={FiBookOpen}
                    list={`degree-options-${index}`} // Reference the datalist
                  />
                  {/* Datalist for Degree Options */}
                  <datalist id={`degree-options-${index}`}>
                    {degreeOptions.map((option, idx) => (
                      <option key={idx} value={option} />
                    ))}
                  </datalist>
                </div>
                <InputField
                  label="University"
                  value={edu.university}
                  onChange={(e) => updateEducation(index, 'university', e.target.value)}
                  name={`university-${index}`}
                  placeholder="University Name"
                  icon={FiBriefcase}
                />
                <InputField
                  label="Dates"
                  value={edu.educationDates}
                  onChange={(e) => updateEducation(index, 'educationDates', e.target.value)}
                  name={`educationDates-${index}`}
                  placeholder="Aug. 2019 – May 2023"
                  icon={FiCalendar}
                />
                <InputField
                  label="Relevant Courses"
                  value={edu.relevantCourses}
                  onChange={(e) => updateEducation(index, 'relevantCourses', e.target.value)}
                  name={`relevantCourses-${index}`}
                  placeholder="Data Structures, Algorithms, Cryptography"
                  icon={FiBookOpen}
                />
              </div>
            </div>
          ))}
      </section>

      {/* Experience */}
      <section className="mb-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
            Experience
          </h2>
          <button
            type="button"
            onClick={addExperience}
            className="flex items-center px-4 py-2 bg-green-500 text-white rounded-md shadow hover:bg-green-600 transition-colors"
          >
            <FiPlus className="mr-2" /> Add Experience
          </button>
        </div>
        {Array.isArray(formData.experiences) &&
          formData.experiences.map((experience, index) => (
            <div
              key={index}
              className="mb-6 p-6 bg-gray-50 dark:bg-gray-800 rounded-md shadow"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300">
                  Experience {index + 1}
                </h3>
                <button
                  type="button"
                  onClick={() => removeExperience(index)}
                  className="text-red-500 hover:text-red-600 transition-colors"
                >
                  <FiTrash2 size={20} />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField
                  label="Job Title"
                  value={experience.jobTitle}
                  onChange={(e) => updateExperience(index, 'jobTitle', e.target.value)}
                  name={`jobTitle-${index}`}
                  placeholder="Software Engineer Intern"
                  icon={FiBriefcase}
                />
                <InputField
                  label="Company"
                  value={experience.company}
                  onChange={(e) => updateExperience(index, 'company', e.target.value)}
                  name={`company-${index}`}
                  placeholder="Company Name"
                  icon={FiGlobe}
                />
                <InputField
                  label="Dates"
                  value={experience.jobDates}
                  onChange={(e) => updateExperience(index, 'jobDates', e.target.value)}
                  name={`jobDates-${index}`}
                  placeholder="June 2022 – Dec. 2022"
                  icon={FiCalendar}
                />
                <InputField
                  label="Technologies Used"
                  value={experience.jobTechnologies}
                  onChange={(e) =>
                    updateExperience(index, 'jobTechnologies', e.target.value)
                  }
                  name={`jobTechnologies-${index}`}
                  placeholder="Python, Django, AWS"
                  icon={FiCode}
                />
              </div>
              {/* Responsibilities */}
              <div className="mt-6">
                <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  Responsibilities
                </h4>
                {Array.isArray(experience.accomplishments) &&
                  experience.accomplishments.map((accomplishment, accIndex) => (
                    <div key={accIndex} className="flex items-center mb-4">
                      <InputField
                        label={`Responsibility ${accIndex + 1}`}
                        value={accomplishment}
                        onChange={(e) =>
                          updateAccomplishment(index, accIndex, e.target.value)
                        }
                        name={`accomplishment-${index}-${accIndex}`}
                        placeholder="Describe your responsibility or achievement"
                        icon={FiCheckCircle}
                        textarea // Use a textarea for longer text
                      />
                      <button
                        type="button"
                        onClick={() => removeAccomplishment(index, accIndex)}
                        className="ml-2 text-red-500 hover:text-red-600 transition-colors"
                      >
                        <FiTrash2 size={18} />
                      </button>
                    </div>
                  ))}
                <button
                  type="button"
                  onClick={() => addAccomplishment(index)}
                  className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 transition-colors"
                >
                  <FiPlus className="mr-2" /> Add Responsibility
                </button>
              </div>
            </div>
          ))}
      </section>

      {/* Projects */}
      <section className="mb-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Projects</h2>
          <button
            type="button"
            onClick={addProject}
            className="flex items-center px-4 py-2 bg-green-500 text-white rounded-md shadow hover:bg-green-600 transition-colors"
          >
            <FiPlus className="mr-2" /> Add Project
          </button>
        </div>
        {Array.isArray(formData.projects) &&
          formData.projects.map((project, index) => (
            <div
              key={index}
              className="mb-6 p-6 bg-gray-50 dark:bg-gray-800 rounded-md shadow"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300">
                  Project {index + 1}
                </h3>
                <button
                  type="button"
                  onClick={() => removeProject(index)}
                  className="text-red-500 hover:text-red-600 transition-colors"
                >
                  <FiTrash2 size={20} />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField
                  label="Project Name"
                  value={project.projectName}
                  onChange={(e) => updateProject(index, 'projectName', e.target.value)}
                  name={`projectName-${index}`}
                  placeholder="Project Name"
                  icon={FiFileText}
                />
                <InputField
                  label="Technologies"
                  value={project.projectTech}
                  onChange={(e) => updateProject(index, 'projectTech', e.target.value)}
                  name={`projectTech-${index}`}
                  placeholder="React, Flask, PostgreSQL"
                  icon={FiCode}
                />
                <div className="md:col-span-2">
                  <InputField
                    label="Description"
                    value={project.projectDescription}
                    onChange={(e) =>
                      updateProject(index, 'projectDescription', e.target.value)
                    }
                    name={`projectDescription-${index}`}
                    placeholder="Developed a platform for..."
                    icon={FiFileText}
                    textarea // Use a textarea for longer text
                  />
                </div>
              </div>
            </div>
          ))}
      </section>

      {/* Technical Skills */}
      <section className="mb-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
            Technical Skills
          </h2>
          <button
            type="button"
            onClick={addSkillCategory}
            className="flex items-center px-4 py-2 bg-green-500 text-white rounded-md shadow hover:bg-green-600 transition-colors"
          >
            <FiPlus className="mr-2" /> Add Skill Category
          </button>
        </div>
        {Array.isArray(formData.skills) &&
          formData.skills.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="mb-6 p-6 bg-gray-50 dark:bg-gray-800 rounded-md shadow"
            >
              <div className="flex justify-between items-center mb-4">
                <InputField
                  label="Category Name"
                  value={category.categoryName}
                  onChange={(e) => updateSkillCategoryName(categoryIndex, e.target.value)}
                  name={`categoryName-${categoryIndex}`}
                  placeholder="e.g., Languages & Frameworks"
                  icon={FiCode}
                />
                <button
                  type="button"
                  onClick={() => removeSkillCategory(categoryIndex)}
                  className="text-red-500 hover:text-red-600 transition-colors"
                >
                  <FiTrash2 size={20} />
                </button>
              </div>
              {/* Skills */}
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="flex items-center mb-4">
                  {/* Skill Field with Datalist */}
                  <div className="relative flex-grow">
                    <InputField
                      label={`Skill ${skillIndex + 1}`}
                      value={skill}
                      onChange={(e) =>
                        updateSkillInCategory(categoryIndex, skillIndex, e.target.value)
                      }
                      name={`skill-${categoryIndex}-${skillIndex}`}
                      placeholder="Select or type a skill"
                      icon={FiCheckCircle}
                      list={`skill-options-${categoryIndex}-${skillIndex}`} // Reference the datalist
                    />
                    {/* Datalist for Skill Options */}
                    <datalist id={`skill-options-${categoryIndex}-${skillIndex}`}>
                      {skillOptions.map((option, idx) => (
                        <option key={idx} value={option} />
                      ))}
                    </datalist>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeSkillFromCategory(categoryIndex, skillIndex)}
                    className="ml-2 text-red-500 hover:text-red-600 transition-colors"
                  >
                    <FiTrash2 size={18} />
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => addSkillToCategory(categoryIndex)}
                className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 transition-colors"
              >
                <FiPlus className="mr-2" /> Add Skill
              </button>
            </div>
          ))}
      </section>
    </div>
  );
};

export default Form;
