import React, {useEffect, useState} from "react";
import {FullscreenControl, Map, Placemark, YMaps, ZoomControl} from "react-yandex-maps";
import "./App.css";

export default function App() {

  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);

  useEffect(() => {
      if (navigator.geolocation) {
          navigator.geolocation.watchPosition(function(position) {
              setLat(position.coords.latitude)
              setLon(position.coords.longitude)
              console.log("lat: ", lat)
              console.log("lon: ", lon)
          });
      }
  },[lat,lon])



    return (
        <div>
            {lat !== null && lon !== null ?
                <YMaps>
                    <Map className="custom__yandex-map" state={
                        { center: [lat, lon], zoom: 17 }}>

                        <Placemark geometry={[lat, lon]}/>
                        <FullscreenControl options={{float: 'left'}}/>
                        <ZoomControl options={{float: 'right'}}/>
                    </Map>
                </YMaps>
            :
                <div><h1>NO DATA ALLOWED</h1></div>}
        </div>
    );

}
