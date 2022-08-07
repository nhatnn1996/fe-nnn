import Title from "@/components/title";
import Link from "next/link";
import { useGlobal } from "@/context/global";
const Menu = () => {
  const data = useGlobal();
  return (
    <div>
      <div className="box my-3">
        <Title>Thông tin nước sạch</Title>
        <Link href="/bo-chi-so/ban-do">
          <div className="overflow-hidden mt-2 relative map-home">
            <img
              src="/images/binh-dinh-map.jpeg"
              className="cursor-pointer hover:scale-125	transition-all duration-300"
            />
            <div className="absolute tooltip opacity-0 top-[30%] left-[10%] bg-white shadow-lg pointer-events-none rounded p-4 font-bold">
              Bấm vào để đi đến bản đồ
            </div>
          </div>
        </Link>
      </div>
      <div className="box">
        <Title>Chức năng </Title>
      </div>
      <div className="mt-2">
        <a
          href="https://van.ehoadon.vn/LUEW?AID=2DC7564B-AE9B-4CD4-938B-C7D62849B06D"
          target="_blank"
        >
          <div className="box mt-2 cursor-pointer">
            <img src="/images/image_2.jpg" alt="" />
          </div>
        </a>
        <a href="https://timkiem.nuocnongthon.binhdinh.vn/" target="_blank">
          <div className="box mt-2 cursor-pointer">
            <img src="/images/image_3.png" alt="" />
          </div>
        </a>
      </div>
      <div className="box my-3">
        <Title>Bộ chỉ số</Title>
        <img src="/images/image_4.jpg" className="mt-2" alt="" />
      </div>

      <div className="box my-3">
        <Title>Thông báo</Title>
        <Notifications data={data.notifications || []} />
      </div>
      <div className="box my-3">
        <Title>Dự án đầu tư</Title>
        <img src="/images/adb.jpg" className="mt-2" alt="" />
      </div>
      <div className="box my-3">
        <Title>Thanh toán trực tiếp</Title>
        <img src="/images/agribank.jpg" className="mt-2" alt="" />
      </div>
      <style jsx>
        {`
          .map-home:hover .tooltip {
            opacity: 1;
          }
        `}
      </style>
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
    <Link href={"/bai-viet/" + slug}>
      <a className="flex mt-3 pointer font-bold text-gray-700 hover:text-blue-700 truncate">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 stroke-green-600"
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

        <div className="w-[300px] truncate text-lg ml-3">{title}</div>
        <style jsx>{`
          .hover {
            transition: color 0.3s ease-in-out;
          }
        `}</style>
      </a>
    </Link>
  );
};
