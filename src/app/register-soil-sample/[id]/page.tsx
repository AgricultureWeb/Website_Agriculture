"use client";
import React, { useEffect, useContext, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import navigationContext from "@/context/navigationContext";
import Image from "next/image";
import globe from "../../../../public/assets/icons/globe.svg";
import backArrow from "../../../../public/assets/icons/back-arrow.svg";
import RegistrationForm from "@/components/RegisterationForm";
import labContext from "@/context/labContext";

const page = () => {
  const navContext = useContext(navigationContext);
  const labcontext = useContext(labContext);
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const { id } = params;
  const [lab, setLab] = useState<any>({});

  if (!navContext) {
    console.error("Navigation context is not provided");
    return <div>Error: Navigation context is not provided.</div>;
  }
  if (!labcontext) {
    console.error("Lab context is not provided");
    return <div>Error: Lab context is not provided.</div>;
  }

  const { getLab } = labcontext;

  const { setActive, prevActive } = navContext;

  useEffect(() => {
    if (!id) {
      router.push("/register-soil-sample");
      console.error("Location is not provided");
      return;
    } else {
      getLab(id).then((data) => {
        console.log("Lab data: ", data);
        setLab(data);
      });
    }
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
            <Image
              src={backArrow}
              width={16}
              height={16}
              alt="back"
            />
          </button>
          Sample Registeration
          <button>
            <Image
              src={globe}
              width={30}
              height={30}
              alt="globe"
            />
          </button>
        </div>
        <RegistrationForm lab={lab} />
      </div>
    </div>
  );
};

export default page;
