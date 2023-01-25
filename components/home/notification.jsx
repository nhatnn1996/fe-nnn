import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useRef } from "react";
import Slider from "react-slick";
import ImageCustom from "../common/image";

const Notifcation = ({ notis = [] }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };

  const ref = useRef();
  return (
    <div>
      <div className="relative mb-4">
        <div className="relative h-[72px]">
          <Slider ref={ref} {...settings} className="gap-10">
            {notis.map((item, index) => {
              const element = item.attributes;
              // console.log(element);
              return (
                <Link href={"/bai-viet/" + element.slug} passHref>
                  <a className="h-full">
                    <div className="flex gap-3 pr-4">
                      <div key={item} className="w-3/12 min-w-20">
                        <div className="w-full">
                          <ImageCustom
                            image={element.image}
                            width={73}
                            height={72}
                            layout="responsive"
                            objectFit="cover"
                          />
                        </div>
                      </div>
                      <div className="w-9/12 ">
                        <div className="font-bold text-gray-600 line-clamp-3">
                          {element.title}
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>
              );
            })}
          </Slider>
          <div
            onClick={() => {
              ref.current.slickPrev();
            }}
            className="w-6 h-full flex cursor-pointer items-center justify-center bg-gray-100 absolute top-0 left-0"
          >
            <ChevronLeftIcon className="w-4 h-4 mr-1" />
          </div>
          <div
            onClick={() => {
              ref.current.slickNext();
            }}
            className=" w-6 h-full flex cursor-pointer items-center justify-center bg-gray-100 absolute top-0 right-0"
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

export default Notifcation;
