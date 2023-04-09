import styles from '../SearchBar/SearchBar.module.css';
import { useState} from 'react';

export default function SearchBar({onSearch}) {

   const [characterID,SetcharacterID] = useState("");
   
   const handleChange = (event) => {
      SetcharacterID(event.target.value)
   }
   
   
   return (
      <div className={styles.divContSearch}>
         <input className={styles.inpt} type='search' onChange={handleChange}/>
         <button className={styles.buttonAgregar} onClick={()=> onSearch(characterID)}>Agregar</button>
      </div>
   );
}
