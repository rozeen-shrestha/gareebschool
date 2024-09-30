// pages/faculty/page.js
import FACULTY from '@/components/faculty/page';
import CFOOTER from '@/components/footer/page';
import CNAV from '@/components/navbar/page';
import React from 'react';

const FacultyPage = () => {
  return (
    <div>
      <CNAV />
      <FACULTY />
      <CFOOTER />
    </div>
  );
};

export default FacultyPage;
