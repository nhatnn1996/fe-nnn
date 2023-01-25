import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import {
  Bars3BottomRightIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

const Footer = ({ categories, notis }) => {
  const data = (categories.data || []).slice(0, 5);
  const data_notis = (notis || []).slice(0, 5);
  // console.log(data_notis);
  return (
    <footer className="mt-20  bg-[#19222A] text-white">
      <div className="flex py-10 container mx-auto">
        <div className="w-6/12">
          <div className="flex items-center">
            <div>
              <div className="w-20 h-30">
                <img
                  src="/images/logo.png"
                  alt=""
                  className="rounded-full shadow-xl pointer "
                />
              </div>
            </div>
            <div className="ml-4 font-bold text-lg uppercase leading-8">
              Trung tâm Nước sạch & Vệ sinh môi trường nông thôn Bình Định
            </div>
          </div>
          <div className="text-md font-[500] mt-8 ">
            <div className="flex items-center">
              <MapPinIcon className="mr-4" />
              <span>118 Nguyễn Huệ - Qui Nhơn - Bình Định</span>
            </div>
            <div className="mt-8 flex items-center">
              <PhoneIcon className="mr-4" />
              <span>SDT hỗ trợ 1: 02563823179</span>
            </div>
            <div className="mt-8 flex items-center">
              <PhoneIcon className="mr-4" />
              <span>SDT hỗ trợ 2: 02563823179</span>
            </div>
            <div className="mt-8 flex items-center">
              <EnvelopeIcon className="mr-4" />
              <span>Email hỗ trợ: newbie.dev.js@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="w-3/12 ml-10">
          <div className="font-bold text-lg uppercase">DANH MỤC</div>
          <div className="mt-10">
            {data.map((item) => {
              const element = item.attributes;
              return (
                <Link href={"/danh-muc/" + element.slug} passHref>
                  <a
                    className="flex items-center mt-8 group hover:text-blue-400 transition-color duration-200"
                    key={element.slug}
                  >
                    <Bars3BottomRightIcon className="w-4 mr-2" />
                    {/* <div className="w-3 h-3 rounded-full bg-gray-50 mr-4 group-hover:bg-blue-200"></div> */}
                    <div className="">{element.title}</div>
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="w-3/12 ml-10">
          <div className="font-bold text-lg uppercase">TIN MỚI</div>
          <div className="mt-10">
            {data_notis.map((item) => {
              const element = item.attributes;
              return (
                <Link href={"/bai-viet/" + element.slug} passHref>
                  <a
                    className="flex items-center mt-8 group hover:text-blue-400 transition-color duration-200"
                    key={element.slug}
                  >
                    <div>
                      <ChevronDoubleRightIcon className="w-4 mr-2" />
                      {/* <div className="w-3 h-3 rounded-full bg-gray-50 mr-4 group-hover:bg-blue-200"></div> */}
                    </div>
                    <div className="line-clamp-1">{element.title}</div>
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="container text-black mx-auto py-3 bg-white">
          <div className="mt-2 text-center ">
            <b>© 1997-2023.</b> Toàn bộ bản quyền thuộc{" "}
            <b className="text-black">nuocnongthon.binhdinh.vn</b>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
