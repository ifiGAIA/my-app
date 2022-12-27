import React ,{useContext}from "react";
import LanguageContext from "./LanguageContext/LanguageContext";
import styles from "./Header.module.css";
import { LanguageMap } from "./Language/Language";


const Header = (props) =>{
    const languageCtx = useContext(LanguageContext);

    const LanguageOptions = () =>{
        const languageArr = new Array(...LanguageMap.values());
        return(
            <div>
                <select onChange={onChangeLanguage}>
                    {languageArr.map(element => { return <option value={element} key={element}> {element} </option>; })}
                </select>
            </div>
        )
    }
    
    const onChangeLanguage = (event) =>{
        props.onChangeLanguage(event.target.value);
        languageCtx.language = event.target.value;
    }

    return(
        <React.Fragment>
            <header className={styles.header}>
                <h1>Benjamin's CV</h1>
                {LanguageOptions()}
            </header>
        </React.Fragment>
    );
}

export default Header;