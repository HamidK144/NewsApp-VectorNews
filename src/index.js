import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './Header/Header';
import NavigationBar from './NavigationBar/NavigationBar';
import TopStories from './TopStories/TopStories';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Topics from './Topics/Topics';
import SideBar from './SideBar/SideBar';
import NotExistMsg from './NotExistMsg/NotExistMsg';
import Test from './TopStories/Test/Test';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
   
      <div className="App-Container">

          <div className="Header-bar"> <Header/> </div>

                    <div className='App-content'>
                

                        <NavigationBar/>   
                  
                            
                            <Routes>
                                <Route path="/topstories" element={<TopStories/>}/>
                                <Route path="/" element={<TopStories/>}/>
                                <Route path="*" element={<NotExistMsg/>}/>
                                <Route path="/topics/:name" element={<Topics/>}/>
                              
                            </Routes> 
                          
          
                  
                        <SideBar/>
                           
                    
                    </div>

          
      </div>
     
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
