import logo from '../logo.svg';
import './ProducList.css';
import Mugshotimg from '../img/Mug_shot3.jpg';
export default function ProductList(){
    return(
        // <div className="row">
        //     <section className="col-md-6 col-lg-4 pt-4 p-md-3 p-lg-4"><img src={logo} className="App-logo" alt="logo" /></section>
        //     <section className="col-md-6 col-lg-4 pt-4 p-md-3 p-lg-4"><img src={logo} className="App-logo" alt="logo" /></section>
        //     <section className="col-md-6 col-lg-4 pt-4 p-md-3 p-lg-4"><img src={logo} className="App-logo" alt="logo" /></section>
        //     <section className="col-md-6 col-lg-4 pt-4 p-md-3 p-lg-4"><img src={logo} className="App-logo" alt="logo" /></section>
        //     <section className="col-md-6 col-lg-4 pt-4 p-md-3 p-lg-4"><img src={logo} className="App-logo" alt="logo" /></section>
        //     <section className="col-md-6 col-lg-4 pt-4 p-md-3 p-lg-4"><img src={logo} className="App-logo" alt="logo" /></section>
        // </div>
        <div className="card" id="card">
        <div className="imgBx">
            <img src={Mugshotimg}/>
        </div>
        <div className="content">
            <div className="details">
                <h2>Ben Chen<br></br><span>Game Engineer</span></h2>
                <div className="data">
                    <h3>Phone :<span>  0981983510</span></h3>
                    <h3>E-mail :<span>  wet159@gmail.com</span></h3>
                    <h3>Education :<span>  碩士畢業</span></h3>
                    <h3>Skills :<span>  HTML,Javascript,C#,Python</span></h3>
                </div>
            </div>
        </div>
    </div>
    );
}