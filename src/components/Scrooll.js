import React from "react";

const Scrooll=(props)=>{
    return(
        <div style={{overflowY:'scroll'}}>
            {props.children}
        </div>
    );

};

export default Scrooll;