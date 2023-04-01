import Card from '../Card/Card';
import styles from '../Cards/Cards.module.css';

export default function Cards(props) {
   const { characters, onClose } = props;
   
   return (
      <div className={styles.divContenedor2}>
         {
         characters.map((value)=>{
            return(
               <Card
               id = {value.id}
               key = {value.id}
               name={value.name}
               species={value.species}
               gender={value.gender}
               image={value.image}
               onClose={() => onClose(value.id)}
               />
            )
         })
         }
      </div>
   );
}
