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
   formData["codsolicitud"] = document.getElementById("codsolicitud").value; 
   formData["codgrupo"] = document.getElementById("codgrupo").value; 
   formData["pais"] = document.getElementById("pais").value; 
   formData["cantidad"] = document.getElementById("cantidad").value; 
   formData["dias"] = document.getElementById("dias").value;
         
   return formData;

}
//Insertar los Datos en la Lista
function insertNewRecord(data){
     var table = document.getElementById('listasolicitud').getElementsByTagName('tbody')[0];
     var newRow = table.insertRow(table.length);
     var cell1 = newRow.insertCell(0);
         cell1.innerHTML = data.codsolicitud;
     var cell2 = newRow.insertCell(1);
         cell2.innerHTML = data.codgrupo;
     var cell3 = newRow.insertCell(2);
         cell3.innerHTML = data.pais;
     var cell4 = newRow.insertCell(3);
         cell4.innerHTML = data.cantidad;
     var cell5 = newRow.insertCell(4);
         cell5.innerHTML = data.dias;
     var cell7 = newRow.insertCell(5);
         cell7.innerHTML = `<button  onClick='onEdit(this)'><img src="fotos/modifica.png"/> </button> <button onClick='onDelete(this)'><img src="fotos/del.png"/></button>`
}




//El boton Editar en la lista
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('codsolicitud').value = selectedRow.cells[0].innerHTML;
    document.getElementById('codgrupo').value = selectedRow.cells[1].innerHTML;
    document.getElementById('pais').value = selectedRow.cells[2].innerHTML;
    document.getElementById('cantidad').value = selectedRow.cells[3].innerHTML;
    document.getElementById('dias').value = selectedRow.cells[4].innerHTML;
    
     
}

//El boton actualizar
function updateRecord(formData){
     selectedRow.cells[0].innerHTML = formData.codsolicitud;
     selectedRow.cells[1].innerHTML = formData.codgrupo;
     selectedRow.cells[2].innerHTML = formData.pais;
     selectedRow.cells[3].innerHTML = formData.cantidad;
     selectedRow.cells[4].innerHTML = formData.dias;
         
}

//El boton borrar en la lista
function onDelete(td){
     if (confirm('Quieres borrar esta fila?')){
          row = td.parentElement.parentElement;
          document.getElementById('listasolicitud').deleteRow(row.rowIndex);
          
     }
     resetForm();
  }
//Resetear los datos
  function resetForm(){
     document.getElementById('codsolicitud').value = '';
     document.getElementById('codgrupo').value = '';
     document.getElementById('pais').value = '';
     document.getElementById('cantidad').value = ''; 
     document.getElementById('dias').value = ''; 
     
  
}