import { useSelector } from "react-redux";  
import style from './Favorites.module.css';
import { Link } from "react-router-dom";

const Favorites = () =>{
    const {myFavorites} = useSelector(state => state)

    return (
        <div>
            {
                myFavorites.map((character)=>{
                    return(
                        <div>
                            
                            <Link to={`/detail/${character.id}`}>
                                <h2 className={style.subTitulo1}>{character.name}</h2>
                            </Link>
                            <div className={style.subTitulo2Div}>
                                <h2 className={style.subTitulo2}>Specie: {character.species}</h2>
                                <h2 className={style.subTitulo2}>Gender: {character.gender}</h2>
                            </div>
                            <img className={style.image} src={character.image} alt="" />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Favorites;