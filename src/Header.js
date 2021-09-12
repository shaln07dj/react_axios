import React, {Component} from "react";


import useStyles from './styles.jsx';

const Header=()=>{

   const classes = useStyles();
         
    return(
      <div>

        <div className={classes. header_content}>
              <h2 style={{color:"#fff",textAlign:"center",paddingTop:"30px"}}>Digikull Students</h2>
      
      </div>
      </div>
   )

}

export default Header;