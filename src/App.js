// import 'bootstrap/dist/css/bootstrap.css'
import Header from "./components/Header.js";
import React,{useState} from "react";
import Personalinfo from "./components/Personalinfo/Personalinfo";
import Footer from "./components/Footer";
import LanguageContext from "./components/LanguageContext/LanguageContext.js";
import { LanguageMap, LANGUAGE_LIST } from './components/Language/Language';

function App() {
	const [language, setLanguage] = useState(LanguageMap.get(LANGUAGE_LIST.ENGLISH));

	const onChangeLanguage = (value) => {
		setLanguage(value);
	}

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
			<footer>
				<Footer />
			</footer>
	</LanguageContext.Provider>
  );
}

export default App;
