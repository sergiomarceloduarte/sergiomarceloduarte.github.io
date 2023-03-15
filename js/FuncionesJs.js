document.getElementById("foto").onclick = function()
 {
    var Valorboton

    Valorboton = document.getElementById("foto").innerHTML 
    
    
    if (Valorboton == "Ver Foto") 
    { 
          document.getElementById("Imagen").style.display = "block";
          document.getElementById("foto").innerHTML = "No mostrar Foto";
        }
        else  
      {
          document.getElementById("Imagen").style.display = "none";
          document.getElementById("foto").innerHTML = "Ver Foto";
      }
 }