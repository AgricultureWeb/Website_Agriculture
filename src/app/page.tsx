"use client";
import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import HomeComponent from "../components/HomeComponent";
import AccountComponent from "../components/AccountComponent";
import SettingsComponent from "../components/SettingsComponent";
import TestComponent from "../components/TestComponent";
import NewsComponent from "../components/NewsComponent";
import SupportComponent from "../components/SupportComponent";
import PrivacyComponent from "../components/PrivacyComponent";
import HelpComponent from "../components/HelpComponent";

const page = () => {
  const [active, setActive] = useState("home");
  const [prevActive, setPrevActive] = useState("home");
  const [currentComponent, setCurrentComponent] = useState(<HomeComponent />);

  useEffect(() => {}, []);

  useEffect(() => {
    const handleActiveChange = (active: string) => {
      switch (active) {
        case "account":
          setCurrentComponent(<AccountComponent />);
          break;
        case "settings":
          setCurrentComponent(<SettingsComponent />);
          break;
        case "test":
          setCurrentComponent(<TestComponent />);
          break;
        case "news":
          setCurrentComponent(<NewsComponent setActive={setActive} prevActive={prevActive}/>);
          break;
        case "support":
          setCurrentComponent(<SupportComponent />);
          break;
        case "privacy":
          setCurrentComponent(<PrivacyComponent />);
          break;
        case "help":
          setCurrentComponent(<HelpComponent />);
          break;
        default:
          setCurrentComponent(<HomeComponent />);
      }
    };

    handleActiveChange(active);
  }, [active]);

  return (
    <main className="lg:flex">
      <div className="lg:w-1/5 ">
        <Sidebar active={active} setActive={setActive} setPrevActive={setPrevActive} />
      </div>
      <div className="lg:w-4/5">{currentComponent}</div>
    </main>
  );
};

export default page;
