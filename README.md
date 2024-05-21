# Fylo Landing Page 📄✔️

![imagem-final-fylo-landing-page]

## Visão Geral 💡

É um exercício simples proposto pelo site frontend Mentor, o objetivo era criar uma landing page simples com campos de interação, eu quis testar algumas coisas que aprendi recentemente por isso coloquei duas mensagens quando o usuário clica no botão.

A primeira é uma mensagem solicitando que o usuário insira seu email e a segunda mensagem é solicitando que o usuário verifique seu email.

Esse exercício foi desenvolvido com o intuito de treinar minhas habilidades de HTML, CSS e JavaScript.

## Tecnologias Usadas 📌

- HTML5
- CSS
- JavaScript

## ⚠️ Problemas enfrentados -> Criação da lógica no JavaScripit

### Problema 1:
Como acessar a tag de ```span``` que estava abaixo de outra tag ```span```.

* Como solucionar: criei duas variáveis para solucionar um span por vez e utilizei a propriedade ```nextElementSibling``` para pegar imediatamente a tag que vem abaixo.

```js
const primeiroSpan = input.nextElementSibling;
const segundoSpan = primeiroSpan.nextElementSibling;
```

### Problema 2:
Como fazer com que cada input tivesse uma relação de especificidade com cada botão? 
inicialmente, ao clicar no primeiro botão, tanto o primeiro input quanto o segundo exibiam a mensagem solicitando o email, o que não era o desejado. O objetivo é que, ao clicar em cada botão, somente a mensagem do input correspondente seja exibida.

* Como solucionar: Usando a propriedade ```previousElementSibling```, dessa forma fui capaz de conseguir especificidade e eficiência na seleção do elemento input.

Segue código abaixo:

```javascript
const input = botao.previousElementSibling.previousElementSibling.previousElementSibling;
```

## Resultado Final ✨

![fylo-landing-page]

## Link para o deploy 🌐

[Fylo Lnading Page]

## Design Responsivo 📱🖥️

![fylo-landing-page-responsivo-telas-maiores]
