import styles from './Card.module.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { addFavorite, removeFavorite } from '../../redux/actions';

export default function Card(props) {
   const dispatch = useDispatch(); 
   const myFavorites = useSelector(selector=> selector.myFavorites)
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () =>{
      if(isFav){
         setIsFav(false);
         dispatch(removeFavorite(props.id))
      }else{
         setIsFav(true);
         dispatch(addFavorite(props))
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={styles.divPrincipal}>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         <button className={styles.buttonClose} onClick={props.onClose}>X</button>
         <Link to={`/detail/${props.id}`}>
            <h2 className={styles.subTitulo1}>{props.name}</h2>
         </Link>
         <div className={styles.subTitulo2Div}>
            <h2 className={styles.subTitulo2}>Specie: {props.species}</h2>
            <h2 className={styles.subTitulo2}>Gender: {props.gender}</h2>
         </div>
         
         <img className={styles.image} src={props.image} alt="" />
      </div>
   );
}
