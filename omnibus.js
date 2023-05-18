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
   formData["placa"] = document.getElementById("placa").value; 
   formData["marca"] = document.getElementById("marca").value; 
   formData["capacidad"] = document.getElementById("capacidad").value; 
   formData["km"] = document.getElementById("km").value; 
   return formData;
}
//Insertar los Datos en la Lista
function insertNewRecord(data){
     var table = document.getElementById('listaomnibus').getElementsByTagName('tbody')[0];
     var newRow = table.insertRow(table.length);
     var cell1 = newRow.insertCell(0);
         cell1.innerHTML = data.placa;
     var cell2 = newRow.insertCell(1);
         cell2.innerHTML = data.marca;
     var cell3 = newRow.insertCell(2);
         cell3.innerHTML = data.capacidad;
     var cell4 = newRow.insertCell(3);
         cell4.innerHTML = data.km;
     var cell5 = newRow.insertCell(4);
         cell5.innerHTML = `<button  onClick='onEdit(this)'><img src="fotos/modifica.png"/> </button> <button onClick='onDelete(this)'><img src="fotos/del.png"/></button>`
}




//El boton Editar en la lista
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('placa').value = selectedRow.cells[0].innerHTML;
    document.getElementById('marca').value = selectedRow.cells[1].innerHTML;
    document.getElementById('capacidad').value = selectedRow.cells[2].innerHTML;
    document.getElementById('km').value = selectedRow.cells[3].innerHTML;
     
}

//El boton actualizar
function updateRecord(formData){
     selectedRow.cells[0].innerHTML = formData.placa;
     selectedRow.cells[1].innerHTML = formData.marca;
     selectedRow.cells[2].innerHTML = formData.capacidad;
     selectedRow.cells[3].innerHTML = formData.km;
     
}

//El boton borrar en la lista
function onDelete(td){
     if (confirm('Quieres borrar esta fila?')){
          row = td.parentElement.parentElement;
          document.getElementById('listaomnibus').deleteRow(row.rowIndex);
          
     }
     resetForm();
  }
//Resetear los datos
  function resetForm(){
     document.getElementById('placa').value = '';
     document.getElementById('marca').value = '';
     document.getElementById('capacidad').value = '';
     document.getElementById('km').value = ''; 
  

     
}
     

