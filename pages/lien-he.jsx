import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import Head from "next/head";
import { AiOutlineGoogle } from "react-icons/ai";
import { BsMessenger } from "react-icons/bs";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
export default function Home() {
  return (
    <div>
      <Head>
        <title> Liên hệ - Góp ys </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex gap-10">
        <div className="w-6/12">
          <img src="/images/lien-he.jpeg" className="w-full" alt="" />
        </div>
        <div className="w-6/12">
          <div className="text-md text-stone-700 mt-8 font-bold">
            <div className="flex items-center">
              <MapPinIcon className="mr-4" />
              <span>Địa chỉ: 118 Nguyễn Huệ - Qui Nhơn - Bình Định</span>
            </div>
            <div className="mt-8 flex items-center">
              <PhoneIcon className="mr-4" />
              <span>Số điện thoại: 02563823179</span>
            </div>
            <div className="mt-8 flex items-center">
              <EnvelopeIcon className="mr-4" />
              <span>Email: newbie.dev.js@gmail.com</span>
            </div>
            <div className="mt-8 flex items-center text-white">
              <div className="w-10 h-10 rounded-full mr-2 cursor-pointer bg-gray-700 flex items-center justify-center">
                <HiMail className="w-4 h-4" />
              </div>
              <div className="w-10 h-10 rounded-full mr-2 cursor-pointer bg-gray-700 flex items-center justify-center">
                <FaFacebookF className="w-4 h-4" />
              </div>
              <div className="w-10 h-10 rounded-full mr-2 cursor-pointer bg-gray-700 flex items-center justify-center">
                <AiOutlineGoogle className="w-4 h-4" />
              </div>
              <div className="w-10 h-10 rounded-full mr-2 cursor-pointer bg-gray-700 flex items-center justify-center">
                <FaInstagram className="w-4 h-4" />
              </div>
              <div className="w-10 h-10 rounded-full mr-2 cursor-pointer bg-gray-700 flex items-center justify-center">
                <BsMessenger className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 bg-gray-100 w-full p-10">
        <div>
          <input
            type="text"
            className="px-3 py-2 min-w-[400px] outline-none"
            placeholder="Vui lòng nhập họ tên"
          />
        </div>
        <div className="mt-6">
          <input
            type="text"
            className="px-3 py-2 min-w-[400px] outline-none"
            placeholder="Vui lòng nhập email"
          />
        </div>
        <div className="mt-6">
          <textarea
            type="text"
            className="px-3 py-2 min-w-[400px] outline-none"
            placeholder="Vui lòng nhập nội dung góp ý"
            rows={4}
          />
        </div>
        <button className=" mt-6 bg-blue-400 hover:bg-blue-500 text-white p-2 font-bold rounded shadow">
          Đóng góp
        </button>
      </div>
    </div>
  );
}
