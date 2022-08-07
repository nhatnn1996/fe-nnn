import dynamic from "next/dynamic";

const MapWithNoSSR = dynamic(() => import("@/components/map/index"), {
  ssr: false,
});

export default function MapHome() {
  return (
    <div>
      <MapWithNoSSR />
    </div>
  );
}

MapHome.removeSlide = true;
