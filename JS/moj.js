// STWORZENIE KILKU LI + PONUMEROWANIE LI ZA POMOCĄ PĘTLI + DODANIE LI DO DIVA + NADANAIE ATRYBUTY O NAZWIE TAKIEJ JAK MA ZAWARTOŚĆ LI
const wrapper = document.querySelector(".wrapper");

const numbers = 6;

for (let i = 1; i < numbers; i++) {
	const liTask = document.createElement("li");
	liTask.textContent = i;
	wrapper.append(liTask);
	liTask.setAttribute("dataatrybutid", i);
}

const dataatrybutidThree = document.querySelector('[dataatrybutid="3"]');
console.log(dataatrybutidThree);

const parents = dataatrybutidThree.parentElement;
console.log(parents);

wrapper.style.padding = "20px 20px";

// Ostrzeżenia
console.warn("Uwaga!");
console.error("To jest error");

// TABELE
console.table(["kawa", "herbata", "deser"]);

const person = [
	{
		first_name: "Jan",
		last_name: "Kowalski",
		age: 23,
	},

	{
		first_name: "Tomasz",
		last_name: "Nowak",
		age: 45,
	},
];

console.table(person);

const food = [
	{
		zupa: "Pomidorowa",
		danie: "Schabowy",
		deser: "Szarlotka",
	},
	{
		zupa: "Rosół",
		danie: "Piergi",
		deser: "Sernik",
	},
	{
		zupa: "Ogórkowa",
		danie: "Naleśniki",
		deser: "Brownie",
	},
];
console.table(food);

const products = [
	{
		telefon: "Iphone 10",
		szkło: "nie",
		ładowarka: "tak",
		cena: 1800,
	},

	{
		telefon: "Iphone 11",
		szkło: "nie",
		ładowarka: "tak",
		cena: 2300,
	},
	{
		telefon: "Iphone 12",
		szkło: "tak",
		ładowarka: "tak",
		cena: 4000,
	},
	{
		telefon: "Iphone 13",
		szkło: "nie",
		ładowarka: "tak",
		cena: 4500,
	},
];
console.table(products);
