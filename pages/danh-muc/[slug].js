import Head from "next/head";
import Link from "next/link";
import { localeTime } from "@/shared/helper/function";
import ParseHTML from "@/components/common/parsehtml";
import ImageCustom from "@/components/common/image";
import axiosClient from "api-client/base/axios-client";
import { timeCache } from "@/shared/config";
import Breadcrumb from "@/widgets/breadcrum";

export async function getStaticPaths() {
  const posts = await axiosClient.get(
    "/categories?fields[1]=slug&pagination[pageSize]=10"
  );
  const paths = posts.data.map((element) => ({
    params: { slug: element.attributes.slug },
  }));
  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const url_posts =
    "posts?populate=category&populate=image&filters[category][slug]=" +
    params.slug;
  const url_category = "categories?filters[slug]=" + params.slug;

  const [category, posts] = await Promise.all([
    axiosClient.get(url_category),
    axiosClient.get(url_posts),
  ]);

  return {
    props: {
      category: category.data[0] || {},
      posts: posts.data,
      slug: params.slug,
      revalidate: timeCache,
    },
  };
}

const PostDeital = ({ posts, category }) => {
  const breadcrumb = [
    {
      text: category?.attributes?.title || "",
      url: category?.attributes?.slug || "",
    },
  ];
  return (
    <div>
      <Head>
        <title> Danh sách bài viết </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="pb-10 pr-10">
        <Breadcrumb breadcrumb={breadcrumb} />
        {posts.length === 0 && <img src="/images/notfound.jpg" />}
        {posts.map((element) => (
          <PostCard key={element.id} item={element} />
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
  const data = item.attributes;
  return (
    <div className="post-card rounded-md bg-gray-50 p-4 flex shadown-md transform transition duration-300 hover:-translate-y-1 mb-4">
      <div className="w-1/5">
        <ImageCustom
          image={data.image}
          width="100%"
          height="100%"
          objectFit="cover"
        />
      </div>
      <div className=" w-4/5 flex items-center flex-col px-3 ">
        <div className="font-bold text-gray-900 w-full ">{data.title}</div>
        <div className="text-gray-500 line-clamp-4 w-full mt-1 ">
          <ParseHTML content={data.content} />
        </div>
        <div className="text-gray-900 w-full mt-1 flex items-center">
          {localeTime(data.createdAt)}
          <Link href={"/bai-viet/" + data.slug}>
            <div className="text-center ml-3 pointer text-blue-500 hover:text-blue-900 font-bold ">
              Xem chi tiết
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostDeital;
