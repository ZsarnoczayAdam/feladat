const div = document.querySelector("#emberek")
const ter=document.querySelector("#nevek")
const korok=document.querySelector("#eletkor")
const gombok=document.querySelector("#gomb")
const emberek = [
    { nev: "Anna", kor: 25 },
    { nev: "Béla", kor: 30 },
    { nev: "Csilla", kor: 22 },
    { nev: "Dávid", kor: 28 },
    { nev: "Eszter", kor: 35 }
];
function tablazathozzaadas(){
    const felhasznalo={nev: "Teszt", kor: 1}
    emberek.push(felhasznalo)
}
function tablazatmegjelenites() {

    for (let ember of emberek) {
        div.innerHTML += "<tr><td>" + ember.nev + "</td><td>" + ember.kor + "</td></tr>"

    }
}
tablazatmegjelenites()
