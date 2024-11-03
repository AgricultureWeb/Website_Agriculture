import React from "react";
import backArrow from "../../public/assets/icons/back-arrow.svg";
import globe from "../../public/assets/icons/globe.svg";
import bookmark from "../../public/assets/icons/bookmark.svg";
import clock from "../../public/assets/icons/Clock.svg";
import newsPlaceholderBg from "../../public/assets/images/news-placeholder-bg.png";
import Image from "next/image";

interface NewsComponentProps {
  setActive: (active: string) => void;
  prevActive: string;
}

const NewsComponent: React.FC<NewsComponentProps> = ({
  setActive,
  prevActive,
}) => {
  return (
    <div>
      <div className="flex justify-between text-2xl px-3 py-2 border-b-2 border-b-gray-400">
        <button onClick={() => setActive(prevActive)}>
          {" "}
          <Image src={backArrow} width={16} height={16} alt="back" />
        </button>
        News Feed
        <button>
          <Image src={globe} width={30} height={30} alt="globe" />
        </button>
      </div>
      <div className="relative -z-10 flex flex-wrap m-3">
        <div className="w-full sm:w-1/2 lg:w-1/4">
          <div className="mr-3 mb-3 ">
            <div className="relative">
              <Image
                className="rounded-t-lg w-full"
                src={newsPlaceholderBg}
                alt="news"
              />
              <span className="absolute rounded-full p-2 bg-[#27612B] top-2 right-2">
                <Image src={bookmark} alt="mark" width={8} height={4} />
              </span>
              <div className="bg-secondary_green rounded-b-lg p-2">
                <p className="text-lg">
                  Millet production stagnates in India:RBI Annual Report
                </p>
                <span className="text-xs text-gray-500 flex mt-3">
                  <Image src={clock} width={18} height={18} alt="clock" />
                  10 minutes read
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4">
          <div className="mr-3 mb-3 ">
            <div className="relative">
              <Image
                className="rounded-t-lg w-full"
                src={newsPlaceholderBg}
                alt="news"
              />
              <span className="absolute rounded-full p-2 bg-[#27612B] top-2 right-2">
                <Image src={bookmark} alt="mark" width={8} height={4} />
              </span>
              <div className="bg-secondary_green rounded-b-lg p-2">
                <p className="text-lg">
                  Millet production stagnates in India:RBI Annual Report
                </p>
                <span className="text-xs text-gray-500 flex mt-3">
                  <Image src={clock} width={18} height={18} alt="clock" />
                  10 minutes read
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4">
          <div className="mr-3 mb-3 ">
            <div className="relative">
              <Image
                className="rounded-t-lg w-full"
                src={newsPlaceholderBg}
                alt="news"
              />
              <span className="absolute rounded-full p-2 bg-[#27612B] top-2 right-2">
                <Image src={bookmark} alt="mark" width={8} height={4} />
              </span>
              <div className="bg-secondary_green rounded-b-lg p-2">
                <p className="text-lg">
                  Millet production stagnates in India:RBI Annual Report
                </p>
                <span className="text-xs text-gray-500 flex mt-3">
                  <Image src={clock} width={18} height={18} alt="clock" />
                  10 minutes read
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4">
          <div className="mr-3 mb-3 ">
            <div className="relative">
              <Image
                className="rounded-t-lg w-full"
                src={newsPlaceholderBg}
                alt="news"
              />
              <span className="absolute rounded-full p-2 bg-[#27612B] top-2 right-2">
                <Image src={bookmark} alt="mark" width={8} height={4} />
              </span>
              <div className="bg-secondary_green rounded-b-lg p-2">
                <p className="text-lg">
                  Millet production stagnates in India:RBI Annual Report
                </p>
                <span className="text-xs text-gray-500 flex mt-3">
                  <Image src={clock} width={18} height={18} alt="clock" />
                  10 minutes read
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4">
          <div className="mr-3 mb-3 ">
            <div className="relative">
              <Image
                className="rounded-t-lg w-full"
                src={newsPlaceholderBg}
                alt="news"
              />
              <span className="absolute rounded-full p-2 bg-[#27612B] top-2 right-2">
                <Image src={bookmark} alt="mark" width={8} height={4} />
              </span>
              <div className="bg-secondary_green rounded-b-lg p-2">
                <p className="text-lg">
                  Millet production stagnates in India:RBI Annual Report
                </p>
                <span className="text-xs text-gray-500 flex mt-3">
                  <Image src={clock} width={18} height={18} alt="clock" />
                  10 minutes read
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4">
          <div className="mr-3 mb-3 ">
            <div className="relative">
              <Image
                className="rounded-t-lg w-full"
                src={newsPlaceholderBg}
                alt="news"
              />
              <span className="absolute rounded-full p-2 bg-[#27612B] top-2 right-2">
                <Image src={bookmark} alt="mark" width={8} height={4} />
              </span>
              <div className="bg-secondary_green rounded-b-lg p-2">
                <p className="text-lg">
                  Millet production stagnates in India:RBI Annual Report
                </p>
                <span className="text-xs text-gray-500 flex mt-3">
                  <Image src={clock} width={18} height={18} alt="clock" />
                  10 minutes read
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsComponent;
