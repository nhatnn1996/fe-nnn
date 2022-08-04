import Head from "next/head";
import { localeTime } from "@/shared/helper/function";
import { url_api, url_base } from "@/shared/container/index";
import NotFound from "@/widgets/notfound";
import axiosClient from "api-client/base/axios-client";
import { timeCache } from "@/shared/config";
import ParseHTML from "@/components/common/parsehtml";

export async function getStaticPaths() {
  const posts = await axiosClient.get(
    "/pages?fields[1]=slug&pagination[pageSize]=10"
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
  const url = "/pages?filters[slug][$eq]=" + params.slug;
  const result = await axiosClient.get(url);
  const post = result?.data?.length > 0 ? result?.data[0] : null;
  return {
    props: { post, slug: params.slug, revalidate: timeCache },
  };
}

const PostDeital = ({ post, slug }) => {
  console.log(post);
  if (!post) return <NotFound />;
  const data = post.attributes;
  return (
    <div>
      <Head>
        <title> {data.title} </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="pb-10 pr-10">
        <div className="font-bold text-blue-900 text-xl">{data.title}</div>
        {/* <div className=""> */}
        {/* Tác giả:
          <strong className=""> Quản trị viên </strong> */}
        {/* {data.admin_user?.firstname } */}
        {/* </div> */}
        <code className="text block mt-3">
          Ngày tạo: {localeTime(data.createdAt)}
        </code>
        <ParseHTML content={data.content} />
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
