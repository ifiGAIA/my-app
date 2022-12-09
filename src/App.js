// import 'bootstrap/dist/css/bootstrap.css'
import Header from "./components/Header.js";
import React from "react";
import Personalinfo from "./components/Personalinfo/Personalinfo";
import Footer from "./components/Footer";


function App() {
  return (
    <React.Fragment>
			<Header />
			<main>
				<Personalinfo />
			</main>
			<footer>
				<Footer />
			</footer>
	</React.Fragment>
  );
}

export default App;
