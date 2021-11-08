const elements = [
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

console.log(elements);
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
function loopFunction() {
	//do una stringa vuota
	let str = '';
	//aggancio tramite l'id la select
const selectElement = parseInt(document.getElementById('select').value);
//assegno l'evento
selectElement.addEventListener('change', function(){
	//ricavo il numero di box in base all'elemento scelto
let howManyBox;
switch(selectElement){
	case 1:
		howManyBox = 16; //numero di box
		break;
	case 2:
		howManyBox = 8;
		break;
	case 3:
		howManyBox = 4;
		break;
	case 4:
		howManyBox = 4;
		break;
}
});
console.log(selectElement);


	//ciclo la base dati
	for(let element of elements){
		////delego a una funzione, a cui attribuisco il paramentro 'element'->ogni element of elements , la creazione dei box sull'html
		printBox(element);
	}
}

//creo la funzione che crea il box, tutto cio che scrivo dentro la funzione nasce e muore la dentro
/**
 * 
 * @param {*} element : è l'object che contiene le info dell'animale,user o vegetable (potrei chiamarlo anche pippo, cio che importa è cio che rappresenta)
 */
function printBox(element){
	//aggancio l'elemento dove andrò ad inserire i box
	const main = document.querySelector('main');
	//creo l'elemento div/box
	const box = document.createElement('div');
	//gli attribuisco la classe creata nel css
	box.className = 'box';
	//inserisco tramite un template i dati nel box
	box.innerHTML = `
		<div class="icon">
			<i class="fas fa-cat">bvbv</i>
		</div>
		<div class="name-animal">
			${element.name}
		</div>
	
	`;

	//appendo al main i box
	main.append(box);	
}



/*
**Milestone 2**
Ciascuna icona ha una proprietà “color”: utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
*/













/*
**Milestone 3**
Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l’utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.
*/


/*
1. aggancio la select con il value
2. creo una variabile che rappresenterà il numero di box
3. con uno switch per ogni livello inserisco un numero preciso di box
*/



