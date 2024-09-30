"use client";

import React, { useContext } from 'react';
import { LanguageContext } from '@/components/LanguageContext'; // Importing the context

const FEATURES = () => {
    const { language } = useContext(LanguageContext); // Getting the language from context

    const translations = {
        en: {
            title: "Our School Facilities",
            description: "Explore our outstanding school facilities that promote learning, growth, and development.",
            facilities: [
                {
                    title: "School Bus",
                    description: "Safe and reliable transportation for our students, along with well-maintained school bus services.",
                    imgSrc: "https://images.prismic.io/ria-public-site/ZqvaAR5LeNNTxvB5_abTestingCashPickup.png",
                },
                {
                    title: "Playground",
                    description: "A safe and fun environment for children to play, make friends, and develop physical skills.",
                    imgSrc: "/path/to/playground-image.jpg",
                },
                {
                    title: "Healthy Canteen",
                    description: "Well-prepared nutritious meals that ensure the best food for students’ development.",
                    imgSrc: "/path/to/canteen-image.jpg",
                },
                {
                    title: "Positive Learning",
                    description: "Engaging and supportive educational programs to promote a love of learning in every student.",
                    imgSrc: "/path/to/positive-learning-image.jpg",
                },
            ],
        },
        np: {
            title: "हाम्रो विद्यालयका सुविधा",
            description: "हाम्रो उत्कृष्ट विद्यालयका सुविधाहरूको खोजी गर्नुहोस्, जसले सिकाइ, वृद्धि, र विकासलाई प्रवर्द्धन गर्दछ।",
            facilities: [
                {
                    title: "विद्यालय बस",
                    description: "हाम्रा विद्यार्थीहरूको लागि सुरक्षित र भरपर्दो यातायात, हाम्रो राम्रोसँग मर्मत गरिएका विद्यालय बस सेवासहित।",
                    imgSrc: "https://images.prismic.io/ria-public-site/ZqvaAR5LeNNTxvB5_abTestingCashPickup.png",
                },
                {
                    title: "खेल मैदान",
                    description: "बालबालिकाहरूका लागि सुरक्षित र रमाइलो वातावरण, जहाँ उनीहरू खेल्न, साथी बनाउन, र शारीरिक कौशल विकास गर्न सक्छन्।",
                    imgSrc: "/path/to/playground-image.jpg",
                },
                {
                    title: "स्वस्थ क्यान्टीन",
                    description: "सामग्रीको राम्रोसँग तयारी गरिएका पौष्टिक खाना, जसले विद्यार्थीहरूको विकासको लागि उत्तम खानाको सुनिश्चितता गर्दछ।",
                    imgSrc: "/path/to/canteen-image.jpg",
                },
                {
                    title: "सकारात्मक शिक्षण",
                    description: "प्रत्येक विद्यार्थीमा सिकाइको प्रेमको प्रवर्द्धन गर्नका लागि संलग्न र सहयोगी शैक्षिक कार्यक्रमहरू।",
                    imgSrc: "/path/to/positive-learning-image.jpg",
                },
            ],
        },
    };

    return (
        <div>
            <div className="container mx-auto px-4 py-12">
                <h2 className="text-center text-4xl font-bold mb-8 text-[#F97316]">{translations[language].title}</h2>
                <p className="text-center text-gray-600 mb-12">{translations[language].description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {translations[language].facilities.map((facility, index) => (
                        <div key={index} className="facility-card bg-white shadow-md rounded-lg text-center overflow-hidden transition transform hover:scale-105">
                            <img src={facility.imgSrc} alt={facility.title} className="w-full h-40 object-cover" />
                            <h3 className="text-xl font-semibold text-gray-800 mt-4">{facility.title}</h3>
                            <p className="mt-2 text-gray-600 p-2">{facility.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FEATURES;
