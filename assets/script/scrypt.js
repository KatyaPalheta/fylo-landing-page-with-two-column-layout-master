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
