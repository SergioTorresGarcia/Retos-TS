// RETO 1:
// interface getRandomSliceProps {
//     array: number[]
//     long: number
// }
// const getRandomSlice = ({ array, long }: getRandomSliceProps): number[] => {
//     if (array.length < long) {
//         throw new Error("La longitud solicitada es mayor que la longitud del arreglo")
//     }
//     let aleatorio: number = Math.floor(Math.random() * (array.length - long + 1))
//     console.log(aleatorio)
//     let segmento: number[] = miArreglo.slice(aleatorio, aleatorio + long)
//     return segmento
// }
// let miArreglo: number[] = [7, 10, 2, 45, 6, 22, 4, 9, 98, 104]
// console.log(getRandomSlice({ array: miArreglo, long: 4 }))
// RETO 2:
// interface Role {
//     id: number
//     name: string
// }
// const UserRoles: { [key: string]: Role } = {
//     ADMIN: { id: 1, name: "admin" },
//     MANAGER: { id: 2, name: "manager" },
//     USER: { id: 3, name: "user" },
// }
// const roleName = "admin"
// option 1 (by Pedro - called by the object name, not the object property)
// const getRoleFromRoleName = (roleName: string): Role | undefined => {
//     let result = UserRoles[roleName] !== undefined ? UserRoles[roleName] : undefined
//     return result
// }
// console.log(getRoleFromRoleName("ADMIN"))
// option 2 (by Javi - returns a string instead of an object)
// const getRoleFromRoleName2 = (roleName: string): string => {
//     for (const [key, Role] of Object.entries(UserRoles)) {
//         if (roleName === Role.name) {
//             return `{ id: ${Role.id}, name: '${Role.name}' }`
//         }}
//     return "NOK"
// }
// console.log(getRoleFromRoleName2("admin"))
// option 3 _BEST_(by David - desestructurized 'object entries')
// const getRoleFromRoleName3 = (roleName: string) => {
//     Object.entries(UserRoles).map(
//         ([_, valor], i) => {
//             if (valor.name == roleName) {
//                 console.log(valor)
//             }
//             return valor
//         })
// }
// getRoleFromRoleName3(roleName)
// RETO 3:
// const largo = (cadena: string) => {
//     return (cadena.length >= 8) ? true : false
// }
// const mayuscula = (cadena: string) => {
//     let res = false
//     for (let ch of cadena) {
//         (ch >= 'A' && ch <= 'Z') ? res = true : false
//     }
//     return res
// }
// const minuscula = (cadena: string) => {
//     let res = false
//     for (let ch of cadena) {
//         (ch >= 'a' && ch <= 'z') ? res = true : false
//     }
//     return res
// }
// const numero = (cadena: string) => {
//     let res = false
//     for (let ch of cadena) {
//         (!isNaN(parseInt(ch))) ? res = true : false
//     }
//     return res
// }
// const especial = (cadena: string) => {
//     let lista = ["@", "$", "!", "%", "*", "?", "&"]
//     let res = false
//     for (let ch of cadena) {
//         for (let i of lista) {
//             (ch == i) ? res = true : false
//         }
//     }
//     return res
// }
// const validarContraseña = (cadena: string) => {
//     const la = largo(cadena)
//     const ma = mayuscula(cadena)
//     const mi = minuscula(cadena)
//     const nu = numero(cadena)
//     const es = especial(cadena)
//     // console.log(la, ma, mi, nu, es)
//     return (la && ma && mi && nu && es) ? "contraseña correcta" : "contraseña incorrecta"
// }
// console.log(validarContraseña("Sergio@2"))
// RETO 4:
// interface matriz {
//     m1: number[][]
//     m2: number[][]
// }
// const m1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// const m2 = [[0, 1, 2], [3, 4, 5], [6, 7, 8]]
// const m3: number[][] = [];
// const sumarMatrices = ({ m1, m2 }: matriz): number[][] => {
//     if (m1.length !== m2.length || m1[0].length !== m2[0].length) {
//         throw new Error('Las matrices no tienen las dimensiones para poder realizar la suma')
//     }
//     for (let i = 0; i < m1.length; i++) {
//         m3[i] = [];
//         for (let j = 0; j < m1[0].length; j++) {
//             m3[i][j] = m1[i][j] + m2[i][j]
//         }
//     }
//     return m3
// }
// console.log(sumarMatrices({ m1, m2 }))
//RETO 5:
var pswrd = "";
var lista = ["@", "$", "!", "%", "*", "?", "&"];
var bigLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var smallLetters = 'abcdefghijklmnopqrstuvwxyz';
var posicion = Math.floor(Math.random() * lista.length);
var generarContraseña = function (long) {
    if (long < 4) {
        throw new Error("La contraseña no puede tener menos de 4 caracteres");
    }
    pswrd += lista[posicion]; // especial
    pswrd += bigLetters[posicion]; // especial
    pswrd += smallLetters[posicion]; // especial
    pswrd += Math.floor(Math.random() * 10); // número
    return pswrd;
};
console.log(generarContraseña(4));
