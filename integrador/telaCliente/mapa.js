const map = new maplibregl.Map({
    style: 'https://tiles.openfreemap.org/styles/liberty',
    center: [-54.58191, -25.52975],
    zoom: 13,
    container: 'map',
  })
  map.on('click', (e) => {
    // Captura as coordenadas de longitude e latitude de onde o usuário clicou
    const { lng, lat } = e.lngLat;

    // Estrutura HTML do seu Card (adicione suas classes CSS para estilizar)
    const cardConteudo = `
        <div class="fullCard">
            <div class="areaDenuncia">
                <h3>Faça sua denuncia: <input type="text" placeholder="Descrição" class="inputDeTextoSimples" id="inputDenuncia"></h3>

            </div>
            
            <div class="coordenadas">
                <strong>Lat:</strong> ${lat.toFixed(5)}<br>
                <strong>Lng:</strong> ${lng.toFixed(5)}
            </div>
            <div>
            <button onclick="chamarResponsa()" class="botaoSimples">Chamar responsaveis</button>
        </div>
    `;

    // 3. Instancia e abre o Card (Popup) na posição exata do clique
    new maplibregl.Popup({ closeOnClick: true }) // Fecha o card anterior se clicar em outro lugar
        .setLngLat([lng, lat])
        .setHTML(cardConteudo)
        .addTo(map);
});

function chamarResponsa(){
    const descri = document.getElementById('inputDenuncia').value;
    
    alert(`${descri}`)
}
