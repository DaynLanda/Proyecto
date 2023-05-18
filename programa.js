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
   formData["codprograma"] = document.getElementById("codprograma").value; 
   formData["nomprograma"] = document.getElementById("nomprograma").value; 
   formData["km"] = document.getElementById("km").value; 
   formData["codtipo"] = document.getElementById("codtipo").value; 
   formData["nomtipo"] = document.getElementById("nomtipo").value;
         
   return formData;

}
//Insertar los Datos en la Lista
function insertNewRecord(data){
     var table = document.getElementById('listaprograma').getElementsByTagName('tbody')[0];
     var newRow = table.insertRow(table.length);
     var cell1 = newRow.insertCell(0);
         cell1.innerHTML = data.codprograma;
     var cell2 = newRow.insertCell(1);
         cell2.innerHTML = data.nomprograma;
     var cell3 = newRow.insertCell(2);
         cell3.innerHTML = data.km;
     var cell4 = newRow.insertCell(3);
         cell4.innerHTML = data.codtipo;
     var cell5 = newRow.insertCell(4);
         cell5.innerHTML = data.nomtipo;
     var cell7 = newRow.insertCell(5);
         cell7.innerHTML = `<button  onClick='onEdit(this)'><img src="fotos/modifica.png"/> </button> <button onClick='onDelete(this)'><img src="fotos/del.png"/></button>`
}




//El boton Editar en la lista
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('codprograma').value = selectedRow.cells[0].innerHTML;
    document.getElementById('nomprograma').value = selectedRow.cells[1].innerHTML;
    document.getElementById('km').value = selectedRow.cells[2].innerHTML;
    document.getElementById('codtipo').value = selectedRow.cells[3].innerHTML;
    document.getElementById('nomtipo').value = selectedRow.cells[4].innerHTML;
    
     
}

//El boton actualizar
function updateRecord(formData){
     selectedRow.cells[0].innerHTML = formData.codprograma;
     selectedRow.cells[1].innerHTML = formData.nomprograma;
     selectedRow.cells[2].innerHTML = formData.km;
     selectedRow.cells[3].innerHTML = formData.codtipo;
     selectedRow.cells[4].innerHTML = formData.nomtipo;
         
}

//El boton borrar en la lista
function onDelete(td){
     if (confirm('Quieres borrar esta fila?')){
          row = td.parentElement.parentElement;
          document.getElementById('listaprograma').deleteRow(row.rowIndex);
          
     }
     resetForm();
  }
//Resetear los datos
  function resetForm(){
    document.getElementById('codprograma').value = '';
    document.getElementById('nomprograma').value = '';
    document.getElementById('km').value = '';
    document.getElementById('codtipo').value = '';
    document.getElementById('nomtipo').value = '';
     
  
}