import styles from './Personalinfo.css';
import PersonalData from "./PersonalData/PersonalData";
import Brief from "./Brief/Brief";
import Experience from './Experience/Experience';

export default function Personalinfo(){
    return(
        <div className={styles.personalinfo}>
            <PersonalData />
            <Brief />
            <Experience />
        </div>
    );
}