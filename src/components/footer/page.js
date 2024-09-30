"use client";

import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../app/IMG/Logo.jpg';
import { LanguageContext } from '@/components/LanguageContext';

const CFOOTER = () => {
    const { language } = useContext(LanguageContext); // Getting the language from context

    const translations = {
        en: {
            schoolName: "Shree Saraswati Secondary School",
            linksHeader: "Useful Links",
            links: ["Home", "About Us", "Our Faculty", "Contact Us"],
            contactHeader: "Stay in Touch",
            address: "Dakaha-4, Sindhuli, Nepal",
            phone: "981199494 / 9707432740",
            email: "sssdakaha@gmail.com",
            rights: "© Shree Saraswati Secondary School, All Rights Reserved. Designed by",
            designer: "Innowix Workspace",
        },
        np: {
            schoolName: "श्री सरस्वती माध्यमिक विद्यालय",
            linksHeader: "उपयोगी लिङ्कहरू",
            links: ["मुख्य पृष्ठ", "हाम्रो बारेमा", "हाम्रो संकाय", "हाम्रो सम्पर्क गर्नुहोस्"],
            contactHeader: "सम्पर्कमा रहनुहोस्",
            address: "डाकाहा-४, सिन्धुली, नेपाल",
            phone: "९८११९९४४९४ / ९७०७४३२७४०",
            email: "sssdakaha@gmail.com",
            rights: "© श्री सरस्वती माध्यमिक विद्यालय, सबै अधिकार सुरक्षित। डिजाइन गरेका",
            designer: "Innowix Workspace",
        },
    };

    return (
        <div>
            <footer className="bg-[#F97316] text-white">
                <div className="max-w-screen-xl mx-auto px-4 py-8 md:py-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-6 bg-orange-600 rounded-lg shadow-md">
                            <div className="flex justify-center mb-4">
                                <Image src={Logo} alt="Academy Logo" className="h-24 object-contain" />
                            </div>
                            <h1 className="text-xl font-semibold mb-2 text-white">{translations[language].schoolName}</h1>
                            <div className="flex justify-center space-x-4 mt-4">
                                <a
                                    href="https://www.facebook.com/profile.php?id=100024889235482"
                                    className="text-white hover:text-gray-300 transition-colors duration-200"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.494v-9.285h-3.123v-3.622h3.123v-2.671c0-3.1 1.893-4.785 4.656-4.785 1.325 0 2.464.099 2.796.143v3.243h-1.919c-1.504 0-1.795.716-1.795 1.764v2.305h3.59l-.467 3.622h-3.123v9.285h6.127c.731 0 1.324-.593 1.324-1.324v-21.35c0-.731-.593-1.324-1.324-1.324z" /></svg>
                                </a>
                            </div>
                        </div>

                        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-bold mb-4">{translations[language].linksHeader}</h3>
                            <ul className="space-y-3">
                                {translations[language].links.map((link, index) => (
                                    <li key={index}>
                                        <Link href={`/${link.replace(/\s+/g, '').toLowerCase()}`} className="hover:underline transition-colors duration-200">
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-bold mb-4">{translations[language].contactHeader}</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center">
                                    <i className="fas fa-map-marker-alt w-5 h-5 mr-2"></i>
                                    {translations[language].address}
                                </li>
                                <li className="flex items-center">
                                    <i className="fas fa-phone w-5 h-5 mr-2"></i>
                                    {translations[language].phone}
                                </li>
                                <li className="flex items-center">
                                    <i className="fas fa-envelope w-5 h-5 mr-2"></i>
                                    {translations[language].email}
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="text-center mt-8 border-t border-gray-700 pt-4 text-sm">
                        {translations[language].rights} <a href="#" className="hover:underline text-gray-300 transition-colors duration-200">{translations[language].designer}</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default CFOOTER;
