import axios from "axios";
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import './Home.css';
import PokeCard from "./components/PokeCard";
import formatPokemon from "./components/formatPokemon";

function Home() {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonInput, setPokemonInput] = useState("");
  const [isPokemonDetailsSuccess, setPokemonDetailsSuccess] = useState(false);

  const handlePokemonInput = (event) => {
    // event.preventDefault();
    setPokemonInput(event.target.value.toLowerCase());
  };


  const getPokeDetails = async (event) => {
    event.preventDefault();
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonInput}`);
    console.log(response.data);
    let formattedPoke = formatPokemon(response.data)
    setPokemon([formattedPoke]);
    setPokemonDetailsSuccess(true);
  }

    // Make sure we don't make an http request if no dropdown item is selected


  console.log(pokemon)


    return (
      <>
        <div className='centeredColumn'>
            <Stack gap={2} className="col-md-5 mx-auto">
                <h1 className='alignText'>Search Pokemon</h1>
                <Form className='centeredColumn'>
                    <Form.Group className='centeredColumn'>
                        <Form.Label>Pokemon</Form.Label>
                        <Form.Control type='text' placeholder='Pikachu' onChange={handlePokemonInput} />
                    </Form.Group>
                    <Button onClick={getPokeDetails} variant='warning' type='submit'>Submit</Button>
                </Form>
                  <div id='result'>
                    {pokemon.map((poke, i) =>
                      <PokeCard 
                        key={i}
                        abilityA={poke.abilityA}
                        abilityB={poke.abilityB}
                        exp={poke.exp}
                        name={poke.name}
                        sprite={poke.sprite}
                        hp={poke.hp}
                        attack={poke.attack}
                        defense={poke.defense}
                        specialAttack={poke.specialAttack}
                        specialDefense={poke.specialDefense}
                        speed={poke.speed}
                        typeA={poke.typeA}
                        typeB={poke.typeB}
                      />
                    )}
                </div>
            </Stack>
        </div>
      </>
    )
  }
  
  export default Home
  