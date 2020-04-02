import React,{useState} from 'react';
import './PagesStyles/CheckOutPage.css'



const CheckOutPage=()=>{
    let localData=localStorage.getItem('Cart');
    const items= localData? JSON.parse(localData):[];
    const [FormInfo, setFormInfo] = useState({name:"",email:"",phone:"",address:"", comments:""})
    const [CardInfoVisability, setCardInfoVisability] = useState(false)
    const [CardInfo, setCardInfo] = useState({//it's an object bacause I might add the date component later
        creditCardNum:0,      
    })

    const arrsum= items.map(item=>(item.price));
    const sum= arrsum.reduce((acc,current)=>{return acc+current});

    const updateFormInfo=e=>{
        setFormInfo({...FormInfo, [e.target.name]:e.target.value});
    }
    const updateCardInfo=e=>{
        setCardInfo({...CardInfo, [e.target.name]:e.target.value})
    }


 
    return(
        <div>
       <div className="submit">
           <form className="submit-form">
               <label>Full Name:</label>
               <input id="full-name" name="name" onChange={updateFormInfo} value={FormInfo.name}></input>
               <label>Email:</label>
               <input id="email" name="email" onChange={updateFormInfo} value={FormInfo.email} ></input>
               <label>Phone Number:</label>
               <input id="phone" name="phone" onChange={updateFormInfo} value={FormInfo.phone} ></input>
               <label>Full Address:</label>
               <input id="address" name="address"onChange={updateFormInfo} value={FormInfo.address}></input>
               <label>Comments:</label>
               <textarea id="comments" name="comments" onChange={updateFormInfo} value={FormInfo.comments}></textarea>
           </form>

           <div className="cart-items-to-submit">
                 {items.map (item=>(
                     <div style={{display:"flex-box", width:"100%"}} key={item.id} >
                        <p style={{float:"left"}}>{item.name}</p>
                        <p style={{float:"right"}}>{item.price}$</p>
                        <br/>
                     </div>
            
           ))}
                <br/>
                 <p style={{float:"left"}}>Total</p>
                 <p style={{float:"right"}}>{sum}$</p><br/>
                  <div className="payment-method">
                       <input type="radio" id="cash" name="method" onClick={(e)=>setCardInfoVisability(false)} value="cash"/>
                       <label>Cash(will cost additional 10$)</label><br/>
                    <input type="radio" id="credit-card" onClick={(e)=>setCardInfoVisability(true)} name="method" value="credit-card"/>
                       <label>Credit Card</label>
                 </div>
                 <br/>
                 <div className="card-info" style={{display: CardInfoVisability? "block":"none"}}>
                     <h3>Payment info</h3>
                     <input type="radio" id="visa-card" name="card" value="visa-card"/>
                     <label>Visa Card</label><br/>
                     <input type="radio" id="master-card" name="card"  value="master-card"/>
                     <label>Master Card</label><br/>
                     <label>Credit Card Number:</label>
                     <input type="text" name="creditCardNum" onChange={updateCardInfo}  id="credit-card-number"/><br/>
                     <label>Expiration Date:</label> <br/>
                     <input type="date" id="exp-date"></input>
                 </div>
           </div>
       </div>
       
       <a href="/order-placed"><button id="place-your-order-btn" >Place your order</button></a>
       </div>
      
    )
}

export default CheckOutPage;
