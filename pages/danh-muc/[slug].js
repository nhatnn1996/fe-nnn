import Head from "next/head";
import Link from "next/link";
import { url_api, url_base } from "@/shared/container/index";
import { localeTime } from "@/shared/helper/function";
import ParseHTML from "@/components/common/parsehtml";
import ImageCustom from "@/components/common/image";

const PostDeital = ({ data }) => {
  return (
    <div>
      <Head>
        <title> Danh sách bài viết </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="pb-10 pr-10">
        {data.length === 0 && <img src="/images/notfound.jpg" />}
        {data.map((element) => (
          <PostCard key={element._id} item={element} />
        ))}
      </div>
      <style jsx>{`
        .content p {
          margin: 5px 0px;
        }
      `}</style>
    </div>
  );
};

const PostCard = ({ item }) => {
  return (
    <div className="post-card rounded-md bg-gray-50 p-4 flex shadown-md transform transition duration-300 hover:-translate-y-1 mb-4">
      <div className="w-1/5 spect-w-16 spect-h-9 flex flex-col items-center">
        <ImageCustom src={item.image} />
      </div>
      <div className=" w-4/5 flex items-center flex-col px-3 ">
        <div className="font-bold text-gray-900 w-full ">{item.title}</div>
        <div className="text-gray-500 line-clamp-4 w-full mt-1 ">
          <ParseHTML content={item.content} />
        </div>
        <div className="text-gray-900 w-full mt-1 flex items-center">
          {localeTime(item.createdAt)}
          <Link href={"/bai-viet/" + item.slug}>
            <div className="text-center ml-3 pointer text-blue-500 hover:text-blue-900 font-bold ">
              Xem chi tiết
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps({ query, ...ctx }) {
  const res = await fetch(url_api + "/posts?category.slug=" + query.slug);
  const data = await res.json();
  return {
    props: { data: data },
  };
}

export default PostDeital;
