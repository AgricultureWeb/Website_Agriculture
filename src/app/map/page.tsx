"use client";
import React, { useState, useContext } from "react";
import AzureMap from "../../components/AzureMap";
import Sidebar from "@/components/Sidebar";
import backArrow from "../../../public/assets/icons/back-arrow.svg";
import Image from "next/image";
import navigationContext from "@/context/navigationContext";
import placeholder_lab from "../../../public/assets/images/placeholder_lab.png";
import Call from "../../../public/assets/icons/call.svg";
import Bookmark from "../../../public/assets/icons/Bookmark.svg";
import Directions from "../../../public/assets/icons/Directions.svg";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const subscriptionKey =
    process.env.NEXT_PUBLIC_AZURE_MAP_SUBSCRIPTION_KEY || "";

  if (!subscriptionKey) {
    console.error("Azure Maps subscription key is not defined in .env.local");
    return <div>Error: Azure Maps subscription key is not defined.</div>;
  }

  const navContext = useContext(navigationContext);

  if (!navContext) {
    console.error("Navigation context is not provided");
    return <div>Error: Navigation context is not provided.</div>;
  }
  const { setActive, prevActive } = navContext;

  const [locations, setLocations] = useState<any[]>([]);

  return (
    <>
      <div className="flex h-screen">
        <div className="">
          <Sidebar />
        </div>
        <div>
          <div className="flex w-96 text-2xl px-3 py-2 border-b-2 border-b-gray-400">
            <button onClick={() => router.back()}>
              {" "}
              <Image src={backArrow} width={13} height={13} alt="back"/>
            </button>
            <span className="w-full text-center">Choose Location</span>
          </div>
          {locations.length > 0 &&
            locations.map((location) => (
              <>
                <div key={location.id} className="w-fit mx-auto mt-5">
                  <Image
                    src={placeholder_lab}
                    height={300}
                    width={300}
                    alt={"lab"}
                  />
                  <h2 className="mt-3 text-sm">
                    {location.poi.name},{" "}
                    {location.address.countrySubdivisionName}
                  </h2>
                  <p className="text-xs mt-2">
                    Address: {location.address.freeformAddress}
                  </p>
                  <p className="text-xs mt-2">Phone: xxxxxxxxxx</p>

                  <div className="flex justify-around mt-5">
                    <button className="location_utility_button">
                      <Image
                        src={Call}
                        width={20}
                        height={20}
                        alt="call"
                        className="mr-1"
                      />
                      Call
                    </button>
                    <button className="location_utility_button">
                      <Image
                        src={Directions}
                        width={20}
                        height={20}
                        alt="Directions"
                        className="mr-1"
                      />
                      Directions
                    </button>
                    <button className="location_utility_button">
                      <Image
                        src={Bookmark}
                        width={20}
                        height={20}
                        alt="Save"
                        className="mr-1"
                      />
                      Save
                    </button>
                  </div>
                  <button className="bg-primary_green text-white text-sm font-light rounded-full px-4 py-0.5 flex mx-auto my-5">
                    Proceed
                  </button>
                </div>
                <hr />
              </>
            ))}
        </div>
        <div className="w-full h-full">
          <AzureMap
            subscriptionKey={subscriptionKey}
            setLocations={setLocations}
          />
        </div>
      </div>
    </>
  );
};

export default Page;
