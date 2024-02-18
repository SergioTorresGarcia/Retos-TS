
// RETO 1:
interface getRandomSliceProps {
    array: number[]
    long: number
}

const getRandomSlice = ({ array, long }: getRandomSliceProps): number[] => {

    if (array.length < long) {
        throw new Error("La longitud solicitada es mayor que la longitud del arreglo")
    }

    let aleatorio: number = Math.floor(Math.random() * (array.length - long + 1))
    console.log(aleatorio)

    let segmento: number[] = miArreglo.slice(aleatorio, aleatorio + long)
    return segmento
}

let miArreglo: number[] = [7, 10, 2, 45, 6, 22, 4, 9, 98, 104]
console.log(getRandomSlice({ array: miArreglo, long: 4 }))