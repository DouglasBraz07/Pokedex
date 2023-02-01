/*alert('ola mundo')*/ 
/*Primeiro passo quando clicar no pokemon da listagem temos que esconder o cartao do pokemon aberto e mostra o cartao do pokemon correspondente ao que foi selecionado na listagem 
pra isso vamos precisar trabalhar com dois elementos
1 - listagem
2 - cartao do pokemon

precisamos criar duas variaves no js pra trabalhar com os elementos da tela

vamos precisar trabalahar com evento de clique feito pelo usuario na listagem de pokemon

- remover a classe aberto so do cartao que esta aberto
- ao clicar em um pokemon da listagem pegamos o id do pokemon pra saber qual cartao mostrar
- remover a classe ativa que marca o pokemon selecionado
- adicionar a classe ativo no item da lista selecionado

*/

//precisamos criar duas variaves no js pra trabalhar com os elementos da tela
const listaselecaopokemons = document.querySelectorAll('.pokemon')
const pokemonscard = document.querySelectorAll('.cartao-pokemon')

listaselecaopokemons.forEach(pokemon => {
 //vamos precisar trabalahar com evento de clique feito pelo usuario na listagem de pokemon
    pokemon.addEventListener('click', () => { 
        //remover a classe aberto so do cartao que esta aberto
        const cartaopokemonaberto = document.querySelector('.aberto')
        cartaopokemonaberto.classList.remove('aberto')

        //ao clicar em um pokemon da listagem pegamos o id do pokemon pra saber qual cartao mostrar
        const idpokemonselecionado = pokemon.attributes.id.value

        const iddocartaopokemonparaabrir = "cartao-" + idpokemonselecionado
        const cartaopokemonparabarir = document.getElementById(iddocartaopokemonparaabrir)
        cartaopokemonparabarir.classList.add('aberto')

        //remover a classe ativa que marca o pokemon selecionado
        const pokemonativonalistagem = document.querySelector('.ativo')
        pokemonativonalistagem.classList.remove('ativo')

        //adicionar a classe ativo no item da lista selecionado
        const pokemonselecionadonalistagem = document.getElementById(idpokemonselecionado)
        pokemonselecionadonalistagem.classList.add('ativo')

    })
})
    
