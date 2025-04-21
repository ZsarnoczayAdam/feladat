const emberek = [
    { nev: "Anna", kor: 25 },
    { nev: "Béla", kor: 30 },
    { nev: "Csilla", kor: 22 },
    { nev: "Dávid", kor: 28 },
    { nev: "Eszter", kor: 35 }
  ];
  console.log(emberek)
  for(let ember of emberek) {
    if (ember.kor<30) {
        console.log(ember.nev)  
    }
    
  }