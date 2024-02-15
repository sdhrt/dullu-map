import { LatLng, Layer } from "leaflet";
import L from "leaflet";
import { GeoJSON } from "react-leaflet"

import schoolIcon from "@/public/icons/school.svg"
import towerIcon from "@/public/icons/tower.svg"
import serverIcon from "@/public/icons/server.svg"
import defaultIcon from "@/public/icons/default.svg"

export default function GeoJsonParse(props: any[]) {

    function popUp(feature: any, layer: any) {
        if (feature.geometry.type != "Polygon") { // The dataset doesn't have name for wards i.e. polygons
            layer.bindPopup(feature.properties.Name);
        }
    }

    const convert = (props: string): L.Icon => {
        return L.icon({
            iconSize: [27, 27],
            iconAnchor: [13, 27],
            popupAnchor: [1, -24],
            iconUrl: props
        })
    }


    function marker(__geoJson: any, latlang: LatLng): Layer {
        let current;
        console.log(props[1])
        if (props[1] == "Dullu Schools") {
            current = (schoolIcon);
        } else if (props[1] == "Project Towers") {
            current = (towerIcon);
        } else if (props[1] == "IoT NN Project") {
            current = (serverIcon)
        } else {
            current = (defaultIcon);
        }

        return L.marker(latlang, { icon: convert(current.src) })
    }

    return (<GeoJSON data={props[3]} onEachFeature={popUp} pointToLayer={marker} />)

}
