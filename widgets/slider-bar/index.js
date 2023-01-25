import Title from "@/components/title";
import Link from "next/link";
import { useGlobal } from "@/context/global";
import { BellIcon, InformationCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
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
      <div className="box mt-10 mb-3">
        <Title>Thông báo</Title>
        <Notifications data={data.notifications || []} />
      </div>

      <div className="box mt-10 mb-3">
        <Link href="/bo-chi-so">
          <a>
            <Image
              className="w-full"
              src={"/images/bo-chi-so.jpg"}
              width="555"
              height={372}
              alt="content"
              layout="responsive"
            />
          </a>
        </Link>
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
    <Link href={"/bai-viet/" + slug} title={title}>
      <a
        title={title}
        className="flex mt-3 pointer font-bold text-gray-700 hover:text-blue-700 truncate"
      >
        <BellIcon className="h-6 w-6 stroke-yellow-400" />

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
