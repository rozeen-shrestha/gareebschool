"use client";

import React, { useContext } from 'react';
import Link from 'next/link';
import { LanguageContext } from '@/components/LanguageContext'; // Importing the context

const Faculty = () => {
    const { language } = useContext(LanguageContext); // Getting the language from context

    const translations = {
        en: {
            title: "Our School Teachers",
            description: "Explore our outstanding school facilities that promote learning, growth, and development.",
            seeMore: "See More",
        },
        np: {
            title: "हाम्रो विद्यालयका शिक्षक",
            description: "हाम्रा उत्कृष्ट विद्यालयका सुविधाहरूको खोजी गर्नुहोस्, जसले सिकाइ, वृद्धि, र विकासलाई प्रवर्द्धन गर्दछ।",
            seeMore: "थप जान्नुहोस्",
        },
    };

    const facultyData = [
        {
            name: 'जोन डो',
            slug: 'john-doe',
            subject: 'कला र चित्रकला',
            description: 'सृजनात्मकताप्रति जोश राख्ने अनुभवी कला शिक्षक।',
            image: 'image_url_here_1',
        },
        {
            name: 'जेन स्मिथ',
            slug: 'jane-smith',
            subject: 'गणित',
            description: 'संख्याको प्रेम गर्ने समर्पित गणित शिक्षक।',
            image: 'image_url_here_2',
        },
        {
            name: 'एमिली जॉनसन',
            slug: 'emily-johnson',
            subject: 'विज्ञान',
            description: 'विद्यार्थीको सफलताप्रति प्रतिबद्ध विज्ञान प्रेमी।',
            image: 'image_url_here_3',
        },
        {
            name: 'माइकल ब्राउन',
            slug: 'michael-brown',
            subject: 'इतिहास',
            description: 'कथाकथनप्रति जोश राख्ने इतिहास शिक्षक।',
            image: 'image_url_here_4',
        },
        {
            name: 'सारा डेविस',
            slug: 'sarah-davis',
            subject: 'संगीत',
            description: 'संगीतको आनन्द बाँड्न समर्पित संगीत प्रेमी।',
            image: 'image_url_here_5',
        },
        // Add more faculty members here...
    ];

    return (
        <div className="container mx-auto py-8">
            <h2 className="text-center text-4xl font-bold mb-8 text-orange-500">{translations[language].title}</h2>
            <p className="text-center text-gray-600 mb-12">
                {translations[language].description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {facultyData.map((faculty, index) => (
                    <Link key={index} href={`/faculty/${faculty.slug}`}>
                        <div className="flex bg-pink-50 rounded-xl overflow-hidden shadow-lg p-4 cursor-pointer transition-transform transform hover:scale-105">
                            <div className="w-1/2 pr-4">
                                <h2 className="text-2xl font-bold text-teal-900">{faculty.subject}</h2>
                                <p className="text-gray-600">{faculty.description}</p>
                                <a
                                    href="#"
                                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mt-4 inline-block"
                                >
                                    {translations[language].seeMore}
                                </a>
                            </div>
                            <div className="w-1/2">
                                <img
                                    src={faculty.image}
                                    alt={faculty.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Faculty;
