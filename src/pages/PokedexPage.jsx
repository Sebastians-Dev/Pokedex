import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch"
import { useEffect, useRef, useState } from "react"
import ListPokemons from "../components/PokedexPage/ListPokemons"
import SelectType from "../components/PokedexPage/SelectType"
import './StylePage/PokedexPage.css'

const PokedexPage = () => {

  const [pokeSearch, setPokeSearch] = useState('')
  const [TypeSelected, setTypeSelected] = useState('allPokemons')
  const [page, setPage] = useState(1)
  const [pokePerPage, setPokePerPage] = useState(12)

  const inputSearch = useRef()

  const trainer = useSelector (states => states.trainer )

  const url =  'https://pokeapi.co/api/v2/pokemon?limit=999999&offset=0'
  const [ pokemons, getPokemons, getPokeByType]= useFetch(url)

  useEffect(() => {
    if(TypeSelected === 'allPokemons'){
      getPokemons()
    }else{
      getPokeByType(TypeSelected)
    }
    setPage(1)
  }, [TypeSelected])
  
  const handleSubmit = e =>{
    e.preventDefault()
    setPokeSearch(inputSearch.current.value.trim().toLowerCase())
    setPage(1)
  }

  const pokemonsFiltered = pokemons?.results.filter(poke =>{
    return poke.name.includes(pokeSearch) || poke.id == pokeSearch
  
  })

  //Logica paginacion
  const starIndex = (page - 1) * pokePerPage
  const endIndex = page * pokePerPage
  const quantityPokes = pokemonsFiltered ? pokemonsFiltered.length : 0
  const quantityPages = Math.ceil(quantityPokes /  pokePerPage)


  return (
    <div className="containerp">
      <header className="header__container">
      <img className='title__pokedex__2' src="/img/pokedex-title.png" alt="" />
      <img className="title__pokebola" src="/img/pokebola.png" alt="" />
      </header>
      <p className="p__container">Welcome <span className="span__p">{trainer}</span>, here you can find your favorite pokemon</p>
      <form onSubmit={handleSubmit} >
        <input ref={inputSearch} type="text" />
        <button>Search</button>
      </form>
      <SelectType 
      setTypeSelected={setTypeSelected}
      />
      
        <ListPokemons 
        pokemons={pokemonsFiltered}
        starIndex={starIndex}
        endIndex={endIndex}
        quantityPages ={quantityPages}
        setPage={setPage}
        page={page}
        />

    </div>
  
  )
}

export default PokedexPage
  
  
