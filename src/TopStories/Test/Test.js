import React from 'react';
import news from '../news';
import './Test.css';

function Test() {
    var x= news[2].urlToImage;
    var y=news[2].title;
    return (

<div>
<h1>{x}</h1>

        <h1>{y}</h1> 
        <div className='testdiv' style={{ 
            backgroundImage: "url(" + x + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}>
          
           
           <h1>hi</h1>
           
           <div >new div</div>
         
            {/*{news.map((newsdata, index)=>{
                    return <h1>{newsdata.author}</h1>
            })}*/}
        </div>

        </div>
    )
}

export default Test;
