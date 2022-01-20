
import react from "react";
import './Header.css';
import {NavLink} from 'react-router-dom';

class Header extends react.Component{

    constructor(props){
        super(props);
    }

    handleSubmit=(e)=>{
        e.preventDefault();

    }

    render(){

        return(
            <div className="app-header">
                
                <div className="header-left"> <NavLink to={'/topstories'} className="newsicon-link"> 
                <img style={{height:"35px", width:"auto", marginRight:"8px"}}src={require('./vector logo.png').default}/>
            
                    </NavLink>
                </div>


            


                <div className="header-right">  

                <h3 style={{fontSize:"14px", fontWeight:"500", color:"rgb(68, 84, 110)"}}>DEVELOPED BY HAMID</h3>
                <img src={require('./Linkind2.png').default} alt="" className="user-image"/>
                
                </div>

            </div>
        )
    }
}

export default Header;