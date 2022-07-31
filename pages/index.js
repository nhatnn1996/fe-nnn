import Head from "next/head";

import PostMain from "@/widgets/posts/main";
import PostContent from "@/widgets/posts/content";
import PostRecommed from "@/widgets/posts/recommend";
import Video from "@/widgets/video/index";
import axiosClient from "api-client/base/axios-client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { timeCache } from "@/shared/config";

export async function getStaticProps({ query, ...ctx }) {
  const main = await axiosClient("/posts?populate=*&pagination[pageSize]=6");
  const url_inside = `/posts?populate=category&filters[category][slug]=tin-trong-nuoc&pagination[pageSize]=6&_sort=updatedAt:desc`;
  const url_outside = `/posts?populate=category&filters[category][slug]=tin-ngoai-nuoc&pagination[pageSize]=6&_sort=updatedAt:desc`;
  const url_recommend =
    "/posts?_sort=createdAt&populate=*&pagination[pageSize]=3";
  const url_video = "/videos?pagination[pageSize]=4&populate=*";
  const url_notification = "/posts?notification=true&pagination[pageSize]=3";
  const post_inside = await axiosClient(url_inside);
  const post_outside = await axiosClient(url_outside);
  const post_recommend = await axiosClient(url_recommend);
  const notification = await axiosClient(url_notification);
  const videos = await axiosClient(url_video);
  const data = await Promise.all([
    main,
    post_inside,
    post_outside,
    post_recommend,
    videos,
    notification,
  ]);
  return {
    props: { data },
    revalidate: timeCache,
  };
}

export default function Home({ data }) {
  const [posts_main, post_inside, post_outside, post_recommend, videos] = data;
  return (
    <div>
      <Head>
        <title> Trang chủ </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="main">
        <PostMain posts={posts_main.data} />
        <PostContent
          post_inside={post_inside.data}
          post_outside={post_outside.data}
        />
        <PostRecommed post_recommend={post_recommend.data} />
        <Video videos={videos.data} />
      </div>
    </div>
  );
}
