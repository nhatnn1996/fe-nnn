import Head from "next/head";
import { localeTime } from "@/shared/helper/function";
import NotFound from "@/widgets/notfound";
import axiosClient from "api-client/base/axios-client";
import ParseHTML from "@/components/common/parsehtml";
import Breadcrumb from "@/widgets/breadcrum";
import { Post } from "@/widgets/posts/recommend";

export async function getStaticProps({ params }) {
  const res = await axiosClient.get(
    "/posts?populate=*&filters[slug][$eq]=" + params.slug
  );
  const slug = res.data[0].attributes?.category?.attributes?.slug;
  const resPostsCategory = await axiosClient.get(
    "/posts?populate=image&filter[category][slug]=" +
      slug +
      "&pagination[pageSize]=5"
  );
  const posts = resPostsCategory.data
    .filter((element) => element.id !== res.data[0].id)
    .slice(0, 4);
  return {
    props: { data: res.data[0], posts: posts },
  };
}

export async function getStaticPaths() {
  const res = await axiosClient.get("/posts");
  const paths = res.data.map((element) => ({
    params: { ...element, slug: element?.attributes?.slug },
  }));
  return {
    paths: paths,
    fallback: true,
  };
}

const PostDeital = ({ data, posts }) => {
  console.log(data);
  if (!data) return <NotFound />;
  const breadcrumb = [
    {
      text: data?.attributes?.category?.data?.attributes?.title,
      url: "/danh-muc/" + data?.attributes?.category?.data?.attributes?.slug,
    },
    {
      text: data?.attributes?.title,
      url: "/bai-viet/" + data?.attributes?.slug,
    },
  ];

  const { content, title, createdAt } = data.attributes;
  return (
    <div>
      <Head>
        <title> {title} </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="pb-10 pr-10">
        <Breadcrumb breadcrumb={breadcrumb} />

        <div className="font-bold text-blue-900 text-xl">{title}</div>
        <div className=" mt-3">
          Tác giả:
          <strong className="ml-3">
            Quản trị viên
            {/* {data.admin_user?.firstname} */}
          </strong>
        </div>
        <code className="text-xs block font-bold opacity-50 my-3">
          {localeTime(createdAt)}
        </code>
        <ParseHTML content={content} />
        <div className="font-bold mt-20 text-xl ">
          Bài viết cùng danh mục
        </div>
        <div className="flex mt-2">
          {posts.map((element) => (
            <Post item={element.attributes} key={element.slug} />
          ))}
        </div>
      </div>
      <style jsx>{`
        .content p {
          margin: 5px 0px;
        }
      `}</style>
    </div>
  );
};

export default PostDeital;
