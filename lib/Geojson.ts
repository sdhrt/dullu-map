import * as fs from 'fs'
const readPath = "public/json/"

export interface TypeList {
    [key: string]: string[] // adjusting require this in order to some json data type
}

function DeclareEachJSON(): TypeList {
    const fileNames = fs.readdirSync(readPath).filter(file => file.match(/\.geojson$/))
    const typeList: TypeList = {}

    fileNames.forEach((fileName: string) => {
        let typeName = fileName.match(/(^.*?)\.geojson/)
        if (typeName) {
            typeList[typeName[1]] = JSON.parse(fs.readFileSync(readPath + fileName, 'utf8').toString())
        }
    })
    return typeList
}

export default function getData(): TypeList {
    const data: TypeList = DeclareEachJSON();
    return (data)
}
