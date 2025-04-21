const div = document.querySelector("#emberek")
const nevInput = document.querySelector("#nevek");
const korInput = document.querySelector("#eletkor");
const gomb = document.querySelector("#gomb");
const hidden = document.querySelector("#modosit");
const nevRendezGomb = document.querySelector("#nevBtn");
const korRendezGomb = document.querySelector("#korBtn");
const orszagRendezesGomb = document.querySelector("#orszagBtn");
const datumRendezesGomb = document.querySelector("#datumBtn");

const emberek = [
    { nev: "Anna", kor: 25, orszag: "Magyarorszag", regisztracio: new Date() },
    { nev: "Béla", kor: 30, orszag: "Magyarorszag", regisztracio: new Date() },
    { nev: "Csilla", kor: 22, orszag: "Magyarorszag", regisztracio: new Date() },
    { nev: "Dávid", kor: 28, orszag: "Magyarorszag", regisztracio: new Date() },
    { nev: "Eszter", kor: 35, orszag: "Magyarorszag", regisztracio: new Date() }
];

function nevRendezes() {
    emberek.sort((a, b) => a.nev.localeCompare(b.nev))
    tablazatmegjelenites()
}

function orszagRendezes() {
    emberek.sort((a, b) => a.orszag.localeCompare(b.orszag))
    tablazatmegjelenites()
}

function datumRendezes() {
    emberek.sort((a, b) => a.regisztracio - b.regisztracio)
    tablazatmegjelenites()
}

function korRendezes() {
    emberek.sort((a, b) => a.kor - b.kor);
    tablazatmegjelenites()

}

function ujEmberLetrehozas() {
    if (korInput.value == "" || nevInput.value == "") {
        alert("Nincs kitoltve valamelyik mezo");
        return;
    }

    if (nevInput.value.length < 3 || nevInput.value.length > 10) {
        alert("nem megfelelo nev, kerlek adj meg 3 es 10 kozotti nevet");
        return;
    }

    if (hidden.value == "") {
        const ujEmber = { nev: nevInput.value, kor: korInput.value, regisztracio: new Date() };
        emberek.push(ujEmber);
        
    } else {
        const index = hidden.value;
        emberek[index] = { nev: nevInput.value, kor: korInput.value}
        hidden.value = "";
    }

    tablazatmegjelenites();
    nevInput.value = '';
    korInput.value = '';

}

function modositas(index) {
    hidden.value = index;
    nevInput.value = emberek[index].nev;
    korInput.value = emberek[index].kor;
}

function torles(index) {
    console.log("fut")
    console.log(index);
    emberek.splice(index, 1);
    tablazatmegjelenites();
}

function tablazatmegjelenites() {
    div.innerHTML = "";

    let i = 0;
    for (let ember of emberek) {
        let index = i;

        const updateButton = document.createElement("button");
        updateButton.innerHTML = "Modosit";
        updateButton.addEventListener("click", () => modositas(index));

        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Torol";
        deleteButton.addEventListener("click", () => torles(index));

        const tr = document.createElement("tr");
        const nevTd = document.createElement("td");
        const korTd = document.createElement("td");
        const orszagTd = document.createElement("td");
        const datumTd = document.createElement("td");
        const gombTd = document.createElement("td");

        nevTd.innerHTML = ember.nev;
        korTd.innerHTML = ember.kor;
        orszagTd.innerHTML = ember.orszag;
        datumTd.innerHTML = ember.regisztracio;

        gombTd.appendChild(updateButton);
        gombTd.appendChild(deleteButton);

        tr.appendChild(nevTd);
        tr.appendChild(korTd);
        tr.appendChild(orszagTd);
        tr.appendChild(datumTd);
        tr.appendChild(gombTd);

        div.appendChild(tr);

        i++;

    }
}
tablazatmegjelenites()
gomb.addEventListener("click", ujEmberLetrehozas);
nevRendezGomb.addEventListener("click", nevRendezes);
korRendezGomb.addEventListener("click", korRendezes);
datumRendezesGomb.addEventListener("click", datumRendezes);
orszagRendezesGomb.addEventListener("click", orszagRendezes);

/*

{
    "success": "OK",
    "message": "Minden ok",
    "workInstructions" : {
        ....
    },
    "drawing": {
        ...
    }
}


*/