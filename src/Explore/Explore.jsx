import { useNavigate } from 'react-router-dom';
import { NavBar } from '../Components/Navbar';
import { Header } from '../Components/Header';
import CardGrid from '../Components/CardGrid';
import styles from './explore.module.css';

export function Explore() {

    const navigate = useNavigate();

    return (
        <div className={styles.blue}>
            < NavBar />
            < CardGrid />
            
             {/* FOR TITLE, INSERT LOGO SVG  */}


        </div>
    )
}

