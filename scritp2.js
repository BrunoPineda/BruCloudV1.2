const url = 'https://api-rest-brucorp1.herokuapp.com/';
const cargarDatos = async(url) => {
    const res = await fetch(url);
    const datos = await res.json();


    $(document).ready(function() {

        datos.data.forEach(function(name, i) {
            const regex = /[.][a-zA-Z]+/;
            if (!regex.test(name)) {
                $("table").append("<tr >" +
                    "<td style='display:flex;' >  <img style='width: 30px;' src='./img/folder.png' alt='folder'> -> <a href='https://brunopineda.github.io/BruCloudV1.2/folder.html?name=" + name + "' id='BruCorp'>" + name + "<id='AdminFiltro'/a>" +
                    "</tr>");

            } else {
                $("table").append("<tr >" +
                    "<td>  <img style='width: 30px;  float: left;' src='./img/file.png' alt='folder'> <a style='float: left;' <a href='https://api-rest-brucorp1.herokuapp.com/" + name + "' target='_blank' id='BruCorp'>" + name + "<id='AdminFiltro'/a>" + " </a>" + "<div style='float: right;'>" + datos.size[i] + "</div>" +
                    "</tr>");
            }
            datosTabla();
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

cargarDatos(url);

function borrarElemento(name) {
    event.preventDefault()
    const name1 = name;
    if (name1 == "") { return false; }
    var url = "https://api-rest-brucorp1.herokuapp.com/upload/" + name1;
    console.log(url)
    var xhr = new XMLHttpRequest();
    xhr.open("DELETE", url);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    };
    xhr.send();

    setTimeout((function() {
        window.location.reload();
    }), 1250);

}

function borrarFolder(name) {
    event.preventDefault()
    const name1 = name;
    if (name1 == "") { return false; }
    var url = "https://api-rest-brucorp1.herokuapp.com/upload/folder/" + name1;
    console.log(url)
    var xhr = new XMLHttpRequest();
    xhr.open("DELETE", url);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    };
    xhr.send();

    setTimeout((function() {
        window.location.reload();
    }), 1250);
}

function editarFolder(newName) {
    Swal.fire({
        title: '¿Con que nombre vas a editar tu carpeta?',
        input: 'text',
        inputAttributes: {
            autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Crear',
        showLoaderOnConfirm: true,
        preConfirm: (name) => {
            var url = "https://api-rest-brucorp1.herokuapp.com/upload/folder/" + newName + "&" + name;

            var xhr = new XMLHttpRequest();
            xhr.open("PUT", url);

            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.setRequestHeader("Content-Length", "0");

            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    console.log(xhr.status);
                    console.log(xhr.responseText);
                }
            };

            xhr.send();


        },
        allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Creado correctamente"
            })

            setTimeout((function() {
                window.location.reload();
            }), 1500);

        }
    })
}

function editarElemento(newName, extension) {
    Swal.fire({
        title: '¿Con que nombre vas a editar tu archivo?',
        input: 'text',
        inputAttributes: {
            autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Crear',
        showLoaderOnConfirm: true,
        preConfirm: (name) => {

            var url = "https://api-rest-brucorp1.herokuapp.com/upload/folder/" + newName + "&" + name + "." + extension;
            console.log(url)
            var xhr = new XMLHttpRequest();
            xhr.open("PUT", url);

            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.setRequestHeader("Content-Length", "0");

            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    console.log(xhr.status);
                    console.log(xhr.responseText);
                }
            };

            xhr.send();


        },
        allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Creado correctamente"
            })
            setTimeout((function() {
                window.location.reload();
            }), 1500);

        }
    })
}

function isFolder(name) {
    const regex = /[.][a-zA-Z]+/;
    if (!regex.test(name)) {
        console.log("es una carpeta")
        return true
    } else {
        console.log("es un archivo")
        return false
    }
}