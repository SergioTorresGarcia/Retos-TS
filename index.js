var getRandomSlice = function (_a) {
    var array = _a.array, long = _a.long;
    if (array.length < long) {
        throw new Error("La longitud solicitada es mayor que la longitud del arreglo");
    }
    var aleatorio = Math.floor(Math.random() * (array.length - long + 1));
    console.log(aleatorio);
    var segmento = miArreglo.slice(aleatorio, aleatorio + long);
    return segmento;
};
var miArreglo = [7, 10, 2, 45, 6, 22, 4, 9, 98, 104];
console.log(getRandomSlice({ array: miArreglo, long: 4 }));
