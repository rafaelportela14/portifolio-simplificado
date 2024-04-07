
const botaoMostrarProjetos =  document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarProjetos,addEventListener('click',() =>
{
    MostrarMaisProjetos();

    esconderBotao();
})

function esconderBotao() {
    botaoMostrarProjetos.classList.add("remover");
}

function MostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}
