let altura = document.querySelector('#altura');
let peso = document.querySelector('#peso');
let resultado = document.querySelector('#status');

function calcularIMC() {
	let a = Number(altura.value) / 100;
	let p = Number(peso.value);
	let imc = p / a ** 2;
	imc = imc.toFixed(2);
	let magresa = `Seu imc é de ${imc} <br> Você esta abaixo do peso considerado normal para sua altura.`;

	let normal = `Seu imc é de ${imc} <br> Você está no seu peso normal`;

	let sobrepeso = `Seu imc é de ${imc} <br> Você está acima do peso normal para sua altura`;

	let obesidade1 = `Seu imc é de ${imc} <br> Você está com obesidade grau 1, acima do peso considerado normal para sua altura`;

	let obesidade2 = `Seu imc é de ${imc} <br> Você está com obesidade grau 2, acima do peso considerado normal para sua altura`;

	let obesidade3 = `Seu imc é de ${imc} <br> Você está com obesidade grau 3, acima do peso considerado normal para sua altura`;

	if (imc <= 18.5) {
		resultado.innerHTML = magresa;
	} else if (imc > 18.5 && imc <= 24.9) {
		resultado.innerHTML = normal;
	} else if (imc >= 25 && imc <= 29.9) {
		resultado.innerHTML = sobrepeso;
	} else if (imc >= 30 && imc <= 34.9) {
		resultado.innerHTML = obesidade1;
	} else if (imc >= 35 && imc <= 39.9) {
		resultado.innerHTML = obesidade2;
	} else if (imc >= 40) {
		resultado.innerHTML = obesidade3;
	}
}
