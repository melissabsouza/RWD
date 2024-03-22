import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  const [data, setData] = useState<any>();
  const[name, setName] = useState();
  const[pokemon, setPokemon] = useState("pikachu")
  var URL = "https://pokeapi.co/api/v2/pokemon/"+pokemon;

  useEffect(() => {
    axios.get(URL).then((response) => {
      setData(response.data);
      setName(response.data.name)
      console.log(data);
    }).catch((err) => {
      console.log(err);
    })
  }, [URL]);

  return (
    <>
      <div className='tudo'>
        <div className='meow'>
        <img className='melody' src="https://media2.giphy.com/media/U7VI2RFA6VcH2Gm7H9/source.gif" alt="" />
        <h1>Pokedex ༊*·˚</h1>
        <h2>{name}</h2>
        <img width={500} height={500} src={data ? data.sprites.front_default : "<p>LOADING...</p>S"}/>
        <input type='number' placeholder='escolha seu pokemon' onChange={e => setPokemon(e.target.value)} />
        </div>
      </div>
    </>
  )
}

export default App
