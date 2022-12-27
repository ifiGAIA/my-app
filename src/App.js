// import 'bootstrap/dist/css/bootstrap.css'
import Header from "./components/Header.js";
import React,{useState, useEffect} from "react";
import Personalinfo from "./components/Personalinfo/Personalinfo";
import Footer from "./components/Footer";
import LanguageContext from "./components/LanguageContext/LanguageContext.js";
import { LanguageMap, LANGUAGE_LIST } from './components/Language/Language';

function App() {
	const [language, setLanguage] = useState(LanguageMap.get(LANGUAGE_LIST.ENGLISH));
	const [dogImage, setDogImage] = useState(null);
	const onChangeLanguage = (value) => {
		setLanguage(value);
	}
	useEffect(() =>{
		fetch("https://dog.ceo/api/breeds/image/random").then(r => r.json()).then(data => setDogImage(data.message))
	},[])
	return (
    // <React.Fragment>
	// 		<Header />
	// 		<main>
	// 			<Personalinfo />
	// 		</main>
	// 		<footer>
	// 			<Footer />
	// 		</footer>
	// </React.Fragment>
	<LanguageContext.Provider value={{
		language: language
	}}>
		<Header onChangeLanguage={onChangeLanguage}/>
			<main>
				<Personalinfo />
			</main>
			{/* <div>{<img src={dogImage}></img>}</div> */}
			<footer>
				<Footer />
			</footer>
	</LanguageContext.Provider>
  );
}

export default App;
