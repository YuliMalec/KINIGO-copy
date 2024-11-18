import { FC} from "react";
import './../../scss/_style.scss'
import Header from "../UI/header/Header";
import Menu from "../UI/menu/Menu";
import Footer from "../UI/footer/Footer";
import MeinContent from "../UI/mainContent/MeinContent";
import Modal from './../UI/modal/Modal'
const Home:FC = () =>{

   
    return ( 
    
<div className="wrapper">
    <Header/> 
<div className="wrapper__container">
   
    
    <Menu/>
 
 <MeinContent/>
    <Footer/>
    </div>	
</div>

     );
}

export default Home;