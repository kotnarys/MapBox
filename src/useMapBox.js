import { useMemo, useLayoutEffect } from "react";
import mapboxgl from "mapbox-gl";

export default function useMapBox({
  center = [37.61192, 55.76199],
  zoom = 10,
  ref,
}) {
  mapboxgl.accessToken =
    "pk.eyJ1Ijoid3JremciLCJhIjoiY2w1MTRsMW41MDI0ejNkcnliczMyNmpjNyJ9.Oydx12NzpiCwXiQ8qKG9-Q";

  const [shirota, dolgota] = center;

  const centerMemo = useMemo(() => [shirota, dolgota], [shirota, dolgota]);

  useLayoutEffect(() => {
    new mapboxgl.Map({
      container: ref.current,
      style: "mapbox://styles/mapbox/dark-v10",
      center: centerMemo,
      zoom: zoom,
    });
  }, [id, zoom, centerMemo]);
}
