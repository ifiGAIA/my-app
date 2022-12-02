import Header from "../components/Header";
import React from "react";
// import ProductList from "../components/ProducList";
import Personalinfo from "../components/Personalinfo";
import Footer from "../components/Footer";

function Home(){
    return(
        // <div className="bgc">
        //     <div className="container">
        //         <Header/>
        //         <div className="containerPF">
        //         <Personalinfo/>
        //         <Footer/>
        //         </div>
        //     </div>
        // </div>
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

export default Home;