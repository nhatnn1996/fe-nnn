import React, { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, GeoJSON, TileLayer, useMap } from "react-leaflet";
import data from "./binh-dinh.json";
import L from "leaflet";

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
};

const defaultColor = (name, change = {}) => {
  const color = colors[name];
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

export default function App() {
  const mapRef = useRef();
  const styleFunc = (item) => {
    const style = defaultColor(item?.properties?.District);
    return style;
  };

  function highlightFeature(e) {
    var layer = e.target;
    const { properties } = layer.feature;
    if (properties.Name === "Binh Dinh") return;
    layer.openPopup();
    layer.setStyle(defaultColor(properties?.District, { fillOpacity: 0.8 }));
    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
      layer.bringToFront();
    }
  }
  function resetHighlight(e) {
    var layer = e.target;
    const { properties } = layer.feature;
    if (properties.Name === "Binh Dinh") return;
    layer.setStyle({
      color: colors[properties.District],
      radius: 8,
      color: "white",
      weight: 2,
      opacity: 1,
      fillOpacity: 0.5,
      dashArray: "3",
    });
  }
  function onEachFeature(feature, layer) {
    const district = feature.properties.District;
    if (!listLayer[district]) listLayer[district] = layer;
    layer.bindPopup(`<div class="hi-class"> Huyện ${district} </div>`);
    layer.on({
      mouseover: highlightFeature,
      mouseout: resetHighlight,
      click: zoomToFeature,
    });
  }
  function zoomToFeature(e) {
    mapRef.current.fitBounds(e.target.getBounds());
  }
  return (
    <div className="flex">
      <div style={{ minWidth: 80 + "%", height: 100 + "vh" }}>
        <MapContainer
          style={{ height: "100vh" }}
          zoom={10}
          center={[13.75966, 109.206123]}
          ref={mapRef}
          zoomAnimation
          doubleClickZoom
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <GeoJSON
            data={data}
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
                mapRef.current.fitBounds(listLayer[key].getBounds());
                listLayer[key].openPopup();
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
