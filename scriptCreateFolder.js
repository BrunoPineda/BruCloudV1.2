const $ = selector => document.querySelector(selector)
const $table = $('#table')
const $btn = document.getElementById('btn');
const $file = document.getElementById('file1');


console.log(btn); // 👉️ null
const $submit = $('#submit')
const $results = $('#results')

const $buttonCreateFolder = document.getElementById('createFile');
const $buttonUpdateFile = document.getElementById('updateFile');
const $buttonDeleteFile = document.getElementById('deleteFile');





let urlSite = document.URL;

function extraerParametros(urlSite) {

    if (typeof urlSite != 'string') {
        throw TypeError('El argumento debe ser una cadena de caracteres.');
    }

    // Pendiente: validar si una cadena de caracteres corresponde con una URL.

    return (urlSite.match(/([^?=&]+)(=([^&]*))/g) || []).reduce((a, p) => ((a[p.slice(0, p.indexOf('='))] = p.slice(p.indexOf('=') + 1)), a), {});
}
const nameDelete = extraerParametros(urlSite);
const nameFilter = nameDelete.name;
console.log(nameFilter)
try {
    console.log(nameDelete.name);
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

console.log(nameFilter)


$buttonCreateFolder.addEventListener('click', () => {
    /*hola*/
    Swal.fire({
        title: '¿Que nombre quieres ponerle a tu carpeta?',
        input: 'text',
        inputAttributes: {
            autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Crear',
        showLoaderOnConfirm: true,
        preConfirm: (nameDelete) => {
            var location = document.URL;
            var example = "http://localhost:3001/upload/folder/a!proMaster!crack"

            var url = "http://localhost:3001/upload/folder/" + nameFilter + "!" + nameDelete;
            console.log(url)

            var xhr = new XMLHttpRequest();
            xhr.open("POST", url);

            xhr.setRequestHeader("Content-Type", "application/json");
            //xhr.setRequestHeader("Content-Length", "0");

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
                title: `Tu carpeta se creo correctamente `
            })

            setTimeout((function() {
                window.location.reload();
            }), 500);

        }
    })
});


let td = document.createElement("li")

$btn.addEventListener('click', () => {


    event.preventDefault()
    const name1 = document.getElementById('name1').value;
    if (name1 == "") { return false; }
    //var url = "http://localhost:3001/upload/folder/JUAN!A";
    var url = "http://localhost:3001/upload/folder/" + nameFilter + "!" + name1;
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
        location.reload();
    }), 2500);




})