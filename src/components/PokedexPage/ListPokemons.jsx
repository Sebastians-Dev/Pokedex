import { useEffect, useState } from "react"
import PokeCard from "./PokeCard"
import './style/ListPokemons.css'

const ListPokemons = ({pokemons, starIndex, endIndex, quantityPages, setPage, page}) => {

  const [blockPage, setBlockPage] = useState(1)
  const [pagesPerBlock, setPagesPerBlock]=useState(5)
  //Logia de bloques
  const initialPageBlock = (blockPage - 1) * pagesPerBlock
  const endPageBlock = initialPageBlock + pagesPerBlock

  useEffect(() => {
    setBlockPage(Math.ceil(page / pagesPerBlock))
  }, [page])
  

  const arrPages = []
   for (let i = 1; i <=quantityPages;i++){
     arrPages.push(i)
   }

   const changePage = (pageNumber) => setPage(pageNumber)

   const handlePrev = ()=>{
    setPage(page - 1)
   }

   const handleNext = ()=>{
    setPage(page + 1)
   }

   const blockPrev = ()=>{
    setPage(page - 5)
   }

   const blockNext = ()=>{
    setPage(page + 5)
   }


  return (
    <div>
      <ul className="cards gap-page">
        <button disabled={page === 1 && true} onClick={handlePrev}>&lt;</button>
        <button disabled={page === 1 && true} onClick={blockPrev}>...</button>
        {
          arrPages.slice(initialPageBlock, endPageBlock).map(pageNumber => (
            <li className={`${pageNumber === page && 'active-page' }`} onClick={() => changePage(pageNumber)} key={pageNumber}>{pageNumber}</li>
          ))
        }
        <button disabled={page === quantityPages && true} onClick={blockNext}>...</button>
        <button disabled={page === quantityPages && true} onClick={handleNext}>&gt;</button>
      </ul>
      <div className="cards">
      {
          pokemons?.slice(starIndex, endIndex).map(pokeInfo => (
              <PokeCard
                  key={pokeInfo.url}
                  pokeInfo={pokeInfo}
              />
          ))
      }
      </div>
    </div>
  )
}

export default ListPokemons