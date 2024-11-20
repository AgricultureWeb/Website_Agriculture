import React, { Dispatch, SetStateAction } from 'react';
import Image from "next/image";
// import {
//   account,
//   help,
//   home,
//   logout,
//   news,
//   support,
// } from "../../public/assets/icons/icons";

interface SidebarProps {
  active: string;
  setActive: Dispatch<SetStateAction<string>>;
}

const Sidebar: React.FC<SidebarProps> = ({ active, setActive }) => {
  return (
    <div className='h-[100vh] border-r-2 border-primary-green'>
      <Image
          src="/assets/images/logo.png"
          alt="Logo"
          width={300}
          height={150}
          className="mx-auto pt-5"
        />
      <ul className=' w-[200px] ml-14 mt-4 space-y-4'>
        <li className={` nav-button ${active === 'Home' ? 'bg-primary-green text-white' : 'hover:bg-gray-100'}`} onClick={() => setActive('Home')}>Home</li>
        <li className={` nav-button ${active === 'Account' ? 'bg-primary-green text-white' : 'hover:bg-gray-100'}`} onClick={() => setActive('Account')}>Account</li>
        <li className={` nav-button ${active === 'Settings' ? 'bg-primary-green text-white' : 'hover:bg-gray-100'}`} onClick={() => setActive('Settings')}>Settings</li>
        <li className={` nav-button ${active === 'FAQs' ? 'bg-primary-green text-white' : 'hover:bg-gray-100'}`} onClick={() => setActive('FAQs')}>FAQs</li>
        <li className={` nav-button ${active === 'Help' ? 'bg-primary-green text-white' : 'hover:bg-gray-100'}`} onClick={() => setActive('Help')}>Help</li>
        <li className={` nav-button ${active === 'SoilAnalysis' ? 'bg-primary-green text-white' : 'hover:bg-gray-100'}`} onClick={() => setActive('SoilAnalysis')}>Soil Analysis</li>
        <li className={` nav-button ${active === 'Support' ? 'bg-primary-green text-white' : 'hover:bg-gray-100'}`} onClick={() => setActive('Support')}>Support</li>
        <li className={` nav-button ${active === 'PrivacyPolicy' ? 'bg-primary-green text-white' : 'hover:bg-gray-100'}`} onClick={() => setActive('PrivacyPolicy')}>Privacy Policy</li>
        <li className={` nav-button ${active === 'NewsFeed' ? 'bg-primary-green text-white' : 'hover:bg-gray-100'}`} onClick={() => setActive('NewsFeed')}>News Feed</li>
      </ul>
    </div>
  );
}

export default Sidebar;