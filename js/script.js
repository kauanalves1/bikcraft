const links = document.querySelectorAll('.header-menu a')

function ativarLink(link){
  const url = location.href
  const href = link.href
  if(url.includes(href)){
    link.classList.add('ativo')
  }
}

links.forEach(ativarLink)

const params = new URLSearchParams(location.search)

function activeProduct(param){
  const elemento = document.getElementById(param)
  if(elemento){
    elemento.checked = true
  }
}

params.forEach(activeProduct)

// Perguntas frequentes

const btn = document.querySelectorAll('.perguntas button')

function activeQuestion(event){
  let pergunta = event.currentTarget
  const controls = pergunta.getAttribute('aria-controls')
  const resposta = document.getElementById(controls)
  
  resposta.classList.toggle('ativa')
  const ativa = resposta .classList.contains('ativa')
  console.log(ativa)
  pergunta.setAttribute('aria-expanded', ativa)
  // console.log(awsner)
}

function eventoPerguntas(item){
  item.addEventListener('click', activeQuestion)
}

btn.forEach(eventoPerguntas)

// Galeria de bicicletas

const galery = document.querySelectorAll('.bicicleta-imagens img')
const galeryContainer = document.querySelector('.bicicleta-imagens')

console.log(galery, galeryContainer)


function trocarImagem(ev){
  const img = ev.currentTarget
  const media = matchMedia('(min-width: 1000px)').matches
  if(media){
    galeryContainer.prepend(img)
  }
}

function eventosGaleria(img){
  img.addEventListener('click', trocarImagem)
}

galery.forEach(eventosGaleria)

// Anine

if(window.SimpleAnime){
  new SimpleAnime()
}
