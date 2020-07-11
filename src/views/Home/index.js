import React from 'react';
import './style.css'
import Data from '../../database/data'
import {Link} from 'react-router-dom'
import BarraLateral from '../../components/BarraLateral'
import HeaderBar from '../../components/HeaderBar'


function App() {
    
  return ( 
    <div>
      <HeaderBar/>
        <div className="container">
            <h5>Recomendados</h5>
           <div className="content">
           {Data.videos.map(item => 
                <div key={item.id} className="content-info">
                    <Link to={`/videos/${item.id}`}><img src={item.thumb} alt="thumbnail"/> </Link>    
                    <div className="image-avatar">
                        <img src={item.avatar} alt="avatar" />
                        <span>{item.title}</span>
                    </div>
                        <label>{item.channel}</label>
                    <div className="views-data">
                        <span>{item.views}-</span>
                        <strong>{item.date}</strong>
                    </div>
                </div>
            )}
           </div>
        </div> 
      <BarraLateral/>
    </div> 
  )
}

export default App;