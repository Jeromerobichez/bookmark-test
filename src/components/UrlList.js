import React from "react";
import './Urllist.css'
import VimeoLink from "./VimeoLink";
import FlickrLink from "./FlickrLink";

const UrlList = ({bookMarksArray, deleteElem}) => {
    

    return (
        <div className='bookmarks-list'>
  <h2>list of bookmarks</h2>

   {bookMarksArray.map((item, i) =>
   item.url.includes('https://vimeo') ? 

<VimeoLink deleteElem={deleteElem} item={item} />

     :
<FlickrLink deleteElem={deleteElem} item={item}/>
    

   )}
  

</div>
    )
}
export default UrlList;
