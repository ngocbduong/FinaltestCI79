import { useState, useEffect } from 'react';
import PokemonList from './Pokemon';
import { getPokemonList } from '../Data/ExtractData';

const Courses = () => {
    const [pokemonlist, setpokemonlist] = useState([]);

    useEffect(() => {
        getPokemonList().then((data) => {
            setpokemonlist(data.results);
        });
    }, []);
    return (
        <div>
            <div>Many Courses: </div>
            <PokemonList data={pokemonlist} />
        </div> 
    );
};



export default Courses;
