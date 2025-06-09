// --------------------------------------------------------------------------------//
const toggleBtn = document.getElementById('toggle-theme');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  document.body.classList.toggle('light-theme');
});

//---------------------------------------------------------------------------------//

document.getElementById('start-interview').addEventListener('click', () => {
  alert("Bem-vindo à entrevista de emprego mais estranha da sua vida.");

  let nome = prompt("Qual é o seu nome?");
  alert("Muito bem, " + nome + ". Vamos começar...");

  let motivacao = prompt("Por que você quer trabalhar na nossa empresa?");
  alert("Hmm... interessante. Você e mais 783 pessoas disseram a mesma coisa.");

  let habilidade = prompt("Qual sua maior habilidade?");
  alert("Excelente! Agora só precisamos de alguém com o triplo disso.");

  let defeito = prompt("E seu maior defeito?");
  alert("Corajoso em admitir. A maioria mente aqui.");

  let animal = prompt("Se você fosse um animal, qual seria?");
  alert("Ótimo! Nós já temos dois " + animal + "s no RH.");

  let resultado = Math.random() > 0.5
    ? "Parabéns, você foi contratado para um cargo que ainda nem existe! 🥳"
    : "Infelizmente você não passou, mas seu currículo será enterrado com honra. ⚰📄";

  alert(resultado);
});