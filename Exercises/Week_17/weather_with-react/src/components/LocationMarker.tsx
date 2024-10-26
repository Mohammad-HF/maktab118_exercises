import { useEffect, useState } from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";
import { IGeometry } from "./Weather";
import { ILeafletRes } from "../types/leaflet";

export const LocationMarker: React.FC<{
  formatted?: string;
  geo?: IGeometry;
  cbData: (d: ILeafletRes[]) => void;
}> = ({ formatted, geo, cbData }) => {
  const [position, setPosition] = useState<IGeometry | null>(null);
  const map = useMapEvents({
    click(e) {
        // setPosition(e.latlng);
        // for zoom in when zoom is not enough
        e.sourceTarget._zoom <= 8
        ? map.flyTo(e.latlng, 8)
        : map.flyTo(e.latlng, e.sourceTarget._zoom);
        cbData([e.latlng]);
    },
    
});
  useEffect(() => {
    if (geo) {
      setPosition(geo);
      map.flyTo(geo);
    }
  }, [geo]);
  return position === null ? null : (
    <Marker position={position}>
      <Popup>{formatted ? formatted : "location"}</Popup>
    </Marker>
  );
};
