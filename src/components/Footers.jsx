import React from 'react';




function Footers(){
     
const today = new Date();
const year = today.getFullYear();
    return(
        <footer><p>Copyright <span>	&copy; {year} </span></p></footer>
    );
}

export default Footers;