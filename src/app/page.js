"use client"
import CONTACT from '@/components/contact/page';
import Faculty from '@/components/faculty/page';
import FEATURES from '@/components/features/page';
import CFOOTER from '@/components/footer/page';
import CNAV from '@/components/navbar/page';
import VISION from '@/components/vision/page';
import React, { useContext } from 'react';
import { LanguageContext } from '@/components/LanguageContext'; // Assuming you set up a context

const MainPage = () => {
  const { language } = useContext(LanguageContext); // Accessing language from context

  const translations = {
    en: {
      schoolName: "Shree Saraswati Secondary School",
      slogan: "Building the future through education!",
      contactButton: "Contact Us",
    },
    np: {
      schoolName: "श्री सरस्वती माध्यमिक विद्यालय",
      slogan: "सिक्षा सँगै, भविष्यको निर्माण!",
      contactButton: "सम्पर्क गर्नुहोस्",
    },
  };

  return (
    <div>
      <CNAV />
      {/* Hero Section */}
      <div className="relative w-full h-[400px]" id="home">
        <div className="absolute inset-0">
          <img
            src="https://academic.ria.edu.np/storage/banner/YHp87KUT4EBxPVFMeGmfbZyubtFkmBYW4TMEkwoa.jpg"
            alt="Background Image"
            className="object-cover object-center w-full h-full"
          />
        </div>
        <div className="absolute inset-9 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-4 md:mb-0">
            {/* Dynamic Translation for School name and slogan */}
            <h1 className="text-grey-700 font-medium text-4xl md:text-5xl leading-tight mb-2">
              {translations[language].schoolName}
            </h1>
            <p className="font-regular text-xl mb-8 mt-4">{translations[language].slogan}</p>
            <a
              href="#contactUs"
              className="px-6 py-3 bg-[#F97316] text-white font-medium rounded-full hover:bg-[#c09858] transition duration-200"
            >
              {translations[language].contactButton}
            </a>
          </div>
        </div>
      </div>

      {/* Other sections of the website */}
      <FEATURES language={language} />
      <VISION language={language} />
      <Faculty language={language} />
      <CONTACT language={language} />
      <CFOOTER language={language} />
    </div>
  );
};

export default MainPage;
