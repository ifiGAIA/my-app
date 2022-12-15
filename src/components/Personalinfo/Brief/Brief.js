import styles from "./Brief.module.css";
import LanguageContext from "../../LanguageContext/LanguageContext";
import { LanguageMap, LANGUAGE_LIST } from "../../Language/Language";
import { useContext } from "react";

const BRIEF_LIST = {
    title:{
        us: "My brief",
        ch: "我的簡介"
    },
    content:{
        us: "I am a graduate student majoring in digital design. I have participated in front-end web design, Unity game design, iOS APP design and other projects during my studies.I am currently learning React by myself.",
        ch: "我是一名剛畢業的碩士生，數位設計專業，在學期間參與過前端網頁設計、Unity 遊戲設計、iOS APP 設計等專案，目前正在自學 React 等前端技術。"
    }
}


export default function Brief(){
    const languageCtx = useContext(LanguageContext);
    return(
        // <div className={styles.brief}>
        //         <h2>My brief</h2>
        //         <p>
        //             我是一名剛畢業的碩士生，數位設計專業，在學期間參與過前端網頁設計、Unity 遊戲設計、iOS APP 設計等專案，目前正在自學 React 等前端技術。
        //         </p>
        // </div>
        <div className={styles.brief}>
            <h2>{(languageCtx.language) === LanguageMap.get(LANGUAGE_LIST.ENGLISH)?BRIEF_LIST.title.us:BRIEF_LIST.title.ch}</h2>
            <p>
                {(languageCtx.language) === LanguageMap.get(LANGUAGE_LIST.ENGLISH)?BRIEF_LIST.content.us:BRIEF_LIST.content.ch}
            </p>
        </div>
    );
}