import Header from "../components/Header";
import ProductList from "../components/ProducList";
import Footer from "../components/Footer";

function Home(){
    return(
        <div className="bgc">
            <div className="container">
                <Header
                tittle="123"
                slogan="321"
                />
                <ProductList/>
                <Footer/>
            </div>
        </div>
    );
}

export default Home;