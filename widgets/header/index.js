import Link from "next/link";
import Search from "@/components/input/search/search";
import React, { useState } from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div>
      <nav className=" bg-white h-12 w-full container mx-auto">
        <div className="flex items-center h-full">
          <div className="font-bold text-red-800">
            MÔI TRƯỜNG NÔNG THÔN TỈNH BÌNH ĐỊNH kính chào năm mới 2023 an khanh
            thịnh vượng vạn sự như ý
          </div>
          <div className="ml-auto flex items-center bg-gray-100 pr-2 rounded-md p-1">
            <img className="w-10 h-10 left-0" src="/images/weather.png" />
            <span className="font-bold mr-3 text-gray-500">Bình Định</span>
            <span className="font font-bold text-gray-500">18° - 19°</span>
          </div>
          <div className="fixed top-0 w-[150px] right-0 z-10">
            <Image
              src="/images/tet.png"
              width={100}
              height={100}
              layout="responsive"
              objectFit="contain"
              className=""
            />
          </div>
        </div>
      </nav>
      <header className="header flex justify-center ">
        <div className="container header-top flex flex-row py-5 ">
          <div className="w-5/12 flex">
            <div className="w-16 mr-6 ">
              <Link href="/">
                <img
                  src="/images/logo.png"
                  alt=""
                  className="rounded-full shadow-xl pointer"
                />
              </Link>
            </div>
            <div className="tracking-normal	text-white flex flex-col justify-center">
              <div className="font-bold text-md uppercase">
                Môi trường nông thôn tỉnh Bình Định
              </div>
              <div className="text-opacity-20 text-base leading-5">
                Trung tâm Nước sạch & VSMT nông thôn Bình Định
              </div>
              <div className="text-opacity-20 text-base leading-5">
                118 Nguyễn Huệ - Qui Nhơn - Bình Định
              </div>
            </div>
          </div>
          <div className="form flex justify-center flex-col w-3/12">
            <div className="font-bold text-md text-white mb-2 uppercase">
              {" "}
              tìm kiếm công văn{" "}
            </div>
            <Search w="1rem" height="1rem" />
          </div>
          <div className="w-4/12 contact">
            <div className="text-white mb-2 contact-bg font-bold py-2"> </div>
            <div className="contact-content font-bold text-white">
              <div className="text-base text-right">Hổ trợ trực tuyến </div>
              <div className="text-base uppercase">
                Huỳnh Văn Út - <a className="font-bold ">02563823179</a>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .header {
            background: linear-gradient(to right, #005776, #0083b0);
          }
          .contact {
            position: relative;
          }
          .contact-content {
            position: absolute;
            top: 50%;
            right: 5%;
          }
          .contact-bg {
            box-sizing: content-box;
            background: url("/images/bg-contact.png");
            height: 100%;
            width: 100%;
            background-size: auto 100%;
            background-repeat: no-repeat;
            background-position: center right;
            transform: translateY(15px);
          }
        `}</style>
      </header>
    </div>
  );
};

export default React.memo(Header);
