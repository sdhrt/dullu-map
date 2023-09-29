import styles from "./page.module.css"
import type { TypeList } from "@/lib/Geojson"
import getData from "@/lib/Geojson"
import dynamic from "next/dynamic"

const LazyMap = dynamic(() => import('./Map/Map'), { ssr: false })

export default function Home() {

    const data: TypeList = getData();
    const geoData: JSON[] = JSON.parse(JSON.stringify(data));

    return (
        <main className={styles.main}>
            <LazyMap {...geoData} />
        </main>
    )
}
