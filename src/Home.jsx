import axios from "axios";
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import './Home.css';
import pokeCard from "./components/pokeCard";

function Home() {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonInput, setPokemonInput] = useState("");
  const [isPokemonDetailsSuccess, setPokemonDetailsSuccess] = useState(false);

  const handlePokemonInput = (event) => setPokemonInput(event.target.value.toLowerCase());

  useEffect(() => {
    const getPokeDetails = async () => {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonInput}`);
      console.log(response.data);
      setPokemon(response.data);
      setPokemonDetailsSuccess(true);
    }

    // Make sure we don't make an http request if no dropdown item is selected
    if(pokemonInput.length > 0 ) {
      getPokeDetails();
    }
  }, [pokemonInput]);


    return (
      <>
        <div className='centeredColumn'>
            <Stack gap={2} className="col-md-5 mx-auto">
                <h1 className='alignText'>Search Pokemon</h1>
                <Form className='centeredColumn'>
                    <Form.Group className='centeredColumn'>
                        <Form.Label>Pokemon</Form.Label>
                        <Form.Control onChange={handlePokemonInput} type='text' placeholder='Pikachu' />
                    </Form.Group>
                    <Button variant='warning' type='submit'>Submit</Button>
                </Form>
                <div id='result'>
                  {pokemon.map((poke, i) => 
                    <pokeCard 
                      key={i}
                      abilityA={poke.abilities[0].ability.name}
                      abilityB={poke.abilities[1].ability.name}
                      exp={poke.base_experience}
                      name={poke.name}
                      sprite={poke.sprites.front_default}
                      hp={poke.stats[0].base_stat}
                      attack={poke.stats[1].base_stat}
                      defense={poke.stats[2].base_stat}
                      specialAttack={poke.stats[3].base_stat}
                      specialDefense={poke.stats[4].base_stat}
                      speed={poke.stats[5].base_stat}
                    />
                  )}
                </div>
            </Stack>
        </div>
      </>
    )
  }
  
  export default Home
  