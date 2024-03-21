import { LATVANYOSSAGOK, lista } from "./adatok.js";

export function masodikFeladat(lista) {
  const tablaELEM = document.getElementsByClassName("tartalom")[0];
  let tablazat = "<table>";
  for (let i = 0; i < lista.length; i++) {
    let sorok = "<tr>";
    for (const key in lista[i]) {
      sorok += `<td>${lista[i][key]}</td>`;
    }
    sorok += "</tr>";
    tablazat += sorok;
  }
  tablazat += "</table>";
  tablaELEM.innerHTML = tablazat;
}

export function otodikFeladat() {
  const trELEMEK = document.querySelectorAll("tr");
  for (let index = 0; index < trELEMEK.length; index++) {
    trELEMEK[index].addEventListener("mouseover", function () {
      this.className += " kiv"; 
    });
    trELEMEK[index].addEventListener("mouseleave", function () {
      this.className = " "; 
    });
  }
}
