// src/app/faculty/[slug]/page.js
'use client';
import CFOOTER from '@/components/footer/page';
import CNAV from '@/components/navbar/page';
import SyllabusNav from '@/components/Syllabus/page';
import { useEffect, useState, useContext } from 'react';
import { LanguageContext } from '@/components/LanguageContext'; // Ensure this path is correct

const FacultyDetail = ({ params }) => {
  const { slug } = params;
  const { language } = useContext(LanguageContext); // Getting the language from context
  const [faculty, setFaculty] = useState(null);

  const facultyData = [
    {
      name: { en: 'John Doe', np: 'जोन डो' },
      slug: 'john-doe',
      subject: { en: 'Engineering', np: 'इन्जिनियरिङ' },
      description: { en: 'An experienced art teacher with a passion for creativity.', np: 'सृजनात्मकताप्रति जोश राख्ने अनुभवी कला शिक्षक।' },
      image: 'https://cdnstorage.sendbig.com/unreal/female.webp',
      email: 'john.doe@example.com',
      phone: '+1234567890',
      duration: { en: '4 Years / 8 Semesters', np: '४ वर्ष / ८ सेमेस्टर' },
      career: { en: 'Engineer', np: 'ईन्जिनियर' },
      largedescription: {
        en: 'Engineering involves the design, testing, and construction of machines, structures, and processes using mathematics and science. Its study can lead to rewarding careers. Engineering is a discipline dedicated to problem-solving.',
        np: 'इन्जिनियरिङ भनेको गणित र विज्ञान प्रयोग गरेर मेसिन, संरचना र प्रक्रियाहरूको डिजाइन, परीक्षण र निर्माण हो। यसको अध्ययनले इनामदायी क्यारियरको नेतृत्व गर्न सक्छ। इन्जिनियरिङ समस्या समाधान गर्न समर्पित एक अनुशासन हो।'
      }
    },
    {
      name: { en: 'Jane Smith', np: 'जेन स्मिथ' },
      slug: 'jane-smith',
      subject: { en: 'Mathematics', np: 'गणित' },
      description: { en: 'A dedicated math teacher with a love for numbers.', np: 'संख्याको प्रेम गर्ने समर्पित गणित शिक्षक।' },
      image: 'https://cdnstorage.sendbig.com/unreal/female.webp',
      email: 'jane.smith@example.com',
      phone: '+0987654321',
      duration: { en: '4 Years / 8 Semesters', np: '४ वर्ष / ८ सेमेस्टर' },
      career: { en: 'Engineer', np: 'ईन्जिनियर' },
      largedescription: { en: ' ', np: ' ' }
    },
    {
      name: { en: 'Emily Johnson', np: 'एमिली जॉनसन' },
      slug: 'emily-johnson',
      subject: { en: 'Science', np: 'विज्ञान' },
      description: { en: 'A committed science lover dedicated to student success.', np: 'विद्यार्थीको सफलताप्रति प्रतिबद्ध विज्ञान प्रेमी।' },
      image: 'https://cdnstorage.sendbig.com/unreal/female.webp',
      email: 'emily.johnson@example.com',
      phone: '+1122334455',
      duration: { en: '4 Years / 8 Semesters', np: '४ वर्ष / ८ सेमेस्टर' },
      career: { en: 'Engineer', np: 'ईन्जिनियर' },
      largedescription: { en: ' ', np: ' ' }
    },
    {
      name: { en: 'Michael Brown', np: 'माइकल ब्राउन' },
      slug: 'michael-brown',
      subject: { en: 'History', np: 'इतिहास' },
      description: { en: 'A history teacher with a passion for storytelling.', np: 'कथाकथनप्रति जोश राख्ने इतिहास शिक्षक।' },
      image: 'https://cdnstorage.sendbig.com/unreal/female.webp',
      email: 'michael.brown@example.com',
      phone: '+2233445566',
      duration: { en: '4 Years / 8 Semesters', np: '४ वर्ष / ८ सेमेस्टर' },
      career: { en: 'Engineer', np: 'ईन्जिनियर' },
      largedescription: { en: ' ', np: ' ' }
    },
    {
      name: { en: 'Sarah Davis', np: 'सारा डेविस' },
      slug: 'sarah-davis',
      subject: { en: 'Music', np: 'संगीत' },
      description: { en: 'A music lover dedicated to sharing the joy of music.', np: 'संगीतको आनन्द बाँड्न समर्पित संगीत प्रेमी।' },
      image: 'https://cdnstorage.sendbig.com/unreal/female.webp',
      email: 'sarah.davis@example.com',
      phone: '+3344556677',
      duration: { en: '4 Years / 8 Semesters', np: '४ वर्ष / ८ सेमेस्टर' },
      career: { en: 'Engineer', np: 'ईन्जिनियर' },
      largedescription: { en: ' ', np: ' ' }
    }
  ];

  useEffect(() => {
    const foundFaculty = facultyData.find((item) => item.slug === slug);
    setFaculty(foundFaculty);
  }, [slug]);

  if (!faculty) {
    return <div>लोड हुँदैछ...</div>; // Show loading state while data is being fetched
  }

  return (
    <div>
      <CNAV />
      <div className="relative bg-blue-900 text-white py-12 px-6">
        <div className="absolute inset-0 bg-cover bg-center opacity-50"></div>

        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold">{faculty.subject[language]}</h1>
          <p className="mt-2 text-lg">{faculty.description[language]}</p>

          <div className="flex justify-center space-x-6 mt-6">
            <div className="flex items-center">
              <p className="text-md">अवधि: <span className="font-semibold">{faculty.duration[language]}</span></p>
            </div>
            <div className="flex items-center">
              <p className="text-md">पेशा: <span className="font-semibold">{faculty.career[language]}</span></p>
            </div>
          </div>

          <div className="mt-8 space-x-4">
            <a href="#" className="bg-[#F97316] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#c09858] transition">भर्ना लिनुहोस्</a>
          </div>
        </div>
      </div>
      <div className="bg-white p-6">
        <h2 className="text-lg font-bold text-blue-600 mb-4">Description</h2>

        <p className="text-base text-gray-800 mb-4">
          {faculty.largedescription[language]}
        </p>
      </div>
      <SyllabusNav />
      <CFOOTER />
    </div>
  );
};

export default FacultyDetail;
