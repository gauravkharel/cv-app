import  { useState } from 'react';

const TopNavBar = () => {
  const [selectedSections, setSelectedSections] = useState([]);

  const toggleSection = (section) => {
    if (selectedSections.includes(section)) {
      setSelectedSections(selectedSections.filter((item) => item !== section));
    } else {
      setSelectedSections([...selectedSections, section]);
    }
  };

  return (
    <nav className="bg-gray-500 p-4">
      <div className="flex justify-center space-x-4">
        <button
          onClick={() => toggleSection('Personal Details')}
          className={`${
            selectedSections.includes('Personal Details')
              ? 'bg-blue-700 text-white'
              : 'text-blue-100'
          } px-4 py-2 rounded hover:bg-blue-700 hover:text-white transition duration-300 ease-in-out`}
        >
          Personal Details
        </button>
        <button
          onClick={() => toggleSection('Education')}
          className={`${
            selectedSections.includes('Education')
              ? 'bg-blue-700 text-white'
              : 'text-blue-100'
          } px-4 py-2 rounded hover:bg-blue-700 hover:text-white transition duration-300 ease-in-out`}
        >
          Education
        </button>
        <button
          onClick={() => toggleSection('Experience')}
          className={`${
            selectedSections.includes('Experience')
              ? 'bg-blue-700 text-white'
              : 'text-blue-100'
          } px-4 py-2 rounded hover:bg-blue-700 hover:text-white transition duration-300 ease-in-out`}
        >
          Experience
        </button>
        <button
          onClick={() => toggleSection('Personal Projects')}
          className={`${
            selectedSections.includes('Personal Projects')
              ? 'bg-blue-700 text-white'
              : 'text-blue-100'
          } px-4 py-2 rounded hover:bg-blue-700 hover:text-white transition duration-300 ease-in-out`}
        >
          Personal Projects
        </button>
      </div>
    </nav>
  );
};

export default TopNavBar;
