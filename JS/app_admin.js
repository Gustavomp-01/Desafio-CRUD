// Busca o formulário

const formCadastro = document.querySelector("#formCadastro");

formCadastro.addEventListener("submit", (evento)=> {
    evento.preventDefault();

    cadastraImovel();
});

// Cadastrar (CREATE)
function cadastraImovel(){

    let Id = localStorage.getItem("Id" || 1 );

    // Criando o objeto

    // Pegando as URLS das fotos
    const stringFotos = formCadastro.Fotos.value;

    // Transformando a string em um array e removendo espaços em branco

    // stringFotos ? Operador Ternário(A váriavel stringFotos é nula ?) Basicamente um if else.
    // Se sim, ele pega esse texto e separa toda vez que tiver uma vírgula, gerando um array.
    // O map vai passar por cada URL e retirar cada espaço vazio com o trim()
    // Caso a variável stringFotos seja nula, vem o segundo Operador Ternário (: "O else") e ai ele retorna um array vazio. 
    const Array_Fotos = stringFotos ? stringFotos.split(',').map(url => url.trim()) : [];

    const imovel = {
        
        Id: Id,
        Nome: formCadastro.Nome.value,
        Descricao: formCadastro.Descricao.value,
        Valor: formCadastro.Valor.value,
        Area: formCadastro.Area.value,
        Quartos: formCadastro.Quartos.value,
        Tipo_Imovel: formCadastro.Tipo_Imovel.value,
        Localizacao: formCadastro.Localizacao.value,
        Link_Mapa: formCadastro.link-mapa.value,
        Tipo_Negocio: formCadastro.Tipo_Negocio.value,
        Finalidade: formCadastro.Finalidade.value,
        Fotos: Array_Fotos,
        Status: formCadastro.ativo.checked,
        created_at: new Date().toISOString()
    };

    localStorage.setItem("Id", Id++);

    // Busca os dados do LocalStorage
    const imoveis = JSON.parse(localStorage.getItem("imoveis") || "[]", 
    );

    //Guarda o novo imóvel
    imoveis.push(imovel);

    //Salva no localStorage convertido para JSON
    localStorage.setItem("imoveis", JSON.stringify(imoveis));

    //Limpar o form
    formCadastro.reset();
}