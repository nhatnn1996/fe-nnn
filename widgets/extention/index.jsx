import Image from "next/image";
import Link from "next/link";

const PostMain = () => {
  const extentions = [
    {
      label: "Thông tin nước sạch",
      outside: false,
      url: "/bo-chi-so/ban-do",
      src: "/images/thong-tin-nuoc-sach.png",
    },
    {
      label: "Tra cứu oá đơn điện tử",
      outside: true,
      url: "https://van.ehoadon.vn/LUEW?AID=2DC7564B-AE9B-4CD4-938B-C7D62849B06D",
      src: "/images/tra-cuu-hoa-don.png",
    },
    {
      label: "Tra cứu sử dụng nước",
      outside: true,
      url: "https://timkiem.nuocnongthon.binhdinh.vn/",
      src: "/images/tra-cuu-nuoc-sach.png",
    },
    {
      label: "Bộ chỉ số",
      outside: false,
      url: "/bo-chi-so",
      src: "/images/bo-chi-so.png",
    },
  ];
  return (
    <div className="grid grid-cols-4 gap-2 mt-10">
      {extentions.map((element) => {
        return (
          <a href={element.url} key={element.url} target="_blank">
            <div className="bg-[#F4F6F6] rounded-lg shadow cursor-pointer px-2 py-10 hover:shadow-lg hover:translate-y-[-10px] transition  ease-in-out duration-250">
              <div className="flex justify-center ">
                <Image
                  src={element.src}
                  width="165px"
                  height="165px"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <div className="font-bold uppercase mt-10 text-center">
                {element.label}
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default PostMain;
