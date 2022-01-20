import React from 'react';
import './SideBar.css';
import news from './news';
import Sidebardata from '../Sidebardata/Sidebardata';



class SideBar extends React.Component {
constructor(props) {
    super(props);

    this.state = {

        newsfetch:[],
        isDataLoading: true,
        errorMessage: null
    };
}



componentDidMount(){

    var newspromise=fetch('https://api.nytimes.com/svc/topstories/v2/science.json?api-key=XIVnWlOJN3MbihJ6u5Zb7vxf6EjIi8ib');

    newspromise.then(Response=>{
                if(!Response.ok){
                    throw Error('Sorry Could not fetch the Data');
                }
            var bodypromise=Response.json();
            bodypromise.then(data=>{
    
                this.setState({
                      newsfetch:data.results,
                    isDataLoading:false,
                    errorMessage:null  })
        
            })
    }).catch((err)=>{
        this.setState({errorMessage:true,
                       isDataLoading:false});
    
    })
}





    render() {

        return (
        <div className='SideBar-container'>

          <div className='Sidebar-heading'><h2  style={{paddingLeft:"20px", color:"rgb(68, 84, 110)"}}>Also See</h2> </div> 
           
          {this.state.newsfetch.slice(2, 15).map((item,index)=> {
                    return  <Sidebardata key={item["url"]} data={item}/>
                })

                }
   

        </div>)
    }

}

export default SideBar;