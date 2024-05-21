# Fylo Landing Page 📄✔️

![imagem-final-fylo-landing-page](https://github.com/Madu-Guimaraes/Fylo-Landing-Page/assets/146151781/9c761719-ffa5-49f9-a745-be674a34b4df)

## Visão Geral 💡

É um exercício simples proposto pelo site frontend Mentor, o objetivo era criar uma landing page simples com campos de interação, eu quis testar algumas coisas que aprendi recentemente por isso coloquei duas mensagens quando o usuário clica no botão e utilizei a estratégia do "Mobile First".

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

```javascript
const input = botao.previousElementSibling.previousElementSibling.previousElementSibling;
```

## Resultado Final ✨

![fylo-landing-page](https://github.com/Madu-Guimaraes/Fylo-Landing-Page/assets/146151781/5ef2d062-d5f7-4c5a-be09-95e6a68f77c6)

## Link para o deploy 🌐

[Fylo Lnading Page](https://madu-guimaraes.github.io/Fylo-Landing-Page/)

## Design Responsivo 📱🖥️

![fylo-landing-page-responsivo](https://github.com/Madu-Guimaraes/Fylo-Landing-Page/assets/146151781/c1882939-f6ce-448c-a3b1-19cb8b812edb)
