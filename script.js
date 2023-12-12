function mostrar(panelId) {
    let panel = panelId
    console.log(panelId)
    if (panel == 'sesion') {
    document.getElementById("sesion").style.display = "block";
    document.getElementById("tienda").style.display = "none";
    document.getElementById("quiz").style.display = "none";
    document.getElementById("conoce").style.display = "none";
    document.getElementById("registrarse").style.display = "none";
    document.getElementById("portada1").style.display = "none";
    document.getElementById("capas").style.display = "none";
    document.getElementById("baules").style.display = "none";
    document.getElementById("varitas").style.display = "none";
    document.getElementById("potter").style.display = "none";
    document.getElementById("hermione").style.display = "none";
    document.getElementById("ron").style.display = "none";
    }
    if (panel == tienda) {
    document.getElementById("sesion").style.display = "none";
    document.getElementById("tienda").style.display = "block";
    document.getElementById("quiz").style.display = "none";
    document.getElementById("conoce").style.display = "none";
    document.getElementById("registrarse").style.display = "none";
    document.getElementById("portada1").style.display = "none";
    document.getElementById("capas").style.display = "none";
    document.getElementById("baules").style.display = "none";
    document.getElementById("varitas").style.display = "none";
    document.getElementById("potter").style.display = "none";
    document.getElementById("hermione").style.display = "none";
    document.getElementById("ron").style.display = "none";
    }
    if (panel == quiz) {
    document.getElementById("sesion").style.display = "none";
    document.getElementById("tienda").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    document.getElementById("conoce").style.display = "none";
    document.getElementById("registrarse").style.display = "none";
    document.getElementById("portada1").style.display = "none";
    document.getElementById("capas").style.display = "none";
    document.getElementById("baules").style.display = "none";
    document.getElementById("varitas").style.display = "none";
    document.getElementById("potter").style.display = "none";
    document.getElementById("hermione").style.display = "none";
    document.getElementById("ron").style.display = "none";
    }
    if (panel == conoce) {
    document.getElementById("sesion").style.display = "none";
    document.getElementById("tienda").style.display = "none";
    document.getElementById("quiz").style.display = "none";
    document.getElementById("conoce").style.display = "block";
    document.getElementById("registrarse").style.display = "none";
    document.getElementById("portada1").style.display = "none";
    document.getElementById("capas").style.display = "none";
    document.getElementById("baules").style.display = "none";
    document.getElementById("varitas").style.display = "none";
    document.getElementById("potter").style.display = "none";
    document.getElementById("hermione").style.display = "none";
    document.getElementById("ron").style.display = "none";
    }
    if (panel == registrarse) {
    document.getElementById("sesion").style.display = "none";
    document.getElementById("tienda").style.display = "none";
    document.getElementById("quiz").style.display = "none";
    document.getElementById("conoce").style.display = "none";
    document.getElementById("registrarse").style.display = "block";
    document.getElementById("portada1").style.display = "none";
    document.getElementById("capas").style.display = "none";
    document.getElementById("baules").style.display = "none";
    document.getElementById("varitas").style.display = "none";
    document.getElementById("potter").style.display = "none";
    document.getElementById("hermione").style.display = "none";
    document.getElementById("ron").style.display = "none";
    } 
    if (panel == 'portada1') {
    document.getElementById("sesion").style.display = "none";
    document.getElementById("tienda").style.display = "none";
    document.getElementById("quiz").style.display = "none";
    document.getElementById("conoce").style.display = "none";
    document.getElementById("registrarse").style.display = "none";
    document.getElementById("portada1").style.display = "block";
    document.getElementById("capas").style.display = "none";
    document.getElementById("baules").style.display = "none";
    document.getElementById("varitas").style.display = "none";
    document.getElementById("potter").style.display = "none";
    document.getElementById("hermione").style.display = "none";
    document.getElementById("ron").style.display = "none";
    }
    if (panel == 'capas') {
    document.getElementById("sesion").style.display = "none";
    document.getElementById("tienda").style.display = "none";
    document.getElementById("quiz").style.display = "none";
    document.getElementById("conoce").style.display = "none";
    document.getElementById("registrarse").style.display = "none";
    document.getElementById("portada1").style.display = "none";
    document.getElementById("capas").style.display = "block";
    document.getElementById("baules").style.display = "none";
    document.getElementById("varitas").style.display = "none";
    document.getElementById("potter").style.display = "none";
    document.getElementById("hermione").style.display = "none";
    document.getElementById("ron").style.display = "none";
    }
    if (panel == 'baules') {
    document.getElementById("sesion").style.display = "none";
    document.getElementById("tienda").style.display = "none";
    document.getElementById("quiz").style.display = "none";
    document.getElementById("conoce").style.display = "none";
    document.getElementById("registrarse").style.display = "none";
    document.getElementById("portada1").style.display = "none";
    document.getElementById("capas").style.display = "none";
    document.getElementById("baules").style.display = "block";
    document.getElementById("varitas").style.display = "none";
    document.getElementById("potter").style.display = "none";
    document.getElementById("hermione").style.display = "none";
    document.getElementById("ron").style.display = "none";
    }
    if (panel == 'varitas') 
    document.getElementById("sesion").style.display = "none";
    document.getElementById("tienda").style.display = "none";
    document.getElementById("quiz").style.display = "none";
    document.getElementById("conoce").style.display = "none";
    document.getElementById("registrarse").style.display = "none";
    document.getElementById("portada1").style.display = "none";
    document.getElementById("capas").style.display = "none";
    document.getElementById("baules").style.display = "none";
    document.getElementById("varitas").style.display = "block";
    document.getElementById("potter").style.display = "none";
    document.getElementById("hermione").style.display = "none";
    document.getElementById("ron").style.display = "none";
    }
      
    if (panel == potter) {
    document.getElementById("sesion").style.display = "none";
    document.getElementById("tienda").style.display = "none";
    document.getElementById("quiz").style.display = "none";
    document.getElementById("conoce").style.display = "none";
    document.getElementById("registrarse").style.display = "none";
    document.getElementById("portada1").style.display = "none";
    document.getElementById("capas").style.display = "none";
    document.getElementById("baules").style.display = "none";
    document.getElementById("varitas").style.display = "none";
    document.getElementById("potter").style.display = "block";
    document.getElementById("hermione").style.display = "none";
    document.getElementById("ron").style.display = "none";
    }
    if (panel == hermione) {
    document.getElementById("sesion").style.display = "none";
    document.getElementById("tienda").style.display = "none";
    document.getElementById("quiz").style.display = "none";
    document.getElementById("conoce").style.display = "none";
    document.getElementById("registrarse").style.display = "none";
    document.getElementById("portada1").style.display = "none";
    document.getElementById("capas").style.display = "none";
    document.getElementById("baules").style.display = "none";
    document.getElementById("varitas").style.display = "none";
    document.getElementById("potter").style.display = "none";
    document.getElementById("hermione").style.display = "block";
    document.getElementById("ron").style.display = "none";
    }
    if (panel == ron) {
    document.getElementById("sesion").style.display = "none";
    document.getElementById("tienda").style.display = "none";
    document.getElementById("quiz").style.display = "none";
    document.getElementById("conoce").style.display = "none";
    document.getElementById("registrarse").style.display = "none";
    document.getElementById("portada1").style.display = "none";
    document.getElementById("capas").style.display = "none";
    document.getElementById("baules").style.display = "none";
    document.getElementById("varitas").style.display = "none";
    document.getElementById("potter").style.display = "none";
    document.getElementById("hermione").style.display = "none";
    document.getElementById("ron").style.display = "block";
    }
    
function volver() {
  document.getElementById("portada1").style.display = "block";
  document.getElementById("sesion").style.display = "none";
  document.getElementById("tienda").style.display = "none";
  document.getElementById("quiz").style.display = "none";
  document.getElementById("conoce").style.display = "none";
  document.getElementById("registrarse").style.display = "none";
  document.getElementById("capas").style.display = "none";
  document.getElementById("baules").style.display = "none";
  document.getElementById("varitas").style.display = "none";
  document.getElementById("potter").style.display = "none";
  document.getElementById("hermione").style.display = "none";
  document.getElementById("ron").style.display = "none";
  }
      