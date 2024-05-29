import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom';
import './Details.css'

const PokemonPage = () => {
    const params = useParams();
    const [pokemonData, setPokemonData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPokemonData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
                setPokemonData(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching Pokemon data:', error);
                setLoading(false);
            }
        };

        fetchPokemonData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!pokemonData) {
        return <div>Pokemon not found.</div>;
    }
    console.log(pokemonData);
    return (
        <div>



            <div className="main">
                <div id='block1' className="blocks">
                    <div id='Info' className="Categories">
                        <h1>{pokemonData.name}</h1>
                        <div className="infoBlock">
                            <div className="miniBlocks">
                                <h2>Abilities:</h2>
                            <ul>{pokemonData.abilities.map((ability, index) =>
                                    <h3 key={index}>{ability.ability.name}</h3>
                                )}</ul>
                                <hr></hr>
                                <h3>Height: {pokemonData.height} <br></br> Weight: {pokemonData.weight}</h3>
                            </div>
                            
                            
                        </div>
                        
                        <img src={pokemonData.sprites.other.dream_world.front_default}></img>
                        

                    </div>
                    
                </div>
            </div>


            
        </div>
    );
};

export default PokemonPage;