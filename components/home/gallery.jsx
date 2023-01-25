import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useRef } from "react";
import { PhotoAlbum } from "react-photo-album";
import Slider from "react-slick";
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
};
const photos = [
  {
    src: "https://nuocnongthon.binhdinh.vn/images/stories/hinhanhnhamay/3caac04bbb574b091246.jpg",
    width: 600,
    height: 300,
  },
  {
    src: "https://nuocnongthon.binhdinh.vn/images/stories/hinhanhnhamay/51a78b735bfbada5f4ea.jpg",
    width: 700,
    height: 300,
  },
  {
    src: "https://nuocnongthon.binhdinh.vn/images/stories/hinhanhnhamay/530085de5556a308fa47.jpg",
    width: 500,
    height: 300,
  },
  {
    src: "https://nuocnongthon.binhdinh.vn/images/stories/hinhanhnhamay/3caac04bbb574b091246.jpg",
    width: 800,
    height: 300,
  },
  {
    src: "https://nuocnongthon.binhdinh.vn/images/stories/hinhanhnhamay/530085de5556a308fa47.jpg",
    width: 700,
    height: 300,
  },
  {
    src: "https://nuocnongthon.binhdinh.vn/images/stories/hinhanhnhamay/3caac04bbb574b091246.jpg",
    width: 1000,
    height: 900,
  },
];
const PhotoAlbums = () => {
  return (
    <div className="photo-album mt-10">
      <div className="font-bold text-stone-700 text-md mb-3">HÌNH ẢNH NHÀ MÁY</div>
      <PhotoAlbum layout="rows" photos={photos} />
    </div>
  );
};

export default PhotoAlbums;
