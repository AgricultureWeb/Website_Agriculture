import React from "react";
import AzureMap from "../../components/AzureMap";
import Sidebar from "@/components/Sidebar";

const Page = () => {
  const subscriptionKey =
    process.env.NEXT_PUBLIC_AZURE_MAP_SUBSCRIPTION_KEY || "";

  if (!subscriptionKey) {
    console.error("Azure Maps subscription key is not defined in .env.local");
    return <div>Error: Azure Maps subscription key is not defined.</div>;
  }
  return (
    <>
      <div className="flex h-screen">
        <div></div>
        <div className="w-full h-full">
          <AzureMap subscriptionKey={subscriptionKey} />
        </div>
      </div>
    </>
  );
};

export default Page;
