const form = document.getElementById('form_email');
const email = document.getElementById('email');
const span = document.getElementById('mensagem_email');
const botao = document.getElementById('send_email');

function teste() {
	const valida = email.validity.valid;
	console.log(valida);
	if (valida === false) {
		email.classList.add('erro_email');
		span.classList.add('mensagem_erro_email');
	} else {
		email.classList.remove('erro_email');
		span.classList.remove('mensagem_erro_email');
		botao.disabled = false;
	}
}

const form2 = document.getElementById('form_email2');
const email2 = document.getElementById('email2');
const span2 = document.getElementById('mensagem_email2');
const botao2 = document.getElementById('send_email2');

function teste2() {
	const valida2 = email2.validity.valid;
	console.log(valida2);
	if (valida2 === false) {
		email2.classList.add('erro_email');
		span2.classList.add('mensagem_erro_email');
	} else {
		email2.classList.remove('erro_email');
		span2.classList.remove('mensagem_erro_email');
		botao2.disabled = false;
	}
}
