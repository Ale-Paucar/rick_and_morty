import styles from "../Nav/Nav.module.css";
import SearchBar from "../SearchBar/SearchBar.jsx"
import About from "../About/About";
import { Link } from "react-router-dom";


export default function Nav({onSearch}) {
    
    return (
        <div className={styles.divContNav}>
            <Link to="/">Log Out</Link>
            <Link to="/about">About</Link>
            <Link to="/home">Home</Link>
            <Link to="/favorites">Favorites</Link>
            <SearchBar onSearch={onSearch}/>
        </div>
    );
}