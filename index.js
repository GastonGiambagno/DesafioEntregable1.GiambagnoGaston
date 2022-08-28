alert("Bienvenido al convertidor de moneda Online");

const dolar = 1;
const pesoArg = dolar * 0.0072;
const euro = dolar * 1.10;
const real = dolar * 0.2;

alert("Ingrese el tipo de moneda que posee");
let monedaUsuario = parseInt(prompt(`
1 - Peso Argentino
2 - Euro
3 - Dolar Estadunidense
4 - Real`));

    while (monedaUsuario < 1 || monedaUsuario > 4) {
        alert('Error. Deberá colocar un valor entre 1 y 4');
        alert("Ingrese el tipo de moneda que posee");
        monedaUsuario = parseInt(prompt(`
        1 - Peso Argentino
        2 - Euro
        3 - Dolar
        4 - Real`));
    }

if(monedaUsuario == "1") {
    monedaUsuario = pesoArg
}
if(monedaUsuario == "2") {
    monedaUsuario = euro
}
if(monedaUsuario == "3") {
    monedaUsuario = dolar
}
if(monedaUsuario == "4") {
    monedaUsuario = real
}

let montoUsuario = parseFloat(prompt(`Ingrese el monto que posee`));

    while (montoUsuario == Number) {
        alert('Error. Deberá colocar un valor numerico');
        alert("Ingrese el tipo de moneda al cual quiere convertir su dinero");
        moneda2 = parseInt(prompt(`
        1 - Peso Argentino
        2 - Euro
        3 - Dolar
        4 - Real`));
    }

alert("Ingrese el tipo de moneda al cual quiere convertir su dinero");
let moneda2 = parseInt(prompt(`
1 - Peso Argentino
2 - Euro
3 - Dolar Estadunidense
4 - Real`));

    while (moneda2 < 1 || moneda2 > 4) {
        alert('Error. Deberá colocar un valor entre 1 y 4');
        alert("Ingrese el tipo de moneda al cual quiere convertir su dinero");
        moneda2 = parseInt(prompt(`
        1 - Peso Argentino
        2 - Euro
        3 - Dolar
        4 - Real`));
    }

if(moneda2 == "1") {
    moneda2 = pesoArg
}
if(moneda2 == "2") {
    moneda2 = euro
}
if(moneda2 == "3") {
    moneda2 = dolar
}
if(moneda2 == "4") {
    moneda2 = real
}

let resultado = convertidor(monedaUsuario,montoUsuario,moneda2);

alert(`El resultado es ${resultado}`);



