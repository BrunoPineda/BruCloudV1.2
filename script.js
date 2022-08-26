const $ = selector => document.querySelector(selector)
const $table = $('#table')
const $file = document.getElementById('file1');



const $submit = $('#submit')
const $results = $('#results')

const $buttonCreateFile = document.getElementById('createFile');
const $buttonUpdateFile = document.getElementById('updateFile');
const $buttonDeleteFile = document.getElementById('deleteFile');


$buttonCreateFile.addEventListener('click', () => {
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
        preConfirm: (name) => {

            var url = "http://localhost:3001/upload/folder/" + name;

            var xhr = new XMLHttpRequest();
            xhr.open("POST", url);

            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.setRequestHeader("Content-Length", "1");

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
            }), 1500);

        }
    })
});