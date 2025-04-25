class TrGenerator {
    constructor() {
        this.tbodyId = "#tbody";
    }

    generate(values) {
        const tbody = document.querySelector(this.tbodyId);
        const tr = document.createElement("tr");

        for (let value of values) {
            const td = document.createElement("td");
            td.innerHTML = value;
            tr.appendChild(td);
        }

        tbody.appendChild(tr);
    }
}

class RandomTrGenerator extends TrGenerator {
    constructor(date, random) {
        super();
        this.date = date;
        this.random = random;
    }

    generateRandomRow() {
        const values = [this.date, this.random];

        this.generate(values);
    }
}

const button = document.querySelector("#gomb");
button.addEventListener("click", () => {
    let randomRow = new RandomTrGenerator(new Date(), Math.random());
    randomRow.generateRandomRow();
})