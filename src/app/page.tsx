"use client";
import React, { useState } from "react";
import Sidebar from "@/components/Sidebar"; // Assuming the correct path is provided
import Home from "@/components/Home";
import Account from "@/components/Account";
import Settings from "@/components/Settings";
import FAQs from "@/components/FAQs";
import Help from "@/components/Help";
import SoilAnalysis from "@/components/SoilAnalysis";
import Support from "@/components/Support";
import PrivacyPolicy from "@/components/PrivacyPolicy";
import NewsFeed from "@/components/NewsFeed";

const Page: React.FC = () => {
  const [active, setActive] = useState<string>("Home");

  return (
    <div className="grid grid-cols-5">
      <div className="col-span-1">
        <Sidebar active={active} setActive={setActive}/>
      </div>
      <div className="col-span-4">
        {active === "Home" && <Home />}
        {active === "Account" && <Account />}
        {active === "Settings" && <Settings />}
        {active === "FAQs" && <FAQs />}
        {active === "Help" && <Help />}
        {active === "SoilAnalysis" && <SoilAnalysis />}
        {active === "Support" && <Support />}
        {active === "PrivacyPolicy" && <PrivacyPolicy />}
        {active === "NewsFeed" && <NewsFeed />}
      </div>
    </div>
  );
};

export default Page;