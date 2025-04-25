const exchangeRates = [
    {
      date: "2025-04-21",
      usd: 364.25,
      eur: 388.40,
      gbp: 452.10,
      chf: 402.90
    },
    {
      date: "2025-04-22",
      usd: 365.10,
      eur: 389.00,
      gbp: 453.50,
      chf: 403.20
    },
    {
      date: "2025-04-23",
      usd: 366.05,
      eur: 387.75,
      gbp: 450.80,
      chf: 401.50
    },
    {
      date: "2025-04-24",
      usd: 367.20,
      eur: 390.10,
      gbp: 454.90,
      chf: 404.70
    },
    {
      date: "2025-04-25",
      usd: 368.00,
      eur: 391.25,
      gbp: 455.60,
      chf: 405.30
    }
  ];

let chart = null;
const tbody = document.querySelector("#tbody");

let index = 0;
for (const rate of exchangeRates) {
    let innerIndex = index;
    const tr = document.createElement("tr");
    const dateTd = document.createElement("td");
    const usdTd = document.createElement("td");
    const eurTd = document.createElement("td");
    const gbpTd = document.createElement("td");
    const chfTd = document.createElement("td");

    tr.appendChild(dateTd);
    tr.appendChild(usdTd);
    tr.appendChild(eurTd);
    tr.appendChild(gbpTd);
    tr.appendChild(chfTd);

    dateTd.innerHTML = rate.date;
    usdTd.innerHTML = rate.usd;
    eurTd.innerHTML = rate.eur;
    gbpTd.innerHTML = rate.gbp;
    chfTd.innerHTML = rate.chf;

    tbody.appendChild(tr);

    tr.addEventListener("click", () => {
        if (chart) {
            chart.destroy();
        }

        const labels = Object.keys(exchangeRates[innerIndex]).filter(e => e !== "date");
        const rates = labels.map(l => exchangeRates[innerIndex][l])

        const data = {
            labels: labels,
            datasets: [{
                label: exchangeRates[innerIndex].date,
                data: rates,
                borderColor: 'rgb(75, 192, 192)',
                fill: false,
                tension: 0.2,
                pointBackgroundColor: 'black'
            }]
        };
    
        const config = {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            plugins: {
            title: {
                display: true,
                text: 'USD árfolyam alakulása (HUF)',
            }
            },
            scales: {
            y: {
                beginAtZero: false
            }
            }
        }
        };
    
        // Létrehozzuk a chartot
        const ctx = document.getElementById('exchangeChart').getContext('2d');
        chart = new Chart(ctx, config);
    });

    index++;
}