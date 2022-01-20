import React from 'react';
import './TopStories.css';
import NewsCard from '../NewsCard/NewsCard';
import SideBar from '../SideBar/SideBar';


class TopStories extends React.Component {

    constructor(props) {
    super(props);

    this.state = {
        news:null,
        isDataLoading: true,
        errorMessage: null

    };
}

componentDidMount(){

    var newspromise=fetch('https://api.nytimes.com/svc/topstories/v2/world.json?api-key=XIVnWlOJN3MbihJ6u5Zb7vxf6EjIi8ib');

    newspromise.then(Response=>{
                if(!Response.ok){
                    throw Error('Sorry Could not fetch the Data');
                }
            var bodypromise=Response.json();
            bodypromise.then(data=>{

                this.setState({
                    news:data["results"],
                    isDataLoading:false,
                    errorMessage:null
                    
                })
        
            })
    }).catch((err)=>{
        this.setState({errorMessage:true,
                       isDataLoading:false});
    
    })
}

    render() {


        return (

            
        <div className='TopStories-Container'>

            <div className='Feed-container'>
            <div className='Feed-heading'><h2  style={{paddingLeft:"10px", color:"rgb(68, 84, 110)"}}>Headlines</h2> </div> 

                {this.state.isDataLoading && <div className='Error-Block'><h2 style={{marginBottom:"4px"}} >Loading Data...</h2>
                <img style={{width:"130px", height:"auto", marginTop:"4px"}} src={require('../NotExistMsg/pngwing.com.png').default} /></div>}

                {this.state.errorMessage && <div className='Error-Block'><h2>Network Error</h2>
                    <img style={{width:"250px", height:"auto"}} src={require('../NotExistMsg/errorpic.png').default} /></div>}
                    
                {this.state.news&&this.state.news.map((item)=>{
                    return  <NewsCard key={item["url"]} data={item}/>
                })

                }
            
        
            </div>

         


        </div>)
    }
}

export default TopStories;


//NYTIMES API DETAILS:

// key:   XIVnWlOJN3MbihJ6u5Zb7vxf6EjIi8ib

//api: https://api.nytimes.com/svc/topstories/v2/science.json?api-key=XIVnWlOJN3MbihJ6u5Zb7vxf6EjIi8ib