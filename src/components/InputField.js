// InputField.js
import React from 'react';

const InputField = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  icon: Icon,
  type = 'text',
  textarea,
  list, // Add list prop
}) => (
  <div className="flex flex-col">
    <label className="mb-1 text-gray-700 dark:text-gray-300">{label}</label>
    <div className="relative">
      {Icon && (
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon className="text-gray-400" />
        </div>
      )}
      {textarea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`${
            Icon ? 'pl-10' : ''
          } py-2 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full bg-white dark:bg-gray-700 dark:text-gray-200`}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          list={list} // Add list attribute
          className={`${
            Icon ? 'pl-10' : ''
          } py-2 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full bg-white dark:bg-gray-700 dark:text-gray-200`}
        />
      )}
    </div>
  </div>
);

export default InputField;
