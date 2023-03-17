import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Detail(){
    const {detailId} = useParams();

    const [character, setCharacter] = useState({});
    
    useEffect(() => {
        const URL_BASE = "https://be-a-rym.up.railway.app/api";
        const key = "d66ed9e3539f.e190f2682879ad1a64d3";

        axios(`${URL_BASE}/character/${detailId}?key=${key}`).then((response)=>
            setCharacter(response.data)
        );
    }, []);
    

    return(
        <div>
            {
                character.name ? 
                (<>
                    <h2>{character.name}</h2>
                    <p>{character.status}</p>
                    <p>{character.species}</p>
                    <p>{character.gender}</p>
                    <p>{character.origin?.name}</p>
                    <img src={character.image} alt="hpñi" />
                </>)
                :
                (<h1 >Loading...</h1>)
            }
        </div>
    )
}