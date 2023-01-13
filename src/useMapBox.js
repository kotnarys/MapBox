import { useLayoutEffect } from "react";
import mapboxgl from "mapbox-gl";

export default function useMapBox({
  id = "map",
  center = [37.61192, 55.76199],
  zoom = 10,
  random,
  ...props
}) {
  mapboxgl.accessToken =
    "pk.eyJ1Ijoid3JremciLCJhIjoiY2w1MTRsMW41MDI0ejNkcnliczMyNmpjNyJ9.Oydx12NzpiCwXiQ8qKG9-Q";

  useLayoutEffect(() => {
    new mapboxgl.Map({
      container: id,
      style: "mapbox://styles/mapbox/dark-v10",
      center: center,
      zoom: zoom
    });
  });
}
