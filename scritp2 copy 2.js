const url = 'http://localhost:3001/';
const cargarDatos = async(url) => {
    const res = await fetch(url);
    const datos = await res.json();
    console.log(datos.data);



    $(document).ready(function() {

        datos.data.forEach(function(name, i) {
            const regex = /[.][a-zA-Z]+/;
            if (!regex.test(name)) {
                $("table").append("<tr >" +
                    "<td style='display:flex;' >  <img style='width: 30px;' src='./img/folder.png' alt='folder'> -> <a href='http://localhost:5502/folder%20copy.html?name=" + name + "'>" + name + " </a>" +
                    "</tr>");
            } else {
                $("table").append("<tr >" +
                    "<td>  <img style='width: 30px;  float: left;' src='./img/file.png' alt='folder'> <a style='float: left;' href='http://localhost:3001/" + name + "' target='_blank'>" + name + " </a>" + "<div style='float: right;'>" + datos.size[i] + "</div>" +
                    "</tr>");
            }
        });

    });
};

function extraerParametros(url) {
    if (typeof url != 'string') {
        throw TypeError('El argumento debe ser una cadena de caracteres.');
    }

    // Pendiente: validar si una cadena de caracteres corresponde con una URL.

    return (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce((a, p) => ((a[p.slice(0, p.indexOf('='))] = p.slice(p.indexOf('=') + 1)), a), {});
}

function arreglo(nameFilter) {
    const c = nameFilter.split('!');
    const d = c.join('!')
    console.log(d)
    return d;
}
const name = extraerParametros(url);
arreglo(nameFilter)



cargarDatos(url);