import {  ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useRef } from "react";
import Slider from "react-slick";
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
};
const items = [
  "https://nuocnongthon.binhdinh.vn/images/stories/hinhanhnhamay/3caac04bbb574b091246.jpg",
  "https://nuocnongthon.binhdinh.vn/images/stories/hinhanhnhamay/51a78b735bfbada5f4ea.jpg",
  "https://nuocnongthon.binhdinh.vn/images/stories/hinhanhnhamay/530085de5556a308fa47.jpg",
  "https://nuocnongthon.binhdinh.vn/images/stories/hinhanhnhamay/3caac04bbb574b091246.jpg",
];
const Images = () => {
  const ref = useRef();
  return (
    <div>
      <div className="relative mt-12 list-image">
        <div
          className="absolute top-[50%] left-[50%] h-full bg-[#19222A] z-0"
          style={{
            transform: "translateX(-50%)",
            width: "100vw",
            height: "140%",
          }}
        ></div>
        <div
          className="absolute top-[50%] left-[50%] h-full bg-white z-0 "
          style={{
            transform: "translate(-50%,-50%)",
            width: "calc(100% + 40px)",
            height: "calc(100% + 20px)",
          }}
        ></div>
        <div className="relative">
          <Slider ref={ref} {...settings} className="mx-[-8px] mt-2 gap-4">
            {items.map((item, index) => {
              return (
                <div>
                  <div
                    key={item}
                    className="mx-auto  overflow-hidden"
                    style={{ width: "calc(100% - 16px)" }}
                  >
                    <Image
                      src={item}
                      width={300}
                      height={200}
                      layout="responsive"
                      objectFit="cover"
                    />
                  </div>
                </div>
              );
            })}
          </Slider>
          <div
            onClick={() => {
              ref.current.slickPrev();
            }}
            className=" w-6 h-10 flex cursor-pointer items-center justify-center bg-white absolute top-[50%] translate-y-[-50%] left-0"
          >
            <ChevronLeftIcon className="w-4 h-4 mr-1" />
          </div>
          <div
            onClick={() => {
              ref.current.slickNext();
            }}
            className=" w-6 h-10 flex cursor-pointer items-center justify-center bg-white absolute top-[50%] translate-y-[-50%] right-0"
          >
            <ChevronRightIcon className="w-4 h-4 ml-1" />
          </div>
        </div>
        <style>{`
      .list-image .slick-arrow {
        display: none;
        visibility: hidden;
      }
      `}</style>
      </div>
    </div>
  );
};

export default Images;
