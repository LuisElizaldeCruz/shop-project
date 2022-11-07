import React from "react";
import "../assets/css/Menu.css";

const mostrarMenu = (e) => {
  document.querySelector(".burger-menu-container").classList.toggle("change");
  document.querySelector(".navigation").classList.toggle("show");
}

const ocultarClicked = (e) => {
  if (e.target.matches(".nav-link")) {
    document.querySelector(".navigation").classList.toggle("show");
    console.log(e.target);
  }
}

window.onscroll = () => {
  const y = window.scrollY;
  console.log(y)
  const navMenu = document.querySelector(".nav-menu");
  if (y < 550) {
    navMenu.className = "nav-menu"
  } else {
    navMenu.className = "nav-menu nav-menuColor"
  }
}

const Menu = () => {
  return (
    <nav className="nav-menu" onClick={ocultarClicked}>
      <h1 className="name"> <a href="#about" className="name-link">Shop</a></h1>
      <ul className="navigation">
        <li><a href="#personal-info" className="nav-link about">Acerca de mi</a></li>
        <li><a href="#skills" className="nav-link skills">Skills</a></li>
        <li><a href="#container-projects" className="nav-link proyectos">Proyectos</a></li>
        <li><a href="#footer" className="nav-link contact">Contacto</a></li>
      </ul>

      <div className="burger-menu-container" id="burger-menu" onClick={mostrarMenu}>
        <div className="burger-menu__line line1"></div>
        <div className="burger-menu__line line2"></div>
        <div className="burger-menu__line line3"></div>
      </div>
    </nav>
  );
}

export default Menu;