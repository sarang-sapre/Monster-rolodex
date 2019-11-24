import React from 'react';
import './search-box.styles.css'


export const SearchBox = ({placeholder,handelchange}) =>{

return(

    <input className= 'search'  type='Search' 
    placeholder={placeholder}
    onChange={handelchange}
    
    />
)

}
