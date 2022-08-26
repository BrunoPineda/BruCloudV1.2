let urlSite = document.URL;

function extraerParametros(urlSite) {

    if (typeof urlSite != 'string') {
        throw TypeError('El argumento debe ser una cadena de caracteres.');
    }

    // Pendiente: validar si una cadena de caracteres corresponde con una URL.

    return (urlSite.match(/([^?=&]+)(=([^&]*))/g) || []).reduce((a, p) => ((a[p.slice(0, p.indexOf('='))] = p.slice(p.indexOf('=') + 1)), a), {});
}
const nameSite = extraerParametros(urlSite);
const nameFilter = nameSite.name;
console.log(nameFilter)
try {
    console.log(nameSite.name);
    // {prop1: v1, prop2: v2, prop3: v3}
} catch (e) {
    console.log(`Error: ${e.message}`);
}

function arreglo(nameFilter) {
    const c = nameFilter.split('!');
    const d = c.join('!')
    console.log(d)
    return d;
}



arreglo(nameFilter)




const url = 'https://api-rest-brucorp1.herokuapp.com/upload/folder/';
const cargarDatos = async(url) => {
    const res = await fetch(url);
    const datos = await res.json();

    $(document).ready(function() {

        datos.data.forEach(function(name, i) {
            console.log(name)
            console.log(nameFilter)
            const regex = /[.][a-zA-Z]+/;
            if (!regex.test(name)) {
                $("table").append("<tr >" +
                    "<td style='display:flex;' >  <img style='width: 30px;' src='./img/folder.png' alt='folder'> -> <a href='https://brunopineda.github.io/BruCloudV1.2/folder.html?name=" + arreglo(name) + "' id='BruCorp'>" + name + "<id='AdminFiltro'/a>" +
                    "</tr>");
                cargarDatos(url + "upload/folder/" + name);
            } else {
                $("table").append("<tr >" +
                    "<td>  <img style='width: 30px;  float: left;' src='./img/file.png' alt='folder'> <a style='float: left;' <a href='https://api-rest-brucorp1.herokuapp.com/" + name + "' target='_blank' id='BruCorp'>" + name + "<id='AdminFiltro'/a>" + " </a>" + "<div style='float: right;'>" + datos.size[i] + "</div>" +
                    "</tr>");
            }
            datosTabla();
        });

    });
};

var table = document.getElementById("table"),
    rIndex;


function datosTabla() {
    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].onclick = function() {
            rIndex = this.rowIndex;
            console.log(rIndex);

            const parsear = table.rows[rIndex].cells[0].innerHTML
            const chamo = parsear.split('id="BruCorp">');
            if (chamo.TypeError) { return }
            const venezolano = chamo[1].split('<id=');
            console.log(venezolano[0]);
            const extension = venezolano[0].split('.');
            var title = '¿Qué quieres hacer con tu archivo?';
            var img = './img/google-docs.png'

            if (isFolder(venezolano[0])) {
                title = '¿Qué quieres hacer con tu carpeta?';
                img = './img/open-folder.png';
            }

            Swal.fire({
                    title: title,
                    text: venezolano[0],
                    imageUrl: img,
                    imageWidth: 200,
                    imageHeight: 200,
                    imageAlt: 'brucloud',
                    showDenyButton: true,
                    showCancelButton: true,
                    confirmButtonText: 'Editar',
                    denyButtonText: `Eliminar`,
                })
                .then((result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (isFolder(venezolano[0])) {
                        if (result.isConfirmed) {
                            editarFolder(venezolano[0])
                        } else if (result.isDenied) {
                            borrarFolder(venezolano[0])
                        }
                    } else {
                        if (result.isConfirmed) {
                            editarElemento(venezolano[0], extension[1])
                        } else if (result.isDenied) {
                            borrarElemento(venezolano[0])
                        }
                    }

                })

        };
    }
}