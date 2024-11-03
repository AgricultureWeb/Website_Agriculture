"use client";
import React, { useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import RegisterationContext from "@/context/registerationContext";
import Sidebar from "@/components/Sidebar";
import navigationContext from "@/context/navigationContext";
import Image from "next/image";
import globe from "../../../../public/assets/icons/globe.svg";
import backArrow from "../../../../public/assets/icons/back-arrow.svg";
import RegistrationForm from "@/components/RegisterationForm";

const page = () => {
  const registerationContext = useContext(RegisterationContext);
  const navContext = useContext(navigationContext);

  if (!registerationContext) {
    console.error("Registeration context is not provided");
    return <div>Error: Registeration context is not provided.</div>;
  }

  if (!navContext) {
    console.error("Navigation context is not provided");
    return <div>Error: Navigation context is not provided.</div>;
  }

  const { setActive, prevActive } = navContext;
  const { location } = registerationContext;
  const router = useRouter();

  useEffect(() => {
    if (!location) {
      router.push("/register-soil-sample");
      console.error("Location is not provided");
      return;
    }
    console.log("Location", location);
  }, [location, router]);

  return (
    <div className="block lg:flex">
      <div className="w-full lg:w-fit">
        <Sidebar />
      </div>
      <div className="w-full">
        <div className="flex justify-between text-2xl px-3 py-2 border-b-2 border-b-gray-400">
          <button onClick={() => setActive(prevActive)}>
            {" "}
            <Image src={backArrow} width={16} height={16} alt="back" />
          </button>
          Sample Registeration
          <button>
            <Image src={globe} width={30} height={30} alt="globe" />
          </button>
        </div>
        <RegistrationForm location={location} />
      </div>
    </div>
  );
};

export default page;
