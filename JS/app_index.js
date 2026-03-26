const { createElement } = require("react");

// Buscar (READ)
function listarImoveis(){

    // Busca os dados que foram armazenados no localStorage
    const imoveis = JSON.parse(localStorage.getItem("imoveis") || "[]",
);

    //Lista os imóveis
    const listaImoveis = document.querySelector("#listaImoveis");

    // Limpa a lista para receber os dados atualizados
    listaImoveis.innerHTML = "";

    imoveis.map((imovel) => {

        // Criando a estrutura do card
        const card = document.createElement("div");
        card.classList.add("card");
        listaImoveis.appendChild(card);

        // Cria a estrutura da Foto
        const divFoto = document.createElement("div");
        divFoto.classList.add("foto");
        card.appendChild(divFoto);

        // Foto
        const imgFoto = document.createElement("img");
        imgFoto.setAttribute("src", Array_Fotos.foto);
        divFoto.appendChild(imgFoto);

        // Nome
        const nome = document.createElement("h3");
        nome.classList.add("capitalized");
        nome.textContent = colaborador.nome;
        card.appendChild(nome);

        // Descricao
        const descricao = document.createElement("p");
        descricao.classList.add("capitalized");
        descricao.textContent = imovel.Descricao;
        card.appendChild(descricao);

        // Valor
        const valor = document.createElement("h5");
        valor.textContent = imovel.Valor;
        card.appendChild(valor);

        // Area
        const area = document.createElement("h5");
        area.textContent = imovel.Area;
        card.appendChild(area);

        // Quartos
        const quartos = document.createElement("p");
        quartos.textContent = imovel.Quartos;
        card.appendChild(quartos);

        // Tipo Imóvel
        const Tipo_Imovel = document.createElement("p");
        Tipo_Imovel.textContent = imovel.Tipo_Imovel;
        card.appendChild(Tipo_Imovel);

        // Localização
        const Loc = document.createElement("p");
        Loc.textContent = imovel.Localizacao;
        card.appendChild(Loc);

        // Link mapa
        const Link_Mapa = document.createElement("a");
        Link_Mapa.textContent = imovel.Link_Mapa;
        card.appendChild(Link_Mapa);

        // Tipo Negócio
        const Tipo_Negocio = document.createElement("p");
        Tipo_Negocio.textContent = imovel.Tipo_Negocio;
        card.appendChild(Tipo_Negocio);

        // Finalidade
        const Finalidade = document.createElement("p");
        Finalidade.textContent = imovel.Finalidade;
        card.appendChild(Finalidade);

        // Status
        const Status = document.createElement("p");
        Status.textContent = imovel.Status;
        card.appendChild(Status);

        // Data de criação
        const created_at = document.createElement("p");
        created_at.textContent = imovel.created_at;
        card.appendChild(created_at);


    });

}