import React from "react";
import globe from "../../public/assets/icons/globe.svg";
import Image from "next/image";

const HomeComponent = () => {
  return (
    <section className="p-3 overflow-y-auto h-screen">
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">Hello Username</h1>
        <Image src={globe} width={30} height={30} alt="globe" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 text-white md:h-[500px] my-5">
        <div
          className="bg-cover col-span-2 h-[250px] md:h-auto md:col-span-1 bg-center bg-no-repeat rounded-lg text-center content-center text-3xl"
          style={{
            backgroundImage: `url('/assets/images/soil-testing-bg.png')`,
          }}
        >
          Soil Testing
        </div>
        <div className="text-white col-span-2 md:col-span-3 my-5 md:my-0 md:ml-3">
          <div
            className="bg-cover bg-center bg-no-repeat rounded-lg text-center content-center text-3xl h-[250px] mb-3"
            style={{
              backgroundImage: `url('/assets/images/soil-sample-bg.png')`,
            }}
          >
            How to Take Soil Sample
          </div>
          <div
            className="bg-cover bg-center bg-no-repeat rounded-lg text-center content-center text-3xl h-[250px]"
            style={{  
              backgroundImage: `url('/assets/images/register-sample-bg.png')`,
            }}
          >
            Register Your Sample
          </div>
        </div>
      </div>
      <div className="flex flex-wrap mt-0 md:mt-7">
        <div className="w-1/2 md:w-1/4 ">
          <div
            className="bg-cover bg-center bg-no-repeat rounded-lg text-center content-center p-3 mr-3 mb-3"
            style={{
              backgroundImage: "url('/assets/images/soil-result-bg.png')",
            }}
          >
            <h3 className="text-[#2DFF00] text-lg">Top left corner</h3>
            <p className="text-primary_white">ST100152</p>
            <p className="text-white">12 June 2024</p>
            <button className="bg-primary_green rounded-full text-white px-10 mt-14">
              View Results
            </button>
          </div>
        </div>
        <div className="w-1/2 md:w-1/4 ">
          <div
            className="bg-cover bg-center bg-no-repeat rounded-lg text-center content-center p-3 mr-3 mb-3"
            style={{
              backgroundImage: "url('/assets/images/soil-result-bg.png')",
            }}
          >
            <h3 className="text-[#2DFF00] text-lg">Top left corner</h3>
            <p className="text-primary_white">ST100152</p>
            <p className="text-white">12 June 2024</p>
            <button className="bg-primary_green rounded-full text-white px-10 mt-14">
              View Results
            </button>
          </div>
        </div>
        <div className="w-1/2 md:w-1/4 ">
          <div
            className="bg-cover bg-center bg-no-repeat rounded-lg text-center content-center p-3 mr-3 mb-3"
            style={{
              backgroundImage: "url('/assets/images/soil-result-bg.png')",
            }}
          >
            <h3 className="text-[#2DFF00] text-lg">Top left corner</h3>
            <p className="text-primary_white">ST100152</p>
            <p className="text-white">12 June 2024</p>
            <button className="bg-primary_green rounded-full text-white px-10 mt-14">
              View Results
            </button>
          </div>
        </div>
        <div className="w-1/2 md:w-1/4 ">
          <div
            className="bg-cover bg-center bg-no-repeat rounded-lg text-center content-center p-3 mr-3 mb-3"
            style={{
              backgroundImage: "url('/assets/images/soil-result-bg.png')",
            }}
          >
            <h3 className="text-[#2DFF00] text-lg">Top left corner</h3>
            <p className="text-primary_white">ST100152</p>
            <p className="text-white">12 June 2024</p>
            <button className="bg-primary_green rounded-full text-white px-10 mt-14">
              View Results
            </button>
          </div>
        </div>
        <div className="w-1/2 md:w-1/4 ">
          <div
            className="bg-cover bg-center bg-no-repeat rounded-lg text-center content-center p-3 mr-3 mb-3"
            style={{
              backgroundImage: "url('/assets/images/soil-result-bg.png')",
            }}
          >
            <h3 className="text-[#2DFF00] text-lg">Top left corner</h3>
            <p className="text-primary_white">ST100152</p>
            <p className="text-white">12 June 2024</p>
            <button className="bg-primary_green rounded-full text-white px-10 mt-14">
              View Results
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeComponent;
