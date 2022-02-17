import React from "react";
import './Urllist.css'

const VimeoLink = ({deleteElem, item}) => {
    const handleDelete = () => {
        deleteElem(item.refId)
        }
        const cardStyle = {
            textAlign: 'left',
            margin: "10px",
            fontSize: "12px",
            textDecoration: "none"
        
        }

    return (
        <div className="url-card"
        style={cardStyle}> 
       
       
        <a href={item.url} >
        <h2>{item.title}</h2>
        <img src={item.thumbnail_url} />
        <div className="url-card-div">
        <p>url de la video: {item.url}</p>
        <p>Auteur : {item.author_name}</p>
        <p>date d'ajout sur vimeo : {item.upload_date}</p>
        <p>date d'ajout sur l'application : {item.formatUpload}</p>
        <p>durée : {item.duration}</p>
        </div>
        </a>
         <button style={{backgroundColor: "red"}} onClick={handleDelete}
         >Delete bookmark</button>
         </div>
    )
}

export default VimeoLink;
