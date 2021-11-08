const animals = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

console.log(animals);
/*
	**Milestone 1**
Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell’icona e l’icona stessa.
*/

/*
1. creo due funzioni una che crea l'elemento div e una che attraverso un loop li stampa quanti me ne servono
2. a questo div/box dovrò aggiugere un testo e un icona
3. poichè dovrò stampare piu di un box utilizzerò un ciclo
*/

//creo la funzione che fa il loop


loopFunction();
function loopFunction(){
	//ciclo la base dati
	for(let animal of animals){
	////delego a una funzione la creazione dell'html di ogni post
	printBox(box);
	}
	  //appendo al main i box
    main.append(box);
}


//creo la funzione che crea il box

function printBox(box){
	//aggancio l'elemento dove andrò ad inserire i box
	const main = document.querySelector('main');
	//creo l'elemento div/box
	const box = document.createElement('div');
	//gli attribuisco la classe creata nel css
	box.className = 'box';
	//inserisco tramite un template i dati nel box
	box.innerHTML = `
		<div class="icon">
			<i class="fas fa-cat"></i>
		</div>
		<div class="name-animal">
			${animals[i].name}
		</div>
	
	`
}



/*
**Milestone 2**
Ciascuna icona ha una proprietà “color”: utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
*/