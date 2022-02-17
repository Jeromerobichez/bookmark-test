import React from "react";
import './UrlForm.css'

const UrlForm = ({handleSubmit, handleChange, input}) => {

    return (
        <div className='url-form'>
            <h2>Please Enter here the URL you want to bookmark :</h2>
     <form
     onSubmit={handleSubmit}>
     <input type="text"
                  name="name"
                  value={input}
                  onChange={handleChange}
                 />
     </form>
     
     <input type="submit"
      value="Envoyer"
       id="submit-button"
      disabled={input === '' ? true : false}
      onClick={handleSubmit} /> 
</div>
    )
}
export default UrlForm;
