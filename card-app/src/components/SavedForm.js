import React, { useEffect } from "react";

export default function SavedForm (props){

   // const[data,getdata]=React.useState([])

   // console.log(props.form);
    /*useEffect(()=>{
      localStorage.setItem('lists',JSON.stringify(data))
    },[data])
    


useEffect(()=>{
  let list=localStorage.getItem('lists');
  console.log(list);

  if(list){
    return JSON.parse(localStorage.getItem('lists'));
  }
  
},[])
*/
    return(
        <div className="savedform-div">
           <div>
           <button onClick={()=>{
               props.onSelect(props.id)
           }
           }>X</button>
               <p>
                Card Number: {props.form.cardnumber}
                <br/>
                Card Name: {props.form.cardname}
                <br/>
                Expiry Date: {props.form.expiry}
                <br/>
               </p>
               <br/>
           </div>           
        </div>
    )
}
