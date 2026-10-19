const map = new maplibregl.Map({
  style: 'https://tiles.openfreemap.org/styles/liberty',
  center: [-54.58191, -25.52975],
  zoom: 13,
  container: 'map',
});

let coordenadasClicadas = null;
const textoLocalizacao = document.getElementById('coordenadasClicadas');

map.on('click', (e) => {
  coordenadasClicadas = [e.lngLat.lng, e.lngLat.lat];
  
  if (textoLocalizacao) {
    textoLocalizacao.innerText = `${coordenadasClicadas[0].toFixed(5)} | ${coordenadasClicadas[1].toFixed(5)}`;
  }

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

const itensMenu = document.querySelectorAll('.dropDownItem');

itensMenu.forEach(item => {
  item.addEventListener('click', aoClicarNoItem);
});

function aoClicarNoItem(event) {
  const itemClicado = event.target;
  const texto = itemClicado.textContent; 
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
