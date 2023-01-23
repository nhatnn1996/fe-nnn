import Link from "next/link";
import { localeTime } from "@/shared/helper/function";
import ImageCustom from "@/components/common/image";

const PostContent = ({ post_inside, post_outside }) => {
  const firstIS = post_inside.slice(0, 1);
  const listIS = post_inside.slice(1, post_inside.length);
  const firtOS = post_outside.slice(0, 1);
  const listOS = post_outside.slice(1, post_outside.length);
  return (
    <div className="post-main mt-10 flex">
      <div className="w-8/12">
        <div className="flex gap-4">
          <div className="w-1/2">
            <div className="font-bold  text-lg text-uppercase mb-4">
              <span className=" pb-2">TIN TRONG NƯỚC</span>
            </div>
            <div className="">
              {firstIS[0] && (
                <div>
                  <Post item={firstIS[0]?.attributes} />
                </div>
              )}
            </div>
          </div>
          <div className="w-1/2">
            <div className="font-bold text-md text-uppercase">
              <div className="font-bold  text-lg text-uppercase mb-4">
                <span className=" pb-2">TIN NGOÀI NƯỚC</span>
              </div>
            </div>
            <div>
              <Post item={firtOS[0]?.attributes} />
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-gray-200 my-6"> </div>
        <div className="flex gap-4">
          <div className="w-1/2">
            {listOS.map((item) => {
              return <PostSmall item={item?.attributes} key={item.id} />;
            })}
          </div>
          <div className="w-1/2">
            {listOS &&
              listOS.map((item) => {
                return <PostSmall item={item?.attributes} key={item.id} />;
              })}
          </div>
        </div>
      </div>
      <div className="w-4/12 ml-3">
        <div className="font-bold  text-lg text-uppercase mb-4">
          <span className=" pb-2">TIN MỚI</span>
        </div>
        <div className="mt-4">
          {post_outside &&
            [...post_outside, ...post_outside].map((item, index) => {
              return (
                <PostSmall
                  item={item?.attributes}
                  key={item.id}
                  news
                  index={index+1}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default PostContent;

const Post = ({ item }) => {
  return (
    <div className="mb-4">
      <Link href={"/bai-viet/" + item.slug}>
        <a
          className="text-base hover-text font-bold text-gray-700 pointer block"
          title={item.title}
        >
          <div className="relative">
            <ImageCustom
              className="post-main-image mt-2 w-full"
              image={item?.image}
              layout="responsive"
              width="400px"
              height="300px"
              objectFit="cover"
              size="small"
            />
          </div>
          <div className=" mt-4">
            <small className="font-mono text-[12px] text-gray-400">
              {localeTime(item.createdAt)}
            </small>
          </div>
          <div className="hover:text-blue-700 text-lg line-clamp-1">
            {item.title}
          </div>
          <div className="text-sm font-medium italic text-gray-400 line-clamp-2">
            {item.description}
          </div>
        </a>
      </Link>
    </div>
  );
};

export const PostSmall = ({ item, news, index }) => {
  const caterogrory = item.category.data.attributes.title;
  return (
    <div className="mb-4 relative">
      <Link href={"/bai-viet/" + item.slug}>
        <a className="flex" title={item.title}>
          <div className="w-3/12 relative">
            <div className="w-full rounded-sm overflow-hidden">
              <ImageCustom
                className="post-main-image mt-2 w-full"
                image={item?.image}
                layout="responsive"
                width="400"
                height="300"
                objectFit="cover"
                size="small"
              />
            </div>
            {index && (
              <div
                style={{ transform: "translateY(-50%)" }}
                className="absolute top-0 left-1 text-white text-md flex justify-center items-center align-center font-black w-6 h-6 rounded-full bg-[#21ad37] border-white border-2"
              >
                {index}
              </div>
            )}
          </div>
          <div className="w-9/12 px-2">
            <div className="flex items-center">
              <div className="font-mono text-xs text-blue-800  mr-3 uppercase font-bold">
                {caterogrory}
              </div>
              <span className="px-1 text-gray-400">/</span>
              <small className=" font-mono font-bold text-[12px] text-gray-400">
                {localeTime(item.createdAt)}
              </small>
            </div>
            <div className="text-black text-sm font-bold line-clamp-3">
              {item.title}
            </div>
          </div>
        </a>
      </Link>
      {news && (
        <div className="absolute top-0 right-0">
          <img src="/images/new.png" alt="" width={40} height={40} />
        </div>
      )}
    </div>
  );
};
