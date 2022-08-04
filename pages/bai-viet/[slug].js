import Head from "next/head";
import { localeTime } from "@/shared/helper/function";
import NotFound from "@/widgets/notfound";
import axiosClient from "api-client/base/axios-client";
import ParseHTML from "@/components/common/parsehtml";
import Breadcrumb from "@/widgets/breadcrum";

export async function getStaticProps({ params }) {
  const res = await axiosClient.get(
    "/posts?populate=*&filters[slug][$eq]=" + params.slug
  );
  return {
    props: { data: res.data[0] },
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

const PostDeital = ({ data }) => {
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
        <code className="text block mt-3">{localeTime(createdAt)}</code>
        <ParseHTML content={content} />
        {data.file && (
          <div className="mt-5">
            <a
              className="font-medium text-blue-700 text-lg"
              href={process.env.BASE_IMAGE + data.file.url}
              target="_blank"
            >
              Xem nội dung chi tiết
            </a>
          </div>
        )}
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
