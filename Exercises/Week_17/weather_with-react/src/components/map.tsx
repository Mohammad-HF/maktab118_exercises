import { ILeafletRes } from "../types/leaflet";
import { LocationMarker } from "./LocationMarker";
import { IGeometry } from "./Weather";
import { MapContainer, TileLayer } from "react-leaflet";

export const Map: React.FC<{
  formatted?: string;
  geo?: IGeometry | ILeafletRes;
  cbData: (d: ILeafletRes[]) => void;
}> = ({ geo, formatted, cbData }) => {
  //========= solution 1 : whitout component
  // useEffect(() => {
  //   const container = L.DomUtil.get("map");
  //   if (container != null) {
  //     container._leaflet_id = null;
  //   }
  //   const lat = geo ? geo.lat : 32.73;
  //   const long = geo ? geo.lng : 53.53;
  //   const zoom = geo ? 10 : 5;
  //   const map = L.map("map",{ dragging : true }).setView([lat, long], zoom);
  //   L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  //     maxZoom: 19,
  //     attribution:
  //       '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  //   }).addTo(map);
  //   let marker = geo && L.marker([lat, long]).addTo(map);
  //   marker && marker.bindPopup(`${formatted}`).openPopup();
  // }, [geo]);
  return (
    // <div className="max-w-[1600px] mx-auto border-2 border-white  my-2">
    //   <div id="map" className=" h-[400px]"></div>
    // </div>
    //========= solution 2 : with react component (main way)
    <>
      <MapContainer
        center={[32.73, 53.53]}
        zoom={5}
        scrollWheelZoom={true}
        className="h-[400px] max-w-[1600px] mx-auto border-y-2 border-x-4 border-white  my-2"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker geo={geo} formatted={formatted} cbData={cbData} />
      </MapContainer>
    </>
  );
};
