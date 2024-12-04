"use client";
import React, { useState, useEffect, ReactNode } from "react";
import NavigationContext from "./navigationContext";
import HomeComponent from "../components/HomeComponent";
import AccountComponent from "../components/AccountComponent";
import SettingsComponent from "../components/SettingsComponent";
import TestComponent from "../components/TestComponent";
import NewsComponent from "../components/NewsComponent";
import SupportComponent from "../components/SupportComponent";
import PrivacyComponent from "../components/PrivacyComponent";
import HelpComponent from "../components/HelpComponent";
import { useRouter } from "next/navigation";

interface NavigationStateProps {
  children: ReactNode;
}

const NavigationState: React.FC<NavigationStateProps> = ({ children }) => {
  const router = useRouter();
  const [active, setActive] = useState<string>("home");
  const [prevActive, setPrevActive] = useState<string>("home");
  const [currentComponent, setCurrentComponent] = useState<ReactNode>(
    <HomeComponent />
  );
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);

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
          setCurrentComponent(
            <NewsComponent setActive={setActive} prevActive={prevActive} />
          );
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
    <NavigationContext.Provider
      value={{
        active,
        setActive,
        prevActive,
        setPrevActive,
        currentComponent,
        sidebarOpen,
        setSidebarOpen,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationState;
