import { useEffect, useState } from 'react';
import '../App.css';
import PokemonThumnail from './PokemonThumnail';

function App() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const limit = 20;

  const getAllPokemons = async () => {
    const offset = (page - 1) * limit;
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
    const data = await res.json();
    setPage(page + 1);
    function createPokemonObject(result) {
      result.forEach(async (pokemon) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
        const data = await res.json();
        setAllPokemons((currentList) => {
          const allPoks = [...currentList, data];
          return allPoks.sort((a, b) => a.id - b.id);
        });
      });
    }
    createPokemonObject(data.results);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  const filteredPokemons = allPokemons.filter(pokemon =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app-container">
      <h1>Pokemon</h1>
      <input
        id="inp1"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <p id="p_result"></p>
      <div className="pokemon-container">
        <div className="all-container">
          {filteredPokemons.map((pokemon, index) => (
            <PokemonThumnail
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.sprites.other.dream_world.front_default}
              type={pokemon.types[0].type.name}
              key={index}
            />
          ))}
        </div>
        <button className="load-more" onClick={getAllPokemons}>Load More</button>
      </div>
    </div>
  );
}

export default App;