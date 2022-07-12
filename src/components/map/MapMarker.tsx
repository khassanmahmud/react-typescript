import React from "react";

interface Point {
  lat: string;
  lng: string;
  text: string;
}

const MapMarker: React.FC<Point> = () => {
  return (
    <img
      src="../../assets/images/marker.png"
      alt="marker"
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        width: "20px",
        height: "20px",
        userSelect: "none",
        cursor: "pointer",
      }}
    />
  );
};

export default MapMarker;
