import { useState } from "react";
import Title from "@/components/title";
import Link from "next/link";
import { url_api, url_base } from "@/shared/container/index";
import axiosClient from "api-client/base/axios-client";
import { useGlobal } from "@/context/global";

const dataInfomation = [
  { title: "Thông báo 1", id: "wieu2103912", href: "/about" },
  { title: "Thông báo 2", id: "12312414", href: "/about" },
  { title: "Thông báo 3", id: "12312098102", href: "/about" },
  { title: "Thông báo 4", id: "91283jshkhwqke", href: "/about" },
];
const Menu = () => {
  const data = useGlobal();
  return (
    <div>
      <div className="box">
        <Title>Hình ảnh trung tâm </Title>
        <div className="mt-2">
          <img
            src="https://vtv1.mediacdn.vn/zoom/550_339/2018/11/13/photo-11-15421149127921523173283.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="mt-2">
        <div className="box mt-2">
          <img src="/images/image_2.jpg" alt="" />
        </div>
        <div className="box mt-2 ">
          <img src="/images/image_3.png" alt="" />
        </div>
      </div>
      <div className="box my-3">
        <Title>Bộ chỉ số</Title>
        <img src="/images/image_4.jpg" className="mt-2" alt="" />
      </div>
      <div className="box my-3">
        <Title>Thông báo</Title>
        <Notifications data={data.notification?.data || []} />
      </div>
      <div className="box my-3">
        <Title>Dự án đầu tư</Title>
        <img src="/images/adb.jpg" className="mt-2" alt="" />
      </div>
      <div className="box my-3">
        <Title>Thanh toán trực tiếp</Title>
        <img src="/images/agribank.jpg" className="mt-2" alt="" />
      </div>
    </div>
  );
};
export default Menu;

const Notifications = ({ data }) => {
  return (
    <div className="py-3">
      {data.map((element) => (
        <Notification key={element.id} value={element} />
      ))}
    </div>
  );
};

const Notification = ({ value }) => {
  const { slug, title } = value.attributes;
  return (
    <Link href={"bia-biet/" + slug}>
      <a className="flex mt-3 link-notification pointer font-bold text-gray-700 hover:text-blue-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
        <div className="flex justify-center">
          <div className="w-5 h-5 rounded-full bg-gradient-to-r from-red-300	 to-yellow-400"></div>
        </div>
        <div className="text-base  ml-3">{title}</div>
        <style jsx>{`
          .hover {
            transition: color 0.3s ease-in-out;
          }
        `}</style>
      </a>
    </Link>
  );
};
