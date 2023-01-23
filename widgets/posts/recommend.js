import Link from "next/link";
import { useState } from "react";
import { getImage, localeTime } from "@/shared/helper/function";
import axiosClient from "api-client/base/axios-client";
import ImageCustom from "@/components/common/image";

const PostRecommend = () => {
  const [state, setState] = useState(null);
  if (!state) {
    axiosClient(
      "/posts?_sort=createdAt&populate=*&pagination[pageSize]=3"
    ).then((data) => setState(data.data));
    return (
      <div className="post-main py-5 mt-5 flex h-100 w-full bg-gray-300"></div>
    );
  }
  return (
    <div className="post-main py-5 mt-5 flex">
      <div className="">
        <div className="font-bold text-md">TIN NỔI BẬT</div>
        <div className="mt-1 flex " style={{ justifyContent: "space-between" }}>
          {state.map((element) => {
            const post = element.attributes;
            return <Post item={post} key={element.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default PostRecommend;

export const Post = ({ item }) => {
  const image = getImage(item.image, "medium");
  return (
    <Link href={"/bai-viet/" + item.slug} passHref>
      <div className="mr-2 w-1/3">
        <div className="box mt-2 ">
          <div className="">
            <ImageCustom
              src={image}
              layout="responsive"
              width="100%"
              height="60%"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="mt-2 text-xs font-bold opacity-50">
          {localeTime(item.updatedAt)}
        </div>
        <div className="text-base font-semibold text-gray-900	mt-1 hover:text-blue-700 pointer line-clamp-2">
          {item.title}
        </div>
        <div className="text-xs text-gray-700	mt-1  line-clamp-2">
          {item.description}
        </div>
        <style global jsx>{`
          .box {
            overflow: hidden;
          }
          .box-image:hover {
            transform: scale(1.1) rotate(1deg);
          }
          .box-image {
            transition: transform 0.3s ease-in-out;
          }
        `}</style>
      </div>
    </Link>
  );
};
