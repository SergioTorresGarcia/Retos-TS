#### RETO 1:
Obtener Segmento Aleatorio de un Array en TypeScript
Desarrollar una función en TypeScript llamada getRandomSlice que recupere un segmento aleatorio de un arreglo dado con una longitud especificada. La función debe aceptar dos parámetros: un arreglo de cualquier tipo y un valor numérico que represente la longitud deseada del segmento aleatorio.
Si la longitud solicitada excede la longitud del arreglo, la función deberá lanzar un error indicando que la longitud
solicitada es mayor que la longitud del arreglo.
La función getRandomSlice debe devolver un segmento aleatorio del arreglo de entrada con la longitud especificada. 
Para lograr esto, generará un índice de inicio aleatorio dentro del rango del arreglo. Luego, extraerá
un segmento del arreglo comenzando desde el índice generado
aleatoriamente y extendiéndose hasta el índice más la longitud especificada.

#### RETO 2:
Obtener Rol por Nombre desde un Conjunto Predefinido en TypeScript
Desarrollar una función en TypeScript llamada getRoleFromRoleName que reciba como parámetro el nombre
de un rol como una cadena y devuelva el objeto de rol correspondiente desde un conjunto predefinido de roles.
El conjunto de roles se define como sigue:
<!-- IMAGE -->
Obtener Rol por Nombre desde un Conjunto Predefinido en TypeScript

La función getRoleFromRoleName debe buscar el rol por su nombre dentro del conjunto
predefinido y devolver el objeto de rol si se encuentra una coincidencia, o undefined si no se
encuentra ninguna coincidencia.
Uso de Ejemplo:
const roleName = "admin";
const role = getRoleFromRoleName(roleName);
console.log(role); // Salida: { id: 1, name: "admin" } (o el objeto de rol
correspondiente)

#### RETO 3:
Validación de Contraseña:
Escribe una función llamada validarContraseña que tome una cadena como argumento y verifique si
cumple con los siguientes criterios para ser considerada una contraseña segura:
- Debe tener al menos 8 caracteres.
- Debe contener al menos una letra mayúscula.
- Debe contener al menos una letra minúscula.
- Debe contener al menos un número.
- Debe contener al menos un carácter especial de la siguiente lista: @$!%*?&.
La función debe devolver true si la contraseña cumple con todos los criterios y false en caso contrario.

#### RETO 4:
Operaciones con Matrices:
Escribe una función llamada sumarMatrices que tome dos matrices como argumentos y
devuelva una nueva matriz que sea el resultado de la suma de las dos matrices de entrada.
Asegúrate de manejar correctamente los casos en los que las matrices no tengan las mismas
dimensiones para poder realizar la operación de suma. Las matrices se representan como
arrays bidimensionales de números.

#### RETO 5:
Generación de Contraseñas Aleatorias:
Escribe una función llamada generarContraseña que tome un parámetro longitud de tipo
number y devuelva una cadena aleatoria de esa longitud que cumpla con los siguientes
requisitos:
● Debe contener una combinación de letras mayúsculas y minúsculas.
● Debe contener al menos un número.
● Debe contener al menos un carácter especial de la siguiente lista: !@#$%^&*.

#### RETO 6:
Validación de Direcciones de Correo Electrónico:
Escribe una función llamada validarCorreoElectrónico que tome una cadena como argumento y
verifique si es una dirección de correo electrónico válida según el siguiente patrón:
- Debe comenzar con una cadena que no contenga espacios ni símbolos especiales.
- Debe contener un símbolo '@' seguido de una cadena que no contenga espacios ni símbolos
especiales.
- Después del símbolo '@', debe contener un punto '.' seguido de una cadena que no contenga
espacios ni símbolos especiales.
- La función debe devolver true si la cadena cumple con el patrón de una dirección de correo
electrónico válida y false en caso contrario.

#### RETO 7:
Cifrado César:
Escribe una función llamada cifradoCesar que tome dos parámetros: una cadena de texto y un
número que represente el desplazamiento del cifrado César. La función debe cifrar la cadena de texto
utilizando el cifrado César con el desplazamiento especificado y devolver la cadena cifrada. El cifrado
César consiste en desplazar cada letra en el alfabeto un número fijo de posiciones hacia la derecha. Si
la letra alcanza el final del alfabeto, continúa desde el principio. Los números y otros caracteres no
deben ser cifrados.

#### RETO 8:
Juego de cartas
● El objetivo es usar arrays en TypeScript para representar un mazo de cartas.
● Instrucciones:
● 1. Crea un nuevo archivo TypeScript.
● 2. Crea un array que represente un mazo de cartas.
● 3. El array debe tener 52 cartas, cada una con un palo y un valor.
● 4. Crea una función que baraja el mazo.
● 5. Crea una función que reparte una carta del mazo.
● 6. Prueba las funciones.

#### RETO 9:
Extraer Valor Aleatorio de un Array en TypeScript
Desarrollar una función en TypeScript utilizando arrow function que reciba un arreglo como entrada
y devuelva un valor aleatorio del arreglo. La función deberá calcular un índice aleatorio utilizando
la función Math.random() y el tamaño del arreglo proporcionado. Una vez calculado el índice
aleatorio, se utilizará para extraer un elemento aleatorio del arreglo.
Tu tarea es crear una función que realice este proceso de manera eficiente y precisa, asegurando que
el valor extraído sea uno de los elementos del arreglo.
Uso de Ejemplo:
const authors = ["John Doe", "Jane Smith", "Alice Johnson", "Bob Brown"];
const randomAuthor = getRandomValueFromArray(authors);
console.log("Autor Aleatorio:", randomAuthor);

#### RETO 10:
Extracción de Subarray Aleatorio en TypeScript
Desarrollar una función getRandomSubarray en TypeScript que extraiga un subarreglo
completamente aleatorio de un arreglo dado. El subarreglo aleatorio debe tener una longitud
especificada y estar compuesto por elementos seleccionados al azar del arreglo original.
Tu tarea es crear una función que implemente este proceso de manera eficiente y precisa,
asegurando que el subarreglo generado sea una muestra representativa y aleatoria del arreglo
original
Ejemplo de Uso:
const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const randomSubarray = getRandomSubarray(originalArray, 4);
console.log("Subarreglo Aleatorio:", randomSubarray)