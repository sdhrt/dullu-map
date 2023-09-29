"use client"

import { MapContainer, TileLayer } from 'react-leaflet';
import type { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import GeoJsonParse from '../GeoJsonParse/GeoJsonParse';
import Sidebar from '../Sidebar/Sidebar';
import styles from "./map.module.css"
import { useEffect, useState } from 'react';

interface visibility_type {
    point: boolean
}

export default function Map(props: Array<JSON>) {

    const coord: LatLngExpression = [28.8527, 81.5816]
    const data = props;
    const [visibility, setVisiblity] = useState<visibility_type | any>({})


    useEffect(() => {
        for (let point in data) {
            if (data.hasOwnProperty(point)) {
                const obj: any = data[point];
                const name = obj.name;
                setVisiblity((prevVisibility: visibility_type) => ({ ...prevVisibility, [name]: false }))
            }
        }
    }, [data])

    return (
        <div className={styles.map}>
            <Sidebar data={...visibility} fn={setVisiblity} />
            <div id='map'>
                <MapContainer center={coord} zoom={12} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {
                        Object.values(data).map((point: JSON | any, index: any) => {
                            return visibility[point.name] && <GeoJsonParse {...Object.values(point)} key={index} />
                        })
                    }
                </MapContainer>
            </div >
        </div>
    )

}
