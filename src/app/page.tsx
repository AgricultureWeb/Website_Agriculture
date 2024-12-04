"use client";
import React, { useEffect, useContext } from "react";
import Sidebar from "../components/Sidebar";
import navigationContext from "@/context/navigationContext";
import UserContext from "@/context/userContext";

const page = () => {
  const navContext = useContext(navigationContext);

  if (!navContext) {
    console.log("Navigation context is not provided", navContext);

    console.error("Navigation context is not provided");
    return <div>Error: Navigation context is not provided.</div>;
  }

  const { currentComponent } = navContext;

  const userContext = useContext(UserContext);

  if (!userContext) {
    console.log("User context is not provided", userContext);

    console.error("User context is not provided");
    return <div>Error: User context is not provided.</div>;
  }

  const { getUserData } = userContext;

  return (
    <main className="lg:flex">
      <div className="">
        <Sidebar />
      </div>
      <div className="w-full">{currentComponent}</div>
    </main>
  );
};

export default page;
