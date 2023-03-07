import { useEffect, useState } from "react";
import { getPokemonDetail } from "../Data/ExtractData";

const PokemonDetail = ({name}) => {
    const [detail, setDetail] = useState({});
    useEffect(() => {
        getPokemonDetail(name).then(data => {
            setDetail(data)
        })
    }, [name])
    return (
        <div>
            <table >
                <tr>
                    <td>Name: </td>
                    <td className="px-2">{detail.name}</td>
                </tr>
                <tr>
                    <td>Experience: </td>
                    <td className="px-2">{detail.base_experience}</td>
                </tr>
                <tr>
                    <td>Height: </td>
                    <td className="px-2">{detail.height}</td>
                </tr>
            </table>
        </div>
    )
}

export default PokemonDetail;