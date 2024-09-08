function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    console.log(section); // Loga o elemento HTML para fins de depuração

    let campoPesquisa = document.getElementById ("campo-pesquisa").value

    if (campoPesquisa == "") {
        return
    }

    console.log(campoPesquisa);
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada dado no array de dados
    for (let dado of dados) {
        // se titulo includes campoPesqusa
        if (dado.titulo.toLowerCase().includes(campoPesquisa.toLowerCase()) || dado.descricao.includes(campoPesquisa)) {
            resultados += `
              <div class="item-resultado">
                <h2>
                  <a href="${encodeURIComponent(dado.link)}" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
              </div>
            `;
          }
    }
  
    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
  }