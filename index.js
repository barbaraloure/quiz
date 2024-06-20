const perguntas = [
    {
      pergunta: "O que é mediação no contexto do Direito?",
      respostas: [
        "Um processo judicial onde o juiz decide o caso.",
        "Um processo extrajudicial onde um terceiro neutro facilita a comunicação entre as partes.",
        "Um processo administrativo onde o governo intervém na disputa."
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o papel do mediador?",
      respostas: [
        "Decidir o resultado da disputa.",
        "Apoiar as partes na busca de um acordo mútuo.",
        "Representar uma das partes no conflito."
      ],
      correta: 1
    },
    {
      pergunta: "Qual a principal característica da mediação?",
      respostas: [
        "Caráter impositivo das decisões.",
        "Voluntariedade e confidencialidade.",
        "Publicidade dos atos."
      ],
      correta: 1
    },
    {
      pergunta: "A mediação pode ser utilizada em quais tipos de conflitos?",
      respostas: [
        "Somente em conflitos comerciais.",
        "Somente em conflitos familiares.",
        "Em uma variedade de conflitos, incluindo comerciais e familiares."
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a vantagem da mediação sobre o litígio?",
      respostas: [
        "Maior rapidez e custo mais baixo.",
        "Garantia de vitória para uma das partes.",
        "Processo mais longo e complicado."
      ],
      correta: 0
    },
    {
      pergunta: "A mediação é obrigatória em todos os casos?",
      respostas: [
        "Sim, em todos os casos judiciais.",
        "Não, é um processo voluntário.",
        "Sim, mas somente em casos criminais."
      ],
      correta: 1
    },
    {
      pergunta: "Quem pode atuar como mediador?",
      respostas: [
        "Qualquer pessoa interessada.",
        "Apenas advogados.",
        "Profissionais capacitados e treinados em técnicas de mediação."
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do mediador na mediação?",
      respostas: [
        "Impor a sua própria solução.",
        "Facilitar a comunicação e ajudar as partes a encontrarem uma solução.",
        "Defender os interesses de uma das partes."
      ],
      correta: 1
    },
    {
      pergunta: "Como é considerada a decisão obtida na mediação?",
      respostas: [
        "Uma sentença judicial.",
        "Um acordo entre as partes.",
        "Uma recomendação não vinculativa."
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a consequência da mediação bem-sucedida?",
      respostas: [
        "Encerramento do processo judicial com base no acordo.",
        "Continuação do litígio sem qualquer alteração.",
        "Substituição do mediador por um árbitro."
      ],
      correta: 0
    }
  ];
  //pegar o template
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template') 
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + 'de' + totalDePerguntas
  
  
  //mapear o html
  //estrutura de repetição/ loop
  for(const item of perguntas) {
  const quizItem = template.content.cloneNode(true) 
  quizItem.querySelector('h3').textContent = item.pergunta
  
  for(let resposta of item.respostas) {
  const dt = quizItem.querySelector("dl dt").cloneNode(true)
  dt.querySelector('span').textContent = resposta
  dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
  dt.querySelector('input').value = item.respostas.indexOf(resposta)
  dt.querySelector('input').onchange = (event) => {
   const estaCorreta = event.target.value == item.correta 
  
   corretas.delete(item)
   if(estaCorreta) {
    corretas.add(item)
   } 
  mostrarTotal.textContent = corretas.size + 'de' + totalDePerguntas
  
  }
  
  
  quizItem.querySelector('dl').appendChild(dt)
  
  }
  
  quizItem.querySelector('dl dt').remove()
  //coloca a perguntas na tela
  quiz.appendChild(quizItem)
  
  }