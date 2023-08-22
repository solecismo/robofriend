import React from "react";


const Searchbox = ({searchfiled, searchChange}) =>{
    return(
        <div>
            <input type="search" onChange={searchChange} />
        </div>
    )
}

export default Searchbox;