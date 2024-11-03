"use client";
import React, { useState, ReactNode } from "react";
import RegisterationContext from "./registerationContext";

interface RegisterationStateProps {
  children: ReactNode;
}

const RegisterationState: React.FC<RegisterationStateProps> = ({ children }) => {
  const [location, setLocation] = useState<object | null>(null);

  return (
    <RegisterationContext.Provider value={{ location, setLocation }}>
      {children}
    </RegisterationContext.Provider>
  );
};

export default RegisterationState;