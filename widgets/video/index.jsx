import Link from "next/link";
import { useState } from "react";
import { url_api, url_base } from "@/shared/container/index";
import axiosClient from "api-client/base/axios-client";
import ImageCustom from "@/components/common/image";

const Video = ({ videos }) => {
  const [id, setId] = useState(videos[0].id);
  const mainVideo = videos.find((element) => element.id === id);
  const listVideo = videos.filter((element) => element.id !== id);
  const url_video =
    process.env.API_URL + mainVideo.attributes.file?.data?.attributes?.url;
  return (
    <div className="flex mt-20 relative z-10 ">
      <div
        className="absolute top-32 left-[50%] h-full bg-white z-0"
        style={{
          transform: "translateX(-50%)",
          width: "calc(100% + 40px)",
          height: "80%",
        }}
      ></div>
      <div className="w-full relative z-10">
        <div className="font-bold text-white text-md mb-3">VIDEO NỔI BẬT</div>
        <div className="flex w-full">
          <div className="w-2/4 mr-3 bg-[#F4F6F6]">
            <video className="video-main w-full" src={url_video} controls />
            <div className="overlay"></div>
            <div className="font-bold mt-4 px-2"> {mainVideo.attributes.title} </div>
            <div className="mt-2">{mainVideo.attributes.description}</div>
          </div>
          <div className="w-2/4 ml-6 mt-32">
            <div className="font-bold mb-4">VIDEO KHÁC</div>
            {listVideo.map((item, index) => {
              const element = item.attributes;
              return (
                <div
                  className="flex mb-4 last:mb-0 cursor-pointer group hover:text-blue-500"
                  key={element.slug + "video"}
                  onClick={() => {
                    setId(item.id);
                  }}
                >
                  <div className="relative">
                    <div className="w-24">
                      <ImageCustom
                        image={element.image}
                        width="200"
                        height="200"
                        layout="responsive"
                        objectFit="cover"
                        size="small"
                        className="group-hover:scale-[1.2] transition duration-200 ease-in-out"
                      />
                    </div>
                    <div
                      style={{ transform: "translateY(-50%)" }}
                      className="absolute top-0 left-1 text-white text-md flex justify-center items-center align-center font-black w-6 h-6 rounded-full bg-[#21ad37] border-white border-2"
                    >
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="font-bold text-md px-2 line-clamp-3 transition duration-200 ease-in-out">
                      {element.title}
                    </div>
                    <div className="bg-blue-400 mx-2 py-1 px-4 w-fit mt-auto font-mono font-bold text-white">
                      Video
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <style global jsx>{`
        .video-main:focus {
          outline: none;
        }
        .box-image-video {
          padding-top: calc(3 / 3 * 100%);
          position: relative;
        }

        .box-image-video img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .box-image-video .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0.7) 80%,
            rgba(0, 0, 0, 1) 100%
          );
        }
        .title-video-sub {
          position: absolute;
          bottom: 0;
          left: 0;
        }
      `}</style>
    </div>
  );
};

export default Video;
