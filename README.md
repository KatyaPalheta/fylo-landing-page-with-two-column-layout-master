# Fylo landing page with two column layout solution

Essa é a solução para o desafio landing Fylo com desafio de layout de duas colunas

## Índice

- [Visão Geral](#visão-geral)
  - [O desafio](#the-challenge)
  - [Captura de tela](#captura-de-tela)
  - [Links](#links)
- [Meu processo](#meu-processo)
  - [Construído com](#construído-com)
  - [O que aprendi](#o-que-aprendi)
  - [Desenvolvimento contínuo](#desenvolvimento-contínuo)
- [Autor](#autor)
- [Agradecimentos](#agradecimentos)


## Visão geral

Esse é o projeto final criado como solução ao desafio do site front-end mentor

### O desafio


Os usuários devem ser capazes de:

- Visualize o layout ideal para o site, dependendo do tamanho da tela do dispositivo
- Veja os estados de foco para todos os elementos interativos na página
- ver mensagem de erro ao incluir um valor de e-mail inválido

### Captura de tela

![Resultado final desktop](/assets/images/desktop.png)
![Resultado final mobile](/assets/images/mobile.png)

### Links

- URL do site ao vivo: (<https://astounding-gingersnap-83e7a1.netlify.app/>)

## Meu processo

Demorei cerca de 25h de trabalho para concluir o desafio

### Construído com

- Marcação HTML5 semântica
- Propriedades personalizadas de CSS
- Flexbox
- Grade CSS
- Uso de script Javascript
- Edição de svg, manipulação co metodo hover

### O que eu aprendi

Aprendi bastante a respeito de layout responsivo aplicanto muitos principios estudados nos cursos que eu concluí nos ultimos dias. Edição de svg, manipulação co metodo hover

Para ver como você pode adicionar snippets de código, veja abaixo:

``` Js
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
```
Provavelmente existem formas mais inteligentes de concluir, mas eu creio que assim funciona

### Desenvolvimento contínuo

Para o futuro vou aprofundar os estudos sobre uso de API para incluir funcionalidades mais complexas nas páginas.

## Autor

- URL no front mentor: (<https://www.frontendmentor.io/profile/KatyaPalheta>)
- Linkedin: (www.linkedin.com/in/katyapalheta)

## Agradecimentos

Agradeço a Alura, escola de programação, por ter sido minha fonte de conhecimento e minha amiga na trajetória de crescimento pessoal. Aos membros da comunidade Code, mentoria que está moldando minha mente para o mercado de trabalho.
