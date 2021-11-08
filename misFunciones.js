function traerInformacion(){
    $.ajax({
        url:"https://gc1df4f19efe58f-db202111032023.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/skate/skate",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta(respuesta.items)
        }
    });

}

function pintarRespuesta(items){

    let myTable ="<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].brand+"</td>";
        myTable+="<td>"+items[i].model+"</td>";
        myTable+="<td>"+items[i].category_id+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td> <button onclick='borrarElemento("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado").append(myTable);
}

function guardarInformacion(){
    let myData={
        id:$("#id").val(),
        brand:$("#brand").val(),
        model:$("#model").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gc1df4f19efe58f-db202111032023.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/skate/skate",
        type: "POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#brand").val("");
            $("#model").val("");
            $("#category_id").val("");
            $("#name").val("");
            traerInformacion();
            alert("se ha guardado el dato")
        }
    });
}

function editarInformacion(){
    let myData={
        id:$("#id").val(),
        brand:$("#brand").val(),
        model:$("#model").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gc1df4f19efe58f-db202111032023.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/skate/skate",
        type: "PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#brand").val("");
            $("#model").val("");
            $("#category_id").val("");
            $("#name").val("");
            traerInformacion();
            alert("se ha actualizado")
        }
    });
}
function borrarElemento(idElemento){
    let myData={
        id: idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gc1df4f19efe58f-db202111032023.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/skate/skate",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacion();
            alert("se ha eliminado")
        }
    });
}

function traerInformacionClientes(){
    $.ajax({
        url:"https://gc1df4f19efe58f-db202111032023.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:"GET",
        datatype:"JSON",
        success:function(respuestaclientes){
            console.log(respuestaclientes);
            pintarRespuestaClientes(respuestaclientes.items)
        }
    });

}

function pintarRespuestaClientes(items){

    let myTableclientes ="<table>";
    for(j=0;j<items.length;j++){
        myTableclientes+="<tr>";
        myTableclientes+="<td>"+items[j].idclientes+"</td>";
        myTableclientes+="<td>"+items[j].name+"</td>";
        myTableclientes+="<td>"+items[j].email+"</td>";
        myTableclientes+="<td>"+items[j].age+"</td>";
        myTableclientes+="<td> <button onclick='borrarElemento("+items[j].id+")'>Borrar</button>";
        myTableclientes+="</tr>";
    }
    myTableclientes+="</table>";
    $("#resultado").append(myTableclientes);
}

function guardarInformacionClientes(){
    let myDataclientes={
        idclientes:$("#idclientes").val(),
        name:$("#name").val(),
        email:$("#email").val(),
        age:$("#age").val(),
    };
    let dataToSendclientes=JSON.stringify(myDataclientes);
    $.ajax({
        url:"https://gc1df4f19efe58f-db202111032023.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type: "POST",
        data:myDataclientes,
        datatype:"JSON",
        success:function(respuestaclientes){
            $("#resultadoclientes").empty();
            $("#idclientes").val("");
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
            traerInformacionClientes();
            alert("se ha guardado el dato del cliente")
        }
    });
}

function editarInformacionClientes(){
    let myDataclientes={
        idclientes:$("#idclientes").val(),
        name:$("#name").val(),
        email:$("#email").val(),
        age:$("#age").val(),
    };
    console.log(myDataclientes);
    let dataToSendclientes=JSON.stringify(myDataclientes);
    $.ajax({
        url:"https://gc1df4f19efe58f-db202111032023.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type: "PUT",
        data:dataToSendclientes,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuestaclientes){
            $("#resultado").empty();
            $("#id").val("");
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
            traerInformacionClientes();
            alert("se ha actualizado el cliente")
        }
    });
}

function borrarElementoClientes(idElementoclientes){
    let myDataclientes={
        idclientes: idElementoclientes
    };
    let dataToSendclientes=JSON.stringify(myDataclientes);
    $.ajax({
        url:"https://gc1df4f19efe58f-db202111032023.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:"DELETE",
        data:dataToSendclientes,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuestaclientes){
            $("#resultadoclientes").empty();
            traerInformacionClientes();
            alert("se ha eliminado el cliente")
        }
    });
}