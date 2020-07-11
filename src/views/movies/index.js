import React from 'react'
import './style.css'
import Data from '../../database/data'
import { Link } from 'react-router-dom'

import HeaderBar from '../../components/HeaderBar'

function Movies({match}){

    const item = Data.videos.find(x => x.id == match.params.id)

    return(
        <div>
            <HeaderBar/>
            <div className="container-movies">
                <div className="content-movies">
                    <div key={item.id} className="section">
                        <video type="video/mp4" preload="auto" autoPlay controls>
                            <source src={item.video}/>
                        </video>
                        <div className="title">
                            <div><span>{item.title}</span></div>
                            <div className="views-date">
                                <strong>{item.views}-</strong>
                                <strong>{item.date}</strong>
                            </div>
                        </div>
                            <span id="divisor" />
                        <div  className="images-avatar">
                            <img src={item.avatar} alt="avatar" />
                            <label>{item.channel}</label>
                        </div>   
                    </div>
                    <div className="aside">
                        {Data.videos.map(items =>  
                        <div key={items.id} className="contentBar"> 
                            <div>
                               <Link to={`/videos/${items.id}`}><img src={items.thumb} /></Link>
                            </div>
                            <div className="content-list">
                                <div>
                                   <Link to={`/videos/${items.id}`}>{items.title}</Link> 
                                </div>
                                <div className="label-channel">      
                                    <label>{items.channel}</label>
                                    <div>
                                        <span>{items.views}-</span>
                                        <span>{items.date}</span>
                                    </div>
                                </div>        
                            </div> 
                        </div> 
                        )}   
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Movies