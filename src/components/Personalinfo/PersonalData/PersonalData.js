import styles from './PersonalData.module.css';
import Mugshotimg from '../../../img/Mug_shot3.jpg';
import LanguageContext from "../../LanguageContext/LanguageContext";
import { LanguageMap, LANGUAGE_LIST } from "../../Language/Language";
import { useContext } from "react";

const DATA_LIST = {
    name:{
        us:'Ben Chen',
        ch:'陳以樂',
    },
    position:{
        us:'Front-End Engineer',
        ch:'前端工程師',
    },
    data:
    {
        p_us:'Phone',
        p_ch:'電話',
        e_us:'E-mail',
        e_ch:'信箱',
        ed_us:'Education',
        ed_ch:'學歷',
        md_us:'Master',
        md_ch:'碩士畢業',
        s_us:'Skills',
        s_ch:'技能',
    }
}


export default function Personalinfo(){
    const languageCtx = useContext(LanguageContext);
    return(
        <div className={styles.personaldata}>
            <div className={styles.card} id="card">
                <div className={styles.imgBx}>
                    <img src={Mugshotimg} alt="Mugshot"/>
                </div>
                <div className={styles.content}>
                    <div className={styles.details}>
                        <h2>{(languageCtx.language) === LanguageMap.get(LANGUAGE_LIST.ENGLISH)?DATA_LIST.name.us:DATA_LIST.name.ch}<br></br><span>{(languageCtx.language) === LanguageMap.get(LANGUAGE_LIST.ENGLISH)?DATA_LIST.position.us:DATA_LIST.position.ch}</span></h2>
                        {/* <div className={styles.data}>
                        <h3>{(languageCtx.language) === LanguageMap.get(LANGUAGE_LIST.ENGLISH)?DATA_LIST.data.p_us:DATA_LIST.data.p_ch} :<span>  0981983510</span></h3>
                        <h3>{(languageCtx.language) === LanguageMap.get(LANGUAGE_LIST.ENGLISH)?DATA_LIST.data.e_us:DATA_LIST.data.e_ch} :<span>  wet159@gmail.com &emsp; </span></h3>
                            <h3>{(languageCtx.language) === LanguageMap.get(LANGUAGE_LIST.ENGLISH)?DATA_LIST.data.ed_us:DATA_LIST.data.ed_ch} :<span>  {(languageCtx.language) === LanguageMap.get(LANGUAGE_LIST.ENGLISH)?DATA_LIST.data.md_us:DATA_LIST.data.md_ch}</span></h3>
                            <h3>Skills :<span>  HTML,Javascript,C#,Python</span></h3>
                        </div> */}
                        <div className={styles.data}>
                            <h3>{(languageCtx.language) === LanguageMap.get(LANGUAGE_LIST.ENGLISH)?DATA_LIST.data.p_us:DATA_LIST.data.p_ch} :<span>  0981983510</span></h3>
                            <h3>{(languageCtx.language) === LanguageMap.get(LANGUAGE_LIST.ENGLISH)?DATA_LIST.data.e_us:DATA_LIST.data.e_ch} :<span>  wet159@gmail.com &emsp;</span></h3>
                            <h3>{(languageCtx.language) === LanguageMap.get(LANGUAGE_LIST.ENGLISH)?DATA_LIST.data.ed_us:DATA_LIST.data.ed_ch} :<span>  {(languageCtx.language) === LanguageMap.get(LANGUAGE_LIST.ENGLISH)?DATA_LIST.data.md_us:DATA_LIST.data.md_ch}</span></h3>
                            <h3>{(languageCtx.language) === LanguageMap.get(LANGUAGE_LIST.ENGLISH)?DATA_LIST.data.s_us:DATA_LIST.data.s_ch} :<span>  HTML,Javascript,C#,Python &emsp;</span></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}