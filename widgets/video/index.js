import Link from "next/link";
import { useState } from "react";
import { url_api, url_base } from "@/shared/container/index";
import axiosClient from "api-client/base/axios-client";
import ImageCustom from "@/components/common/image";

const Video = ({ videos }) => {
  const [id, setId] = useState(videos[0].id);
  const mainVideo = videos.find((element) => element.id === id);
  const listVideo = videos.filter((element) => element.id !== id);
  console.log(process.env.API_URL + mainVideo.attributes.file?.data?.attributes?.url);
  return (
    <div className="my-5 flex">
      <div className="w-full">
        <div className="font-bold text-blue-600 text-md mb-3">
          VIDEO NỔI BẬT
        </div>
        <div className="flex w-full">
          <div className="w-3/4 pr-3">
            <video
              className="video-main w-full"
              src={
                process.env.API_URL +
                mainVideo.attributes.file?.data?.attributes?.url
              }
              controls
            />
            <div className="overlay"></div>
            <div className="font-bold mt-4"> {mainVideo.name} </div>
            <div className="mt-2">{mainVideo.description}</div>
          </div>
          <div className="w-1/4">
            {listVideo.map((element) => (
              <div
                className="flex box-image-video"
                key={element.id}
                onClick={() => {
                  setId(element.id);
                }}
              >
                <ImageCustom src={element.image?.formats.thumbnail.url} />
                <div className="overlay pointer"></div>
                <div className="title-video-sub text-white p-2">
                  {element.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style global jsx>{`
        .video-main:focus {
          outline: none;
        }
        .box-image-video {
          padding-top: calc(2 / 3 * 100%);
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
