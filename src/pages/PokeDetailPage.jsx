import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import './StylePage/PokeDetailPage.css'

const PokeDetailPage = () => {

  const { name } = useParams()

  const url = `https://pokeapi.co/api/v2/pokemon/${name}`
  const [pokemon, getPokemon] =useFetch(url)

  useEffect(() => {
    getPokemon()
  },[name])

    //let PokemonHp = pokemon?.stats[0].base_stat
    //document.getElementById("PokemonHp").value = progressValue;
  console.log(pokemon)

  return (
    <div>
      <header>
        <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
      </header>
      <hr />
      <h2>{pokemon?.name}</h2>
      <p>{pokemon?.height}</p>
      <p>{pokemon?.weight}</p>
      <progress className="barra" value={pokemon?.stats[0].base_stat} max="150"></progress>
      <progress className="barra" value={pokemon?.stats[1].base_stat} max="150"></progress>
      <progress className="barra" value={pokemon?.stats[2].base_stat} max="150"></progress>
      <progress className="barra" value={pokemon?.stats[5].base_stat} max="150"></progress>
      
      
    </div>
  )
}

export default PokeDetailPage