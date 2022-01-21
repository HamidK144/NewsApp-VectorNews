
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

                <a href="https://hamidstudio.com/" target="_blank" rel="noopener noreferrer"
                style={{fontSize:"14px", fontWeight:"500", color:"rgb(68, 84, 110)", textDecoration: "none"}}>DEVELOPED BY HAMID</a>
                <img src={require('./Linkind2.png').default} alt="" className="user-image"/>
                
                </div>

            </div>
        )
    }
}

export default Header;