import React, { useState } from 'react';

const SyllabusNav = () => {
  const [activeTab, setActiveTab] = useState('Semester 1');
  const [activeSubject, setActiveSubject] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const semesters = ['Semester 1', 'Semester 2', 'Semester 3', 'Semester 4'];

  const SemesterData = {
    'Semester 1': {
      subjects: [
        { name: 'कला र चित्रकला', description: 'कला सम्बन्धी शिक्षाको जानकारी।' },
        { name: 'गणित', description: 'संख्याको प्रेम गर्ने समर्पित गणित शिक्षक।' },
      ],
      books: [
        { name: 'कला र चित्रकला पुस्तक', author: 'शिक्षक ए', publication: 'ABC पब्लिकेशन', year: 2021, image: 'https://via.placeholder.com/150' },
        { name: 'गणित १०१', author: 'प्रोफेसर बी', publication: 'XYZ पब्लिकेशन', year: 2022, image: 'https://via.placeholder.com/150' },
        { name: 'अर्थशास्त्र पुस्तक', author: 'शिक्षक सी', publication: 'DEF पब्लिकेशन', year: 2020, image: 'https://via.placeholder.com/150' },
        { name: 'विज्ञान पुस्तक', author: 'प्रोफेसर डी', publication: 'LMN पब्लिकेशन', year: 2019, image: 'https://via.placeholder.com/150' },
        { name: 'समाजशास्त्र पुस्तक', author: 'शिक्षक एफ', publication: 'QRS पब्लिकेशन', year: 2024, image: 'https://via.placeholder.com/150' },
        { name: 'संगीत पुस्तक', author: 'शिक्षक जी', publication: 'TUV पब्लिकेशन', year: 2023, image: 'https://via.placeholder.com/150' },
        { name: 'गणित १०२', author: 'प्रोफेसर एच', publication: 'UVW पब्लिकेशन', year: 2023, image: 'https://via.placeholder.com/150' },
        { name: 'फिजिक्स पुस्तक', author: 'शिक्षक आई', publication: 'XYZ पब्लिकेशन', year: 2022, image: 'https://via.placeholder.com/150' },
        { name: 'रसायन शास्त्र', author: 'प्रोफेसर जे', publication: 'LMN पब्लिकेशन', year: 2021, image: 'https://via.placeholder.com/150' },
        { name: 'इतिहास पुस्तक', author: 'शिक्षक क', publication: 'OPQ पब्लिकेशन', year: 2020, image: 'https://via.placeholder.com/150' },
        { name: 'भाषा पुस्तक', author: 'प्रोफेसर ल', publication: 'RST पब्लिकेशन', year: 2022, image: 'https://via.placeholder.com/150' },
        { name: 'सामाजिक अध्ययन', author: 'शिक्षक म', publication: 'UVW पब्लिकेशन', year: 2023, image: 'https://via.placeholder.com/150' },
        { name: 'विज्ञानको इतिहास', author: 'प्रोफेसर न', publication: 'XYZ पब्लिकेशन', year: 2019, image: 'https://via.placeholder.com/150' },
        { name: 'प्रयोगशाला गाइड', author: 'शिक्षक ओ', publication: 'DEF पब्लिकेशन', year: 2024, image: 'https://via.placeholder.com/150' },
        { name: 'छोटा कविता संग्रह', author: 'प्रोफेसर प', publication: 'GHI पब्लिकेशन', year: 2023, image: 'https://via.placeholder.com/150' },
      ],
    },
    'Semester 2': {
      subjects: [
        { name: 'कला र चित्रकला', description: 'कला सम्बन्धी शिक्षाको जानकारी।' },
        { name: 'गणित', description: 'संख्याको प्रेम गर्ने समर्पित गणित शिक्षक।' },
      ],
      books: [
        { name: 'कला र चित्रकला पुस्तक', author: 'शिक्षक ए', publication: 'ABC पब्लिकेशन', year: 2021, image: 'https://via.placeholder.com/150' },
        { name: 'गणित १०१', author: 'प्रोफेसर बी', publication: 'XYZ पब्लिकेशन', year: 2022, image: 'https://via.placeholder.com/150' },
        { name: 'अर्थशास्त्र पुस्तक', author: 'शिक्षक सी', publication: 'DEF पब्लिकेशन', year: 2020, image: 'https://via.placeholder.com/150' },
        { name: 'विज्ञान पुस्तक', author: 'प्रोफेसर डी', publication: 'LMN पब्लिकेशन', year: 2019, image: 'https://via.placeholder.com/150' },
        { name: 'समाजशास्त्र पुस्तक', author: 'शिक्षक एफ', publication: 'QRS पब्लिकेशन', year: 2024, image: 'https://via.placeholder.com/150' },
        { name: 'संगीत पुस्तक', author: 'शिक्षक जी', publication: 'TUV पब्लिकेशन', year: 2023, image: 'https://via.placeholder.com/150' },
        { name: 'गणित १०२', author: 'प्रोफेसर एच', publication: 'UVW पब्लिकेशन', year: 2023, image: 'https://via.placeholder.com/150' },
        { name: 'फिजिक्स पुस्तक', author: 'शिक्षक आई', publication: 'XYZ पब्लिकेशन', year: 2022, image: 'https://via.placeholder.com/150' },
        { name: 'रसायन शास्त्र', author: 'प्रोफेसर जे', publication: 'LMN पब्लिकेशन', year: 2021, image: 'https://via.placeholder.com/150' },
        { name: 'इतिहास पुस्तक', author: 'शिक्षक क', publication: 'OPQ पब्लिकेशन', year: 2020, image: 'https://via.placeholder.com/150' },
        { name: 'भाषा पुस्तक', author: 'प्रोफेसर ल', publication: 'RST पब्लिकेशन', year: 2022, image: 'https://via.placeholder.com/150' },
        { name: 'सामाजिक अध्ययन', author: 'शिक्षक म', publication: 'UVW पब्लिकेशन', year: 2023, image: 'https://via.placeholder.com/150' },
        { name: 'विज्ञानको इतिहास', author: 'प्रोफेसर न', publication: 'XYZ पब्लिकेशन', year: 2019, image: 'https://via.placeholder.com/150' },
        { name: 'प्रयोगशाला गाइड', author: 'शिक्षक ओ', publication: 'DEF पब्लिकेशन', year: 2024, image: 'https://via.placeholder.com/150' },
        { name: 'छोटा कविता संग्रह', author: 'प्रोफेसर प', publication: 'GHI पब्लिकेशन', year: 2023, image: 'https://via.placeholder.com/150' },
      ],
    },
    'Semester 3': {
      subjects: [
        { name: 'कला र चित्रकला', description: 'कला सम्बन्धी शिक्षाको जानकारी।' },
        { name: 'गणित', description: 'संख्याको प्रेम गर्ने समर्पित गणित शिक्षक।' },
      ],
      books: [
        { name: 'कला र चित्रकला पुस्तक', author: 'शिक्षक ए', publication: 'ABC पब्लिकेशन', year: 2021, image: 'https://via.placeholder.com/150' },
        { name: 'गणित १०१', author: 'प्रोफेसर बी', publication: 'XYZ पब्लिकेशन', year: 2022, image: 'https://via.placeholder.com/150' },
        { name: 'अर्थशास्त्र पुस्तक', author: 'शिक्षक सी', publication: 'DEF पब्लिकेशन', year: 2020, image: 'https://via.placeholder.com/150' },
        { name: 'विज्ञान पुस्तक', author: 'प्रोफेसर डी', publication: 'LMN पब्लिकेशन', year: 2019, image: 'https://via.placeholder.com/150' },
        { name: 'समाजशास्त्र पुस्तक', author: 'शिक्षक एफ', publication: 'QRS पब्लिकेशन', year: 2024, image: 'https://via.placeholder.com/150' },
        { name: 'संगीत पुस्तक', author: 'शिक्षक जी', publication: 'TUV पब्लिकेशन', year: 2023, image: 'https://via.placeholder.com/150' },
        { name: 'गणित १०२', author: 'प्रोफेसर एच', publication: 'UVW पब्लिकेशन', year: 2023, image: 'https://via.placeholder.com/150' },
        { name: 'फिजिक्स पुस्तक', author: 'शिक्षक आई', publication: 'XYZ पब्लिकेशन', year: 2022, image: 'https://via.placeholder.com/150' },
        { name: 'रसायन शास्त्र', author: 'प्रोफेसर जे', publication: 'LMN पब्लिकेशन', year: 2021, image: 'https://via.placeholder.com/150' },
        { name: 'इतिहास पुस्तक', author: 'शिक्षक क', publication: 'OPQ पब्लिकेशन', year: 2020, image: 'https://via.placeholder.com/150' },
        { name: 'भाषा पुस्तक', author: 'प्रोफेसर ल', publication: 'RST पब्लिकेशन', year: 2022, image: 'https://via.placeholder.com/150' },
        { name: 'सामाजिक अध्ययन', author: 'शिक्षक म', publication: 'UVW पब्लिकेशन', year: 2023, image: 'https://via.placeholder.com/150' },
        { name: 'विज्ञानको इतिहास', author: 'प्रोफेसर न', publication: 'XYZ पब्लिकेशन', year: 2019, image: 'https://via.placeholder.com/150' },
        { name: 'प्रयोगशाला गाइड', author: 'शिक्षक ओ', publication: 'DEF पब्लिकेशन', year: 2024, image: 'https://via.placeholder.com/150' },
        { name: 'छोटा कविता संग्रह', author: 'प्रोफेसर प', publication: 'GHI पब्लिकेशन', year: 2023, image: 'https://via.placeholder.com/150' },
      ],
    },
    'Semester 4': {
      subjects: [
        { name: 'कला र चित्रकला', description: 'कला सम्बन्धी शिक्षाको जानकारी।' },
        { name: 'गणित', description: 'संख्याको प्रेम गर्ने समर्पित गणित शिक्षक।' },
      ],
      books: [
        { name: 'कला र चित्रकला पुस्तक', author: 'शिक्षक ए', publication: 'ABC पब्लिकेशन', year: 2021, image: 'https://via.placeholder.com/150' },
        { name: 'गणित १०१', author: 'प्रोफेसर बी', publication: 'XYZ पब्लिकेशन', year: 2022, image: 'https://via.placeholder.com/150' },
        { name: 'अर्थशास्त्र पुस्तक', author: 'शिक्षक सी', publication: 'DEF पब्लिकेशन', year: 2020, image: 'https://via.placeholder.com/150' },
        { name: 'विज्ञान पुस्तक', author: 'प्रोफेसर डी', publication: 'LMN पब्लिकेशन', year: 2019, image: 'https://via.placeholder.com/150' },
        { name: 'समाजशास्त्र पुस्तक', author: 'शिक्षक एफ', publication: 'QRS पब्लिकेशन', year: 2024, image: 'https://via.placeholder.com/150' },
        { name: 'संगीत पुस्तक', author: 'शिक्षक जी', publication: 'TUV पब्लिकेशन', year: 2023, image: 'https://via.placeholder.com/150' },
        { name: 'गणित १०२', author: 'प्रोफेसर एच', publication: 'UVW पब्लिकेशन', year: 2023, image: 'https://via.placeholder.com/150' },
        { name: 'फिजिक्स पुस्तक', author: 'शिक्षक आई', publication: 'XYZ पब्लिकेशन', year: 2022, image: 'https://via.placeholder.com/150' },
        { name: 'रसायन शास्त्र', author: 'प्रोफेसर जे', publication: 'LMN पब्लिकेशन', year: 2021, image: 'https://via.placeholder.com/150' },
        { name: 'इतिहास पुस्तक', author: 'शिक्षक क', publication: 'OPQ पब्लिकेशन', year: 2020, image: 'https://via.placeholder.com/150' },
        { name: 'भाषा पुस्तक', author: 'प्रोफेसर ल', publication: 'RST पब्लिकेशन', year: 2022, image: 'https://via.placeholder.com/150' },
        { name: 'सामाजिक अध्ययन', author: 'शिक्षक म', publication: 'UVW पब्लिकेशन', year: 2023, image: 'https://via.placeholder.com/150' },
        { name: 'विज्ञानको इतिहास', author: 'प्रोफेसर न', publication: 'XYZ पब्लिकेशन', year: 2019, image: 'https://via.placeholder.com/150' },
        { name: 'प्रयोगशाला गाइड', author: 'शिक्षक ओ', publication: 'DEF पब्लिकेशन', year: 2024, image: 'https://via.placeholder.com/150' },
        { name: 'छोटा कविता संग्रह', author: 'प्रोफेसर प', publication: 'GHI पब्लिकेशन', year: 2023, image: 'https://via.placeholder.com/150' },
      ],
    },
  };

  const toggleSubject = (subjectName) => {
    setActiveSubject(activeSubject === subjectName ? null : subjectName);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="p-8 bg-blue-900 text-white">
      <div className="flex space-x-4 mb-6">
        {semesters.map((semester) => (
          <button
            key={semester}
            className={`px-4 py-2 rounded-md font-semibold ${activeTab === semester
                ? 'bg-gray-800 text-white'
                : 'bg-gray-700 text-gray-300'
              }`}
            onClick={() => {
              setActiveTab(semester);
              setActiveSubject(null);
              setDropdownOpen(false);
            }}
          >
            {semester}
          </button>
        ))}
      </div>

      <div className="p-6 bg-gray-800 rounded-md shadow-md">
        <h2 className="text-xl font-bold mb-4">{activeTab}</h2>

        {SemesterData[activeTab].subjects.map((subject, index) => (
          <div key={index} className="mb-4">
            <button
              className="w-full px-4 py-2 bg-gray-700 text-left font-semibold rounded-md text-white"
              onClick={() => toggleSubject(subject.name)}
            >
              {subject.name}
            </button>

            <div
              className={`transition-all duration-300 ease-in-out ${activeSubject === subject.name
                  ? 'max-h-40 opacity-100 mt-2 px-4 py-2 bg-gray-600 rounded-md'
                  : 'max-h-0 opacity-0 overflow-hidden'
                }`}
            >
              <p>{subject.description}</p>
            </div>
          </div>
        ))}

        <h3 className="text-lg font-bold mt-6 mb-4">Required Books</h3>
        <button
          className="w-full px-4 py-2 bg-gray-700 text-left font-semibold rounded-md text-white"
          onClick={toggleDropdown}
        >
          {dropdownOpen ? 'Hide Books' : 'Show Required Books'}
        </button>

        <div
          className={`transition-all duration-300 ease-in-out ${dropdownOpen ? 'max-h-80 opacity-100 mt-2 bg-gray-600 rounded-md' : 'max-h-0 opacity-0 overflow-hidden'
            }`}
          style={{ height: dropdownOpen ? 'auto' : '0' }} // Increase the height for better display
        >
          <div className="flex overflow-x-auto whitespace-nowrap p-4 space-x-4">
            {SemesterData[activeTab].books.map((book, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-48 bg-gray-700 p-2 rounded-md"
                style={{ flexBasis: 'auto' }} // Keeps cards side-by-side
              >
                <img
                  src={book.image}
                  alt={book.name}
                  className="w-full h-32 object-cover mb-2 rounded-t-md"
                />
                <div className="flex-grow">
                  <p className="font-semibold">{book.name}</p>
                  <p className="text-sm">Author: {book.author}</p>
                  <p className="text-sm">Publication: {book.publication}</p>
                  <p className="text-sm">Year: {book.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SyllabusNav;
