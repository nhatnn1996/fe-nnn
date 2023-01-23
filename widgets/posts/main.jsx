import Link from "next/link";
import { url_base } from "@/shared/container/index";
import Slider from "react-slick";
import { getImage } from "@/shared/helper/function";
import ImageCustom from "@/components/common/image";

const PostMain = ({ posts }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="post-main overflow-hidden">
      <div className="flex gap-3">
        <div className="w-9/12 h-full">
          <Slider {...settings} className="mx-[-8px] mt-2 h-full">
            {posts.map((item, index) => {
              const post = item.attributes;
              return (
                <div
                  className={`post-content w-12/12 px-2 h-full hover:text-blue-700 group`}
                  key={item._id}
                >
                  <div className="bg-gray-50">
                    <ImageCustom
                      className="post-main-image mt-2"
                      image={post?.image}
                      layout="responsive"
                      width="100%%"
                      height="70%"
                      objectFit="cover"
                      size="small"
                    />
                  </div>
                  <Link href={"/bai-viet/" + post.slug}>
                    <div>
                      <div className="text-base font-bold text-gray-700	mt-2">
                        {post.title}
                      </div>
                      <div className="text-base text-gray-600 line-clamp-2 italic">
                        {post.description}
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </Slider>
        </div>
        <div className="w-3/12">
          <Link href="/bo-chi-so/ban-do">
            <div className="overflow-hidden mt-2 map-home group relative rounded">
              <img
                src="/images/binh-dinh-map.jpeg"
                className="cursor-pointer hover:scale-125	transition-all duration-300"
              />
              <div className="absolute opacity-1 top-[30%] left-[10%] bg-white bg-gray shadow-lg pointer-events-none rounded p-4 font-bold">
                Bấm vào để đi đến bản đồ
              </div>
            </div>
          </Link>
        </div>
      </div>
      <style jsx>{`
        .post-content {
          cursor: pointer;
        }
        .post-main {
          // border-bottom: 1px dotted hsla(0, 0%, 0%, 0.3);
          // border-width: 2px;
        }
        .post-main-image {
          width: 100%;
          max-height: 300px;
          object-fit: cover;
        }
      `}</style>
      <div className="mt-10 h-1 w-full bg-secondary"> </div>
    </div>
  );
};

export default PostMain;
