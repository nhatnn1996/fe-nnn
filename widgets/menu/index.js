import Link from "next/link";
import { useEffect } from "react";
import { setCategories } from "../../store/global";
import qs from "qs";
import axiosClient from "api-client/base/axios-client";
import { useRouter } from "next/router";

const menus = [
  { name: "Trang chủ", href: "/" },
  {
    name: "Giới thiệu",
    href: "",
    sub: [
      {
        name: "Sự hình thành",
        href: "/trang/su-hinh-thanh",
      },
      {
        name: "Sơ đồ tổ chức",
        href: "/trang/so-do-to-chuc",
      },
      {
        name: "Chức năng nhiệm vụ",
        href: "/trang/chuc-nang-nhiem-vu",
      },
    ],
  },
  {
    name: "Tin tức - sư kiện",
    href: "/tin-tuc-su-kien",
    sub: [
      {
        name: "Tin trong nước ",
        href: "/danh-muc/tin-trong-nuoc",
      },
      {
        name: "Tin trong tỉnh ",
        href: "/danh-muc/tin-trong-tinh",
      },
      {
        name: "Sự kiện hoạt động",
        href: "/danh-muc/su-kien-hoat-dong",
      },
      {
        name: "Thông tin hữu ích",
        href: "/danh-muc/thong-tin-huu-ich",
      },
      {
        name: "Hướng dẫn kỹ thuật",
        href: "/danh-muc/thong-tin-huu-ich",
      },
      {
        name: "Tin tuyển dụng",
        href: "/danh-muc/thong-tin-huu-ich",
      },
      {
        name: "Hổ trợ khách hàng",
        href: "/danh-muc/thong-tin-huu-ich",
      },
      {
        name: "Kết quả xét nghiệm nước ",
        href: "/folders/ket-qua-xet-nghiem-nuoc",
      },
    ],
  },
  {
    name: "Dự án đầu tư",
    href: "/",
    sub: [
      {
        name: "Dự án đầu tư giai đoạn 2013 đến 2015",
        href: "/danh-muc/du-an-dau-tu-giai-doan-2012-den-2015",
      },
      {
        name: "Dự án đầu tư giai đoạn 2021 đến 2023",
        href: "/danh-muc/du-an-dau-tu-giai-doan-2021-den-2023",
      },
      {
        name: "Chức năng nhiệm vụ",
        href: "/trang/chuc-nang-nhiem-vu",
      },
    ],
  },
  { name: "Bộ chỉ số", href: "/bo-chi-so" },
  // { name: "Nhà máy NS", href: "/" },
  { name: "Thư viện", href: "/thu-vien" },
  { name: "Liên hệ - góp ý", href: "/" },
];

const getChildCategory = (data, slug) => {
  const childrend = data
    .filter((element) => element.category?.slug === slug)
    .map((element) => element.slug);
  return childrend;
};

const getAllCategoriesBySlug = (data, slug) => {
  let childrent = getChildCategory(data, slug);
  if (childrent.length === 0) return childrent;
  else {
    childrent.forEach((element) => {
      const slugs = getAllCategoriesBySlug(data, element);
      childrent = childrent.concat(slugs);
    });
    return childrent;
  }
};

const queryRequest = (slug) => {
  const slugs = slug.map((element) => ({ "category.slug": element }));
  const query = qs.stringify({
    _where: {
      _or: [...slugs],
    },
  });
  return query;
};

const Menu = () => {
  useEffect(() => {
    axiosClient("/categories").then((data) => {
      setCategories(data.data);
    });
  }, []);

  return (
    <nav className="shadow-xl bg-white">
      <div className="container mx-auto">
        <ul className="flex ">
          {menus.map((element, index) => (
            <Item key={index} element={element} />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
const Item = (props) => {
  // const { pathname } = useRouter();
  const { element } = props;
  const active = false;
  // pathname.includes(element.href);
  // console.log(pathname, element.href, active);
  return (
    <li className="sm:mr-4 2xl:mr-8 menu-item font-base flex relative items-center py-4">
      <div
        className={
          "w-2 h-2 mr-2 rounded " + (!active ? " bg-secondary" : "bg-primary")
        }
      ></div>
      <Link href={element.href}>
        <a className="text-gray-700 font-bold">{element.name}</a>
      </Link>
      {element.sub && element.sub.length > 0 && (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
          <SubMenu sub={element.sub} />
        </>
      )}
    </li>
  );
};

const SubMenu = (props) => {
  return (
    <ul className="sub absolute rounded-xs bg-white shadow-2xl">
      {props.sub.map((element, index) => (
        <li className="sub-item" key={index}>
          <Link href={element.href || "/"}>
            <a className="py-4 px-6 block whitespace-nowrap font-medium hover:text-white hover:bg-blue-700 transition duration-300 ">
              {element.name}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};
