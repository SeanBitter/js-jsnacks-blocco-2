/*
Generatore di “nomi cognomi” casuali: il Grande Gatsby
ha  una lista di nomi e una lista di cognomi, 
e da queste vuole generare una falsa lista di invitati con nome e cognome.
*/

const nameGuests = ["Pippo", "Pluto", "Paperino", "Roger", "Alex"];
const surnameGuests = ["Redford", "Federer", "Kapranos", "DiCaprio", "Gialli" ];

for (let i = 0; i < 1; i++) {

    console.log(nameGuests [Math.floor(Math.random() * 5)],
                surnameGuests [Math.floor(Math.random() * 5)]);
}
