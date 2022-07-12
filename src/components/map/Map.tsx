import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import axios from "axios";
import MapMarker from "./MapMarker";
import * as Interface from "../../data/Interface";

const Map: React.FC = () => {
  const [launches, setLaunches] = useState([]);
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  useEffect(() => {
    const fetchLaunches = async () => {
      const { data } = await axios.get(
        "https://lldev.thespacedevs.com/2.2.0/launch/?is_crewed=false&include_suborbital=true&related=false"
      );
      setLaunches(data.results);
    };

    fetchLaunches();
  }, []);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyC_jQTgpP-PWNcO33lhgH7rc1WtfrcAzZA" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {launches.map((launch: Interface.LaunchDto) => {
          return (
            <MapMarker
              key={launch.id}
              lat={launch.pad.latitude}
              lng={launch.pad.longitude}
              text={launch.pad.name}
            />
          );
        })}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
