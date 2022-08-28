import React, { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  GeoJSON,
  TileLayer,
  useMap,
  Popup,
  CircleMarker,
  Circle,
} from "react-leaflet";
import L from "leaflet";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

const colors = {
  "Van Canh": "#8E0E00",
  "An Nhon": "#76b852",
  "Tay Son": "#512DA8",
  "Phu Cat": "#00C9FF",
  "Vinh Thanh": "#f46b45",
  "Hoai An": "#005C97",
  "Hoai Nhon": "#e35d5b",
  "An Lao": "#fc00ff",
  "Tuy Phuoc": "#2c3e50",
  "Phu My": "#757519",
  "Qui Nhon": "#d7d2cc",
  "Tuy Phuoc": "#ee9ca7",
  "Binh Duong": "#f46b45",
};

const defaultColor = (name, change = {}) => {
  const color = name;
  return {
    radius: 8,
    fillColor: color,
    color: "white",
    weight: 2,
    opacity: 1,
    fillOpacity: 0.5,
    dashArray: "3",
    ...change,
  };
};

const SetupMap = () => {
  const map = useMap();
  useEffect(() => {
    // map.getPane("labels").style.zIndex = 650;
  }, []);
  return null;
};

const listLayer = {};

export default function App({ listGeoJson }) {
  const mapRef = useRef();
  const styleFunc = (item) => {
    const style = defaultColor(item?.properties?.color);
    return style;
  };

  function highlightFeature(e) {
    var layer = e.target;
    const { properties } = layer.feature;
    if (properties.Name === "Binh Dinh") return;
    layer.openPopup();
    layer.setStyle(defaultColor(properties?.color, { fillOpacity: 0.8 }));
    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
      layer.bringToFront();
    }
  }
  function resetHighlight(e) {
    var layer = e.target;
    const { properties } = layer.feature;
    if (properties.Name === "Binh Dinh") return;
    layer.setStyle({
      color: properties.color,
      radius: 8,
      color: "white",
      weight: 1,
      opacity: 1,
      fillOpacity: 0.5,
      dashArray: "3",
    });
  }
  const redOptions = { color: "red" };
  const fillBlueOptions = { fillColor: "blue" };

  function onEachFeature(feature, layer) {
    const { name, count, percent, source, District: district} = feature.properties;
    console.log(feature.properties);
    if (!listLayer[district]) listLayer[district] = layer;
    layer.bindPopup(`<div class="w-[300px] font-semibold text-lg">
      <div class="flex my-3"> <span> Vùng </span> <span class='ml-auto font-bold '> ${name} </span> </div>
      <div class="flex my-3"> <span>  Số hộ dùng nước </span> <span  class='ml-auto font-bold '> ${count} </span> </div>
      <div class="flex my-3"> <span>  Nguồn nước </span> <span  class='ml-auto font-bold '> ${source} </span> </div>
      <div class="flex my-3"> <span>  Tỉ lệ đạt chuẩn </span> <span class='ml-auto font-bold '>   ${percent}% </span> </div>
    </div>`);
    layer.on({
      mouseover: highlightFeature,
      mouseout: resetHighlight,
      click: zoomToFeature,
    });
  }
  function zoomToFeature(e) {
    mapRef.current.fitBounds(e.target.getBounds());
  }
  const hardToken =
    "pk.eyJ1IjoicmFua3JoIiwiYSI6ImNraDFnbjlrcTAxZjMydG4xN2dyNmtoYWUifQ.tlJBm2GyxVZapHdK0_oDyQ";
  return (
    <div className="flex">
      <div style={{ minWidth: 80 + "%", height: 100 + "vh" }}>
        <MapContainer
          style={{ height: "100%" }}
          zoom={10}
          center={[13.75966, 109.206123]}
          ref={mapRef}
          // zoomAnimation
          doubleClickZoom
        >
          <TileLayer
            // attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            url={`https://api.mapbox.com/styles/v1/mapbox/streets-v9/tiles/256/{z}/{x}/{y}@2x?access_token=${hardToken}`}
            attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
          />
          <GeoJSON
            data={listGeoJson}
            style={styleFunc}
            onEachFeature={onEachFeature}
          />
          <SetupMap />
        </MapContainer>
      </div>
      <div className="w-full pl-8">
        {Object.keys(colors).map((key) => {
          return (
            <div
              className=" py-4 px-4 rounded border-b-[1px] border-dashed cursor-pointer transition-color duration-300 hover:text-white font-medium hover:bg-blue-500"
              key={key}
              onClick={() => {
                window.scrollTo(0, 200);
                const zone = listLayer[key];
                zone.bringToFront();
                // zone.style.zIndex = 401
                const bounds = zone.getBounds();
                mapRef.current.fitBounds(bounds, { maxZoom: 12 });
                zone.openPopup();
              }}
            >
              {key}
            </div>
          );
        })}
      </div>
    </div>
  );
}
