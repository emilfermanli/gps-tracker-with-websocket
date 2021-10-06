import React, {useState} from "react";
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import L from "leaflet";
import marker from "../../assets/img/marker.webp";

function TrackCar() {

    const myIcon = L.icon({
        iconUrl: marker,
        iconSize: [35, 35],
        iconAnchor: [12.4, 41],
        popupAnchor: [0, -41],
      });


    const [location] = useState({
        lat: 40.410629,
        lng: 49.861457,
      });
    
    const position = location;

  return (
      <Map style={{ height: "100%" }} center={position} zoom={13}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker icon={myIcon} position={position}>
          <Popup>
            A pretty CSS3 popup.
            <br />
            Easily customizable.
          </Popup>
        </Marker>
      </Map>
  );
}

export default TrackCar;
