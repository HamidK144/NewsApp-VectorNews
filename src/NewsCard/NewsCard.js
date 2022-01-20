import React from 'react';
import './NewsCard.css';


class NewsCard extends React.Component {

    constructor(props) {
    super(props);

    this.state = {
    };
}


componentDidMount(){
       
}
    render() {

        var data=this.props.data;

        
         
        return (
        <div className='NewsCard-box'>

            <div className='News-text'>
                    <a href={data["url"]} target="_blank" className='Newsheader-link'>
                    <h3 style={{marginBottom:"0px", color:"rgb(68, 84, 110)"}}> {data["title"]} </h3>
                    </a>
                <a href='' className='Subtext'>{data["byline"]} <span>.</span> {data["published_date"]} <i style={{paddingLeft:"10px"}}class="fas fa-share-alt"></i></a>
            </div>
            
            <div className='news-image' style={{backgroundImage:"url("+(data["multimedia"] ? data["multimedia"][0]["url"] :"")+")"}}></div>

        </div>)
    }
}

export default NewsCard;