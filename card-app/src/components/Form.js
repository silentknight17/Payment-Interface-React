import React, { Component } from 'react';
import {useEffect,useState} from 'react';
import SavedForm from './SavedForm';


export default function Form(){

      //const[item,setitem]=React.useState(getLocalItems())

      const [formData,setformData]=React.useState({
        cardnumber:"",
        cardname:"",
        expiry:"",
        cvv:""
      
      });



     /* useEffect(()=>{
        localStorage.setItem('lists',JSON.stringify(formData));
      },[formData])

      useEffect(()=>{
        const items=JSON.parse(localStorage.getItem('lists'));
        if(items){
          setformData(items);
        }
      },[]);

     function checkEmptyOrNull(item) {
        return item != undefined && item != null && item != "";
      }*/
      
  /*const [formD, setformD] = useState(() => {
  const savedform = localStorage.getItem("sform");
  if (savedform) {
    return JSON.parse(savedform);
  } else {
    return [];
  }
});
  useEffect(() => {
  localStorage.setItem("sform", JSON.stringify(formD));
}, [formD]);

*/
       
      //Function for local storage and then displayin on the screen

      /*React.useEffect(()=>{
        localStorage.setItem('form',JSON.stringify(formData))
      },[formData])
*/
      



      var isValid=true;
      const [iscardType,setisCardType]= React.useState("")
      var cardType=""
      
      const[numValid,setnumValid]=React.useState(false);
      const[expiryValid,setexpiryValid]=React.useState(false);
      const [saveValid,setsaveValid]=React.useState(false);


      function handleChangeCard(event)
      {       
        //console.log(event.target.value);
        var cardNum=event.target.value
        const {name,value}=event.target
        setformData(prev=>({
            ...prev,
            [name]:value
        }))
        var valid=false;
       var validCard=0;
       var re = new RegExp("^(4[0-9]{12}(?:[0-9]{3})?)");
        
        var maestro = new RegExp("^(?:5[0678][0-9][0-9]|6304|6390|67[0-9][0-9])[0-9]{8,15}");
        if (cardNum == "5123456789012346") {
          validCard = 1;
          cardType = "master";
        } else if (cardNum.match(re) != null) {
          validCard = 1;
          cardType = "visa";
        } else if (/^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/.test(cardNum)) {
          validCard = 1;
          cardType = "master";
        } else if (cardNum.match(maestro) != null) {
          validCard = 1;
          cardType = "maestro";
        } else {
          re = new RegExp("^3[47][0-9]{13}");
          if (cardNum.match(re) != null) {
            validCard = 1;
            cardType = "amex";
          }
      }
      
      if(cardType=="amex"&&cardNum.length==15)
      valid=true
      else if((cardType=="visa"||cardType=="master"||cardType=="maestro")&&cardNum.length==16)
      valid=true

      if(valid)
      {
        setisCardType(cardType);
        setnumValid(true);
        
      }
      
      else
      setisCardType("Invalid Card Number");
      
    }


/*const validateCreditCardNewCart = (ccname, ccnum, ccvv, cardType) => {
  let err = {};
  var cardNum = ccnum.trim().replace(/ /g, '');
  var name = ccname.trim();
  var cvvTxt = ccvv.trim();
  
  var validCard = 0;
  err.name = name == "";
  if (cardNum == "" || isNaN(cardNum)) {
    err.number = true;
  } else {

    var re = new RegExp("^(4[0-9]{12}(?:[0-9]{3})?)");
    var maestro = new RegExp("^(?:5[0678][0-9][0-9]|6304|6390|67[0-9][0-9])[0-9]{8,15}");
    if (cardNum == "5123456789012346") {
      validCard = 1;
      cardType = "master";
    } else if (cardNum.match(re) != null) {
      validCard = 1;
      cardType = "visa";
    } else if (/^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/.test(cardNum)) {
      validCard = 1;
      cardType = "master";
    } else if (cardNum.match(maestro) != null) {
      validCard = 1;
      cardType = "maestro";
    } else {
      re = new RegExp("^3[47][0-9]{13}");
      if (cardNum.match(re) != null) {
        validCard = 1;
        cardType = "amex";
      }
      // else {
      //   if (payMode === "DR") {
      //     let cardType1 = getCardName();
      //     if (cardType1.length > 0) {
      //       if (cardType1 === "rupay") {
      //         validCard = 1;
      //         cardType = cardType1;
      //       } else if (cardType === "maestro") {
      //         validCard = 1;
      //         cardType = cardType1;
      //       } else {
      //         validCard = 0;
      //       }
      //     }
      //   }
      // }
    }
    err.number = validCard !== 1;
  }

  if ((checkEmptyOrNull(cardType) && cardType != "maestro") && cvvTxt == "") {
    err.cvv = true;
  } else {
    let cvvLength = 3;
    if (cardType == "amex") {
      cvvLength = 4;
    }
    if ((checkEmptyOrNull(cardType) && cardType == "maestro") || cvvTxt.length == cvvLength) {
      err.cvv = isNaN(cvvTxt);
    } else {
      err.cvv = true;
    }
  }
  return err
}
*/

 /*function handleChangeCard(event)
 {
  var cardNum=event.target.value
        const {name,value}=event.target
        setformData(prev=>({
            ...prev,
            [name]:value
        }))
 }
*/
 function handleChange(event){
  //var cardNum=event.target.value
        const {name,value}=event.target
        setformData(prev=>({
            ...prev,
            [name]:value
        }))
 }


    const [ex,setex]=React.useState("");
    function handleMonthChange(event){
      const {name,value}=event.target
        setformData(prev=>({
            ...prev,
            [name]:value
        }))
        
        var expiry_date=event.target.value;
        //console.log(typeof(event.target.value));
        const cmonth = new Date().getMonth();
        var cmonthcorrect=cmonth+1;
        
        //console.log(typeof(cmonthcorrect));
        const cyear = new Date().getUTCFullYear();

       // console.log(typeof(cyear));

       // console.log(cyear)

        //const cdate = new Date().getDate();

        //const cdate = new Date().toLocaleDateString();
           
        //console.log(cdate);

        //Function to extract the month and year from the form data input
        
        var len=expiry_date.length;

        const char='-';

        var index= (expiry_date.indexOf(char));
        
        let year_expiry=expiry_date.substring(0,index);
        let month_expiry=expiry_date.substring(index+1);
        
        //console.log(year_expiry, month_expiry);

        let ye=parseInt(year_expiry);
        let me=parseInt(month_expiry);

        //console.log(ye,me);
        

        var check=true;
        if(ye<cyear||(ye==cyear&&me<=cmonth))
        {
        
          check=false;
        }
        if(check)
        {
          setex("");
          setexpiryValid(true);
          //console.log(expiryValid);
        }
        
        else
        setex("Invalid Date of Expiry");

        //console.log(expiryValid);
        
        
    }

    const [items,setitems]=React.useState(JSON.parse(localStorage.getItem('list'))||[])
    
    
    //NOT WORKING
    
     

        
     


       /* useEffect(()=>{
        let list=localStorage.getItem('lists');
        if(list){
          JSON.parse(localStorage.getItem('lists'));
        }
      },[])
*/


    //Adding data to local storage

    

    const savedata =(event) =>{
       event.preventDefault();
       setitems(olditems=>{
        return[...olditems,formData];
       });
       setformData({
        cardnumber:"",
        cardname:"",
        expiry:"",
        cvv:""
       });
       localStorage.setItem('list',JSON.stringify([...items,formData]));
       
       setexpiryValid(false);
       setnumValid(false);
       setisCardType("");

    };

    //Function to delete the items in the list
    const deleteItem=(id)=>{
      setitems((olditems)=>{
      return olditems.filter((arrEle,index)=>{
        return index!=id;
      })
    })
  }
    
  /*function detectChange(){
    //console.log(numValid);
    console.log(expiryValid);
    if(numValid&&expiryValid)
    {
      setsaveValid(true);
      
    }
    return true;
  }*/
  
  
// To restrict the number of characters in the input, maxLength is used but it does not work with type="number", therefore to solve this we used type="tel" which is same as type="number"
      return (
        <div className="main-div">
        <div className="div1">
        <form className="InputForm">
            
            <label className="l1">
            Card Number:
            <br/>
            <input 
            className="i1"
            type="tel"
            placeholder="Card Number"
            name="cardnumber" 
            maxLength={16}
            value={formData.cardnumber}
            onChange={handleChangeCard}
            />
            </label>
            
            <label>
            Name on Card:
            <br/>
            <input 
            className="i2"
            type="text"
            placeholder="Name on the Card"
            name="cardname"
            value={formData.cardname}
            onChange={handleChange}
            />
            </label>
           
           <label>
           Expiry Date
           <br/>
           <input 
            className="i3"
            type="month"
            placeholder="Expiry Date"
            name="expiry"
            value={formData.expiry}
            onChange={handleMonthChange}
            />
           </label>
            
            <label>
            Enter CVV
            <br/>
            <input
            className="i4" 
            type="password"
            placeholder="Enter CVV"
            name="cvv"
            value={formData.cvv}
            maxLength={3}
            onChange={handleChange}
            />
            </label>
            
           {numValid && expiryValid && <button type="submit" onClick={savedata}>Save</button>}
          
            <p>{iscardType}</p>
            <p>{ex}</p>
            
        </form>
        </div>
       
       <div className="div2" >
       <ol>
        {items.map((it,index)=>{

          return {saveValid} && <SavedForm
            key={index}
            id={index}
           form={it}
            onSelect={deleteItem}
           />
        })}
        </ol>
       </div>
</div>
      )
}

