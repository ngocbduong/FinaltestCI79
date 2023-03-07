import { useState } from 'react';
import PokemonDetail from './PokemonDetail';

const PokemonList = ({ data }) => {
    const [selected, setSelected] = useState('');
    return (
        <div >
            <b>This is PokemonList: </b>
            <br />
            <i>You got {data.length} pokemons</i>
            <div className="d-inline-flex">
            <ul className="container m-4">
                {data.map((item, index) => {
                    return (
                        <li key={index}>
                            <a href="#" onClick={() => setSelected(item.name)}>{item.name}</a>
                        </li>
                    );
                })}
            </ul>
            <div>
                <b>This is the detail: </b>
                <PokemonDetail name={selected} />
            </div>

            </div>
        </div>
    );
};

export default PokemonList;
