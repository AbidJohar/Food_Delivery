import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
 

 export const StoreContext = createContext(null);

 const StoreContextProvider = (props)=>{
  
     const [cardItems, setCardItems] = useState({});

        // add to cart function
      const addToCart = (itemid)=>{
        console.log("itemid:",itemid);
        
         if(!cardItems[itemid]){
            setCardItems((prev)=>({...prev, [itemid]:1}))
         } else{
              setCardItems(prev=> ({...prev, [itemid]: prev[itemid]+1}));
         }
        
      }
             // remover from cart function
      const removeFromCart = (itemid)=>{
           setCardItems(prev=> ({...prev, [itemid]:prev[itemid]-1}))
      }
        // getTotalCartAmount function
       const getTotalCartAmount = ()=>{
         let totalAmount = 0;
          for(const item in cardItems){
              let cardInfo = food_list.find((food)=> food._id === item);
                totalAmount += cardInfo.price * cardItems[item];
          }
          return totalAmount;
       }

    const contextValue = {
            food_list,
            cardItems,
            setCardItems,
            addToCart,
            removeFromCart,
            getTotalCartAmount
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
 }

 export default StoreContextProvider;