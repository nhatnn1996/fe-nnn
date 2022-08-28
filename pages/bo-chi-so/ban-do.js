import { timeCache } from "@/shared/config";
import axiosClient from "api-client/base/axios-client";
import geojsonDefautl from "@/components/map/binh-dinh.json";

import dynamic from "next/dynamic";

const MapWithNoSSR = dynamic(() => import("@/components/map/index"), {
  ssr: false,
});

export async function getStaticProps({ query, ...ctx }) {
  const data = await axiosClient("/geos");
  return {
    props: { data: data?.data },
    revalidate: timeCache, // will be passed to the page component as props
  };
}

const colors = {
  "van-canh": "#8E0E00",
  "an-nhon": "#76b852",
  "tay-son": "#512DA8",
  "phu-cat": "#00C9FF",
  "vinh-thanh": "#f46b45",
  "hoai-an": "#005C97",
  "hoai-nhon": "#e35d5b",
  "an-lao": "#fc00ff",
  "tuy-phuoc": "#2c3e50",
  "phu-my": "#757519",
  "qui-nhon": "#d7d2cc",
  // "Tuy Phuoc": "#ee9ca7",
  // "Binh Duong": "#f46b45",
};

export default function MapHome({ data }) {
  const listGeos = geojsonDefautl.features;
  const listGeoJson = listGeos.map((item) => {
    const property = data.find(
      (element) => item.properties.slug === element.attributes.slug
    );
    item.properties.name = property?.attributes.title;
    item.properties.count = property?.attributes.count;
    item.properties.source = property?.attributes.source;
    item.properties.percent = property?.attributes.percent;
    item.properties.color = colors[property?.attributes.slug];

    return item;
  });
  return (
    <div>
      <MapWithNoSSR listGeoJson={listGeoJson} />
    </div>
  );
}

MapHome.removeSlide = true;
