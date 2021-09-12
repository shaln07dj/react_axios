import React, {Component} from "react";

import { useEffect,useState} from 'react';
import axios from 'axios';


import useStyles from './styles.jsx';

export default function Home(){
    const [info,setInfo]=useState([])
    const [change,setChange]=useState("");
    const [update,setUpdate]=useState("")

    const classes = useStyles();

    useEffect(()=>{
        const id=1;

        
        axios.get(`https://jsonplaceholder.typicode.com/users/`).then(res=>{
           setInfo(res.data)
        })
    },[])
    console.log(info)

    const handleChange=(event)=>{
        setChange(event.target.value);
    }


   
    console.log(update)


    const handle=()=>{
        setUpdate(change)
        
    }


    useEffect(()=>{
                    axios.post('https://jsonplaceholder.typicode.com/users' ,{
                        
                            name: update,
                           
                          }, 
                    ).then(res=>
                     console.log(res.data)
                    )


    },[update])
   
   return(
      
    <div  >

    <div className={classes.contents}><h2>
       
    Hello User</h2>
    </div>

      
    <div className={classes.contents}>
    <input name="user" onChange={handleChange} /><button onClick={handle}>Add</button> 

    
</div>
 <div className={classes.contents}>
<div style={{marginTop:"0px",marginLeft:"5%",marginRight:"5%"}}>
{info.map(ele=> <div key={ele.id} className={classes.home_content}>
      { ele.name}

    </div>

    )}
    </div>
 


 </div>
 


     </div>

   )
}