import React from 'react';
import './NavigationBar.css';
import {NavLink} from 'react-router-dom';


class NavigationBar extends React.Component {
constructor(props) {
    super(props);

    this.state = {
    };
}


    render() {

        return( 
        <div className='Navigation-Components'>

    
            <NavLink to={'/topstories'} className='Navigation-links'>
                <i style={{paddingRight:"10px"}}class="fas nav fa-bolt"></i> <div className='nav-text'>Top Stories</div> </NavLink> 


                <NavLink to={'/topics/business'} className='Navigation-links'><i style={{paddingRight:"10px"}}class="fas nav fa-chart-bar"></i> <div className='nav-text'>Business</div>
            </NavLink>

            <NavLink to={'/topics/sports'} className='Navigation-links'><i style={{paddingRight:"10px"}}class="fas nav fa-running"></i> <div className='nav-text'>Sports</div></NavLink> 

            <NavLink to={'/topics/technology'} className='Navigation-links'><i style={{paddingRight:"10px"}}class="fas nav fa-mobile"></i> <div className='nav-text'>Technology</div>
            </NavLink> 

            <NavLink to={'/topics/science'} className='Navigation-links'><i style={{paddingRight:"10px"}}class="fas nav fa-flask"></i> <div className='nav-text'>Science</div></NavLink>
           

            <NavLink to={'/topics/health'} className='Navigation-links'><i style={{paddingRight:"10px"}}class="fas nav fa-heartbeat"></i> <div className='nav-text'>Health</div></NavLink>

            <NavLink to={'/topics/food'} className='Navigation-links'><i style={{paddingRight:"10px"}}class="fas nav fa-utensils"></i> <div className='nav-text'>Food</div></NavLink>

    
      

         {/* 
            <NavLink to={'/topics/Covid19'} className='Navigation-links'><i style={{paddingRight:"10px"}}class="fas fa-virus"></i> Covid 19</NavLink> */}
        
        </div>)
        
       
        
    }
}

export default NavigationBar;
