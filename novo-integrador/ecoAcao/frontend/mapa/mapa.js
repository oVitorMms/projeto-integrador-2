const map = new maplibregl.Map({
  style: 'https://tiles.openfreemap.org/styles/liberty',
  center: [-54.58191, -25.52975],
  zoom: 13,
  container: 'map',
});

// 1. Variável global para armazenar o array de coordenadas
let coordenadasClicadas = null;

// Identifica o parágrafo do HTML onde as coordenadas devem aparecer
const textoLocalizacao = document.getElementById('coordenadasClicadas');

// 2. Evento que captura o clique no mapa
map.on('click', (e) => {
  // Salva no formato numérico [longitude, latitude]
  coordenadasClicadas = [e.lngLat.lng, e.lngLat.lat];
  
  // Atualiza o texto na sua barra lateral em tempo real (formatado com 5 casas decimais)
  if (textoLocalizacao) {
    textoLocalizacao.innerText = `${coordenadasClicadas[0].toFixed(5)} | ${coordenadasClicadas[1].toFixed(5)}`;
  }

  // Mantive o console log para você verificar na inspeção do navegador
  console.log("Coordenadas salvas na variável:", coordenadasClicadas);
  aparecerBarraDenuncia();
});

/* ----- Sidebars ----- */
const botaoLeftBar = document.getElementById('botaoLeftBar');
const botaoTrue = document.getElementById('botaoX');
const leftbar = document.getElementById('leftbar');
const rightbarDenuncia = document.getElementById('rightbar'); 
const mapa = document.getElementById('map');

function aparecerLeftBar() {
  if (leftbar) {
    leftbar.classList.toggle('leftbar-open');
    leftbar.classList.toggle('leftbar-closed');
  }
  
  // Validação extra para garantir que o elemento existe antes de ler as classes
  if (leftbar && leftbar.classList.contains('leftbar-open')) {
    botaoLeftBar.style.transform = 'rotate(180deg)';
  } else {
    botaoLeftBar.style.transform = 'rotate(0deg)';
  }
}
function aparecerBarraDenuncia(){
  if (rightbarDenuncia) {
    rightbarDenuncia.classList.toggle('rightbar-open');
    rightbarDenuncia.classList.toggle('rightbar-closed');
  }
}
botaoTrue.addEventListener('click', aparecerBarraDenuncia);
botaoLeftBar.addEventListener('click', aparecerLeftBar);
/* ====================FIM SIDE BAR==========================*/


/*------------------------- DROP DOWN--------------------*/
const botaoDropDown = document.getElementById('botaoDropDown');
const dropDownContent = document.getElementById('dropDownContent');
const dropDown = document.getElementById('dropdown');
dropDown.addEventListener('mouseenter', abaixarDropDown);
dropDown.addEventListener('mouseleave', subirDropDown);

function abaixarDropDown(){
  dropDownContent.classList.remove('dropDownContent-closed');
  dropDownContent.classList.add('dropDownContent-open');
}
function subirDropDown(){
  dropDownContent.classList.remove('dropDownContent-open');
  dropDownContent.classList.add('dropDownContent-closed');
}


// 1. Puxa todos os itens que têm a classe 'dropDownItem'
const itensMenu = document.querySelectorAll('.dropDownItem');

// 2. Passa por cada item da lista adicionando o evento de clique
itensMenu.forEach(item => {
  item.addEventListener('click', aoClicarNoItem);
});

// 3. A função que será executada quando QUALQUER um deles for clicado
function aoClicarNoItem(event) {
  // 'event.target' é exatamente o elemento <li/> que foi clicado
  const itemClicado = event.target;
  // Pega o texto de dentro do item clicado
  const texto = itemClicado.textContent; 
  // Pega o ID do item clicado (ex: dropDownItem1)
  const id = itemClicado.id; 
  console.log(`Você clicou no item com ID "${id}" que contém o texto: "${texto}"`);
  botaoDropDown.innerText=`${texto}`
}

/*==================FIM DROP DOWN========================*/
/* --------------------------PREVIEW DA FOTO0--------------------*/
const inputImagem = document.getElementById('inputFoto');
const preview = document.getElementById('preview');

inputImagem.addEventListener('change', function(event) {
  const arquivo = event.target.files[0];
  
  if (arquivo) {
    preview.src = URL.createObjectURL(arquivo);
  } else {
    preview.src = '';
  }
});
/* =========================FIM PREVIEW DA FOTO======================== */
