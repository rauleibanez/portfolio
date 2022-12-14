/*--------------------------------------------------------
 * Archivo    : menu.js;
 * Descripcion: Archivo de JavaScript para el dinamismo de
                la pagina (index.html);
 * Autor      : Raul Ibañez;
 * Version    : 1.0;
 * Fecha      : 26/10/2022;
 * Observacion: Diseño Mobile First;
 */
/*---------- FUNCION PARA ACTIVAR MENU DISPOSITIVO MOVIL----*/
const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");

function toggleMenu(){
  menu.classList.toggle("menu_opened");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);
/*--FUNCION PARA CERRAR EL MENU DEL DISPOSITIVO MOVIL AL -----*/
/*---------------SELECCIONAR UNA OPCION-----------------------*/
const menuLinks=document.querySelectorAll('.menu a[href^="#"]');
menuLinks.forEach(menuLink => {
  menuLink.addEventListener("click", function() {
    menu.classList.remove("menu_opened");
  })
});

/*------------------------------------------------------------*/
