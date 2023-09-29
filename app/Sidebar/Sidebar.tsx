import styles from "./sidebar.module.css"

export default function Sidebar({ data, fn }: { data: Array<[String, boolean]>, fn: Function }) {

    const handleChange = (event: any) => {
        fn((prevVisibility: any) => ({ ...prevVisibility, [event.target.id]: !(data[event.target.id]) }))
    }

    return <div className={styles.sidebar}>
        {Object.entries(data).map((value: any, index) => {
            return (
                <div key={index}>
                    <input type="checkbox" id={`${value[0]}`} value={value[0]} checked={value[1]} onChange={handleChange} />
                    <label htmlFor={`${value[0]}`} className={styles.label}>{value[0]}</label>
                </div>)
        })}
    </div>
}
