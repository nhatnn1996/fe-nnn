import Link from "next/link";
import { localeTime } from "@/shared/helper/function";

const PostContent = ({ post_inside, post_outside }) => {
  return (
    <div className="post-main py-5 mt-5 flex">
      <div className="w-1/2 mr-5 ">
        <div className="font-bold text-blue-800 text-md text-uppercase mb-6">
          <span className="border-blue-800 pb-2 border-b-2">
            TIN TRONG NGOÀI
          </span>
        </div>
        <div className="mt-4">
          {post_inside.map((item) => {
            const post = item.attributes;
            return <Post item={post} key={item.id} />;
          })}
        </div>
      </div>
      <div className="w-1/2 mr-5 ">
        <div className="font-bold text-blue-800 text-md text-uppercase mb-6">
          <span className="border-blue-800 pb-2 border-b-2">
            TIN NƯỚC NGOÀI
          </span>
        </div>
        <div className="mt-4">
          {post_outside.map((item) => {
            const post = item.attributes;
            return <Post item={post} key={item.id} />;
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
      <small className="text-sx">{localeTime(item.createdAt)}</small>
      <Link href={"/bai-viet/" + item.slug}>
        <a className="text-base font-bold text-gray-700 pointer block hover:text-blue-700">
          {item.title}
        </a>
      </Link>
      <div className="text-base text-gray-700 line-clamp-2">
        {item.description}
      </div>
      <Link href={"/bai-viet/" + item.slug}>
        <a className="text-base font-regular text-blue-700 pointer flex items-center hover-transform-x">
          <span>Đọc thêm</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3 mr-2 mt-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </Link>
    </div>
  );
};
