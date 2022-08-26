
//Agregar un elemento a la lista

var form = document.getElementById('formAgregar');
var lista = document.getElementById('items');
//var update = document.getElementById('');
var filtro = document.getElementById('filtro');

  var cantidad = document.querySelectorAll('li');
console.log(cantidad.length);

var TextoCantidad = document.getElementById('cantidad')
TextoCantidad.innerText = cantidad.length;

//Evento submit del formulario
form.addEventListener('submit',agregarItem);
//Evento click de la lista
lista.addEventListener('click',eliminarItem);
//Evento del teclado en el campo de filtro
filtro.addEventListener('keyup',filtrarItems);

var index;
//Función para agregar un Item a la lista
function agregarItem(e){
    e.preventDefault();
    var newItem = document.getElementById('item').value;

    if(newItem == ""){
      alert("Debe llenar el campo");
      return false;
    }
    if(newItem.length>50)
    { 
      alert("Como maximo puede poner 50 caracteres, gracias :)");
      return false;
    }
    form.reset();
    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));

    var botonDel = document.createElement('button');
    botonDel.className = 'btn btn-danger btn-sm float-right eliminar';
    botonDel.appendChild(document.createTextNode('X'));
    
    var botonDe = document.createElement('button');
    botonDe.className = 'btn btn-primary btn-sm float-right actualizar';
    botonDe.id = 'update';
    botonDe.appendChild(document.createTextNode('Actualizar'));

    li.appendChild(botonDel);  
    lista.appendChild(li);

    cantidad = document.querySelectorAll('li'),tab = [];

    var TextoCantidad = document.getElementById('cantidad')
    TextoCantidad.innerText = cantidad.length;


//Función actualizar
 index = 0;

var itemsss=document.querySelectorAll("#items li"),tab = [];
var texto1;
var separado1;
var a1;
var a2;
var separado2;
var posicion;

  for(var i = 0; i < itemsss.length; i++){
           tab.push(itemsss[i].innerHTML);
            }

for(var i = 0; i < itemsss.length; i++){
      itemsss[i].onclick = function(){
        index = tab.indexOf(this.innerHTML);
        console.log(index);
      texto1 = this.innerHTML;
      separado1 =texto1.split('<');

        for (var i = 0; i <= separado1.length; i++) {

                     if(i==0){
                      a1 = separado1[i];
 
                      a2=a1.split('   ');

                      posicion = a2.length;
                      console.log(a2[posicion-1]);


         }    

    document.getElementById('updatea').value=a2[posicion-1];

          }
  }
}


}

//Función para eliminar un Item de la lista
function eliminarItem(e){
    if(e.target.classList.contains('eliminar')){
        if(confirm('¿Seguro que desea eliminar el elemento')){
            var li = e.target.parentElement;
            lista.removeChild(li);

            cantidad = document.querySelectorAll('li');

    var TextoCantidad = document.getElementById('cantidad')
    TextoCantidad.innerText = cantidad.length;

//Función actualizar
 index = 0;

var itemsss=document.querySelectorAll("#items li"),tab = [];
var texto1;
var separado1;
var a1;
var a2;
var separado2;
var posicion;

var textoHTML=document.getElementById('updatea').value;


    


  for(var i = 0; i < itemsss.length; i++){
           tab.push(itemsss[i].innerHTML);
            }

for(var i = 0; i < itemsss.length; i++){
      itemsss[i].onclick = function(){
        index = tab.indexOf(this.innerHTML);
        console.log(index);
      texto1 = this.innerHTML;
      separado1 =texto1.split('<');

        for (var i = 0; i <= separado1.length; i++) {

                     if(i==0){
                      a1 = separado1[i];
 
                      a2=a1.split('   ');

                      posicion = a2.length;
                      console.log(a2[posicion-1]);


         }    

    textoHTML = a2[posicion-1];
 
          }

        }}}}       
    }


//Función actualizar
 index = 0;

var itemsss=document.querySelectorAll("#items li"),tab = [];
var texto1;
var separado1;
var a1;
var a2;
var separado2;
var posicion;

  for(var i = 0; i < itemsss.length; i++){
           tab.push(itemsss[i].innerHTML);
            }

for(var i = 0; i < itemsss.length; i++){
      itemsss[i].onclick = function(){
        index = tab.indexOf(this.innerHTML);
        console.log(index);
      texto1 = this.innerHTML;
      separado1 =texto1.split('<');

        for (var i = 0; i <= separado1.length; i++) {

                     if(i==0){
                      a1 = separado1[i];
 
                      a2=a1.split('   ');

                      posicion = a2.length;
                      console.log(a2[posicion-1]);


         }    

    document.getElementById('updatea').value=a2[posicion-1];
          }
  }
}


 

var textoCapturado = "Item 1 <button class=btn btn-danger btn-sm float-right eliminar/button>";
var SeparacionDeTexto=textoCapturado.split('<');


 document.getElementById('actualizar').addEventListener('click', hacerClick);

 function hacerClick(){
       var items = document.getElementsByClassName('list-group-item');
       var textoEdit = document.getElementById('updatea'); 
       if(textoEdit.value==""){alert("No dejes los campos vacios");return false;}  
       console.log(index);     
       items[index].innerHTML = textoEdit.value+' <button class="btn btn-danger btn-sm float-right eliminar">X</button>';          
      }






  //items[1].textContent = 'Prueba';
//Función para filtrar elementos de la lista
function filtrarItems(e){
    var texto = e.target.value.toLowerCase();
    var items = lista.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var itemNombre = item.firstChild.textContent;
        if(itemNombre.toLowerCase().indexOf(texto) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    });  
}


