import FormTrainer from "../components/HomePage/FormTrainer"
import './StylePage/HomePage.css'

const HomePage = () => {
  return (
    <div className="container__hp">
      <audio autoPlay>
        <source src="/img/cancionhome.mp3" type="audio/mp3"/>
      </audio>
        <img className='title__pokedex' src="/img/pokedex-title.png" alt="" />
        <h2 className="title__hp" >Hola Entrenador</h2>
        <p className="p" >To see the Pokemon's information, tell me your trainer name</p>
        <FormTrainer />
    </div>
  )
}

export default HomePage