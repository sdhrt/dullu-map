import { LatLng, Layer } from "leaflet";
import L from "leaflet";
import { GeoJSON } from "react-leaflet"

import schoolIcon from "@/public/icons/school.svg"
import towerIcon from "@/public/icons/tower.svg"
import serverIcon from "@/public/icons/server.svg"
import defaultIcon from "@/public/icons/default.svg"

export default function GeoJsonParse(props: any[]) {

    function popUp(feature: any, layer: any) {
        layer.bindPopup(feature.properties.Name);
    }

    const colorMap: Map<String, String> = new Map([["routes", "#FF0000"], ["IoT_NN_Project", "#0047AB"], ["Wireless_Tower_to_Tower", "#FFFF00"], ["OFC_Routes", "#800080"]])

    const setColor = (obj: any): any => {
        if (obj.geometry.type == "LineString") {
            // return {
            //     color: (colorMap.get(props[1])),
            // }
        }
    };

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
        if (props[0] == 'schools') {
            current = (schoolIcon);
        } else if (props[0] == "tower") {
            current = (towerIcon);
        } else if (props[0] == "server") {
            current = (serverIcon)
        } else {
            current = (defaultIcon);
        }

        return L.marker(latlang, { icon: convert(current.src) })
    }
    console.log(props)

    return (<GeoJSON data={props[3]} style={setColor} onEachFeature={popUp} pointToLayer={marker} />)

}
