//Constantes para iniciar a relação de HTML com JS
const botao = document.getElementById("inicio");
const mensagem = document.getElementById("resultado");

// Constantes para percentuais de cada característica
const corPorc = {
  branco: 0.435,
  preto: 0.102,
  pardo: 0.453,
  indígena: 0.08,
  amarelo: 0.04
};

const olhosPorc = {
  castanho: 0.8,
  azul: 0.1,
  verde: 0.1,
  mel: 0.2
};

// Criação do prompt quando o botão é clicado
botao.addEventListener("click", () => {
  let nome = prompt("Como você se chama?");

  if (nome) {
    let idade = parseInt(prompt("Quantos anos você tem?"));
  } if (isNaN(idade) || idade <= 0) {
      mensagem.innerText = "Insira uma idade válida";
      mensagem.style.color = "red";
    } else {
      let cor = prompt("Qual a cor da sua pele?");
      if (cor == "") {
          mensagem.innerText = "Por favor, insira uma cor de pele";
          mensagem.style.color = "red";
      } else if (corPorc[cor.toLowerCase()]) {
        let olhos = prompt("Qual a cor dos seus olhos?");
      } if (olhos == "") {
          mensagem.innerText = "Por favor, forneça uma cor de olhos";
          mensagem.style.color = "red";
      } else if (olhosPorc[olhos.toLowerCase()]) {
          
          // Constantes usadas para calcular a porcentagem de cada característica
          const idadeProb = idade < 18 ? 0.217 : 0.63;
          const corProb = corPorc[cor.toLowerCase()];
          const olhosProb = olhosPorc[olhos.toLowerCase()];

          // Calculadora que junta o valor de todas as constantes e fornece um valor sólido
          const totalPorc = idadeProb * corProb * olhosProb;
          const porcentagem = (totalPorc * 100).toFixed(2);

          // Mensagem exibida após as informações estarem dadas
          if (idade < 18) {
            mensagem.innerText = `Olá, ${nome}! Você é menor de idade com ${idade} anos! Você é ${cor} e possui olhos ${olhos}. A chance de existirem pessoas como você é de aproximadamente ${porcentagem}%.`;
            mensagem.style.color = "green";
          } else {
            mensagem.innerText = `Olá, ${nome}! Você já é adulto com ${idade} anos! Você é ${cor} e possui olhos ${olhos}. A chance de existirem pessoas como você é de aproximadamente ${porcentagem}%.`;
            mensagem.style.color = "yellow";
          }

          // Log dos valores para depuração
          console.log(`Nome do usuário: ${nome}`);
          console.log(`Idade do usuário: ${idade}`);
          console.log(`Cor da pele do usuário: ${cor}`);
          console.log(`Cor dos olhos do usuário: ${olhos}`);
          console.log(`Probabilidade total do usuário: ${porcentagem}%`);

        } else {
          mensagem.innerText = "Cor dos olhos não reconhecida. Tente 'castanho', 'azul', 'verde' ou 'mel'.";
          mensagem.style.color = "red";
        }
      } else {
        mensagem.innerText = "Cor da pele não reconhecida. Tente 'branco', 'preto', 'pardo', 'indígena' ou 'amarelo'.";
        mensagem.style.color = "red";
      }
    }
    
  } else {
    mensagem.innerText = "Nome não dado. Por favor insira seu nome.";
    mensagem.style.color = "red";
  }
});
