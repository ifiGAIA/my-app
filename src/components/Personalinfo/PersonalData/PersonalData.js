import styles from './PersonalData.module.css';
import Mugshotimg from '../../../img/Mug_shot3.jpg';

export default function Personalinfo(){
    return(
        <div className={styles.personaldata}>
            <div className={styles.card} id="card">
                <div className={styles.imgBx}>
                    <img src={Mugshotimg} alt="Mugshot"/>
                </div>
                <div className={styles.content}>
                    <div className={styles.details}>
                        <h2>Ben Chen<br></br><span>Game Engineer</span></h2>
                        <div className={styles.data}>
                            <h3>Phone :<span>  0981983510</span></h3>
                            <h3>E-mail :<span>  wet159@gmail.com</span></h3>
                            <h3>Education :<span>  碩士畢業</span></h3>
                            <h3>Skills :<span>  HTML,Javascript,C#,Python</span></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}