import styles from './Footer.module.css';
import LanguageContext from "../components/LanguageContext/LanguageContext";
import { LanguageMap, LANGUAGE_LIST } from "../components/Language/Language";
import { useContext } from "react";

const FOOTER_LIST = {
    footer:{
        us: "More About Me",
        ch: "更多關於我"
    },
}


export default function Footer(){
    const languageCtx = useContext(LanguageContext);
    return(
        <div className={styles.version}>
            <div className={styles.sign}>{(languageCtx.language === LanguageMap.get(LANGUAGE_LIST.ENGLISH)?FOOTER_LIST.footer.us:FOOTER_LIST.footer.ch)}</div>
            <div className={styles.triangle}></div>
            <a href='https://www.linkedin.com/in/%E4%BB%A5%E6%A8%82-%E9%99%B3-ba99451a4/'><ion-icon name="logo-linkedin"></ion-icon></a>
            <a href='https://github.com/ifiGAIA?tab=repositories'><ion-icon name="logo-github"></ion-icon></a>
            <a href='https://www.instagram.com/if_i_gaia/'><ion-icon name="logo-instagram"></ion-icon></a>
            <a href='https://www.facebook.com/profile.php?id=100000345072592'><ion-icon name="logo-facebook"></ion-icon></a>
		</div>
        
    );
}