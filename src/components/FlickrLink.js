import react from "react";
import './Urllist.css'

const FlickrLink = ({deleteElem, item}) => {
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
        <p>url de la photo: {item.url}</p>
        <p>Auteur : {item.author_name}</p>
        <p>date d'ajout sur Flickr : {item.upload_date || "pas de date dans l'object reçu"} </p>
        <p>date d'ajout sur l'application : {item.formatUpload}</p>
        <p>largeur x hauteur : {item.width} x {item.height}</p>
        </div>
        </a>
        
         <button
         style={{backgroundColor: "red"}}
          onClick={handleDelete}
         >Delete the bookmark</button>
            </div>
    )
}
export default FlickrLink;
