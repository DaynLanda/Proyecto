var selectedRow = null
function onFormSubmit(){
     event.preventDefault();
     var formData = readFormData();
     if (selectedRow === null){
     insertNewRecord(formData);}
     else {
     updateRecord(formData);
            }
     resetForm();
 }

//Leer los datos que se agregan (Placa-Marca-Capacidad-KM)
 function readFormData(){
   var formData=  {};
   formData["carnet"] = document.getElementById("carnet").value; 
   formData["nombre"] = document.getElementById("nombre").value; 
   formData["papellido"] = document.getElementById("papellido").value; 
   formData["sapellido"] = document.getElementById("sapellido").value; 
   formData["edad"] = document.getElementById("edad").value; 
   formData["sexo"] = document.getElementById("sexo").value;
   formData["categoria"] = document.getElementById("categoria").value;
      
   return formData;

}
//Insertar los Datos en la Lista
function insertNewRecord(data){
     var table = document.getElementById('listachoferes').getElementsByTagName('tbody')[0];
     var newRow = table.insertRow(table.length);
     var cell1 = newRow.insertCell(0);
         cell1.innerHTML = data.carnet;
     var cell2 = newRow.insertCell(1);
         cell2.innerHTML = data.nombre;
     var cell3 = newRow.insertCell(2);
         cell3.innerHTML = data.papellido;
     var cell4 = newRow.insertCell(3);
         cell4.innerHTML = data.sapellido;
     var cell5 = newRow.insertCell(4);
         cell5.innerHTML = data.edad;
     var cell6 = newRow.insertCell(5);
         cell6.innerHTML = data.sexo;
     var cell7 = newRow.insertCell(6);
         cell7.innerHTML = data.categoria;
     var cell8 = newRow.insertCell(7);
         cell8.innerHTML = `<button  onClick='onEdit(this)'><img src="fotos/modifica.png"/> </button> <button onClick='onDelete(this)'><img src="fotos/del.png"/></button>`
}




//El boton Editar en la lista
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('carnet').value = selectedRow.cells[0].innerHTML;
    document.getElementById('nombre').value = selectedRow.cells[1].innerHTML;
    document.getElementById('papellido').value = selectedRow.cells[2].innerHTML;
    document.getElementById('sapellido').value = selectedRow.cells[3].innerHTML;
    document.getElementById('edad').value = selectedRow.cells[4].innerHTML;
    document.getElementById('sexo').value = selectedRow.cells[5].innerHTML;
    document.getElementById('categoria').value = selectedRow.cells[6].innerHTML;
     
}

//El boton actualizar
function updateRecord(formData){
     selectedRow.cells[0].innerHTML = formData.carnet;
     selectedRow.cells[1].innerHTML = formData.nombre;
     selectedRow.cells[2].innerHTML = formData.papellido;
     selectedRow.cells[3].innerHTML = formData.sapellido;
     selectedRow.cells[4].innerHTML = formData.edad;
     selectedRow.cells[5].innerHTML = formData.sexo;
     selectedRow.cells[6].innerHTML = formData.categoria;
     
}

//El boton borrar en la lista
function onDelete(td){
     if (confirm('Quieres borrar esta fila?')){
          row = td.parentElement.parentElement;
          document.getElementById('listachoferes').deleteRow(row.rowIndex);
          
     }
     resetForm();
  }
//Resetear los datos
  function resetForm(){
     document.getElementById('carnet').value = '';
     document.getElementById('nombre').value = '';
     document.getElementById('papellido').value = '';
     document.getElementById('sapellido').value = '';
     document.getElementById('edad').value = ''; 
     document.getElementById('sexo').value = ''; 
     document.getElementById('categoria').value = ''; 
  

     
}