import { createContext, useEffect, useState } from "react";
import axios from 'axios'
 

 export const StoreContext = createContext(null);

 const StoreContextProvider = (props)=>{
    const url = "http://localhost:4000";
  
     const [cardItems, setCardItems] = useState({});
      // for storing user token that is generated from server side
     const [token, setToken] = useState("");
     const [food_list, setFoodlist] = useState([]);

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

       // fetch food list function
       const fetchFoodList = async () => {
         try {
           const response = await axios.get(`${url}/api/food/foodlist`);
           if (response.data.success) {
             setFoodlist(response.data.data);
           }
         } catch (error) {
           console.log("Error", error);
         }
       };

       useEffect(()=>{
          async function loadData() {
           await  fetchFoodList();
             if(localStorage.getItem("token")){
                setToken(localStorage.getItem("token"));
             }
            }
            loadData();
       },[])

    const contextValue = {
            food_list,
            cardItems,
            setCardItems,
            addToCart,
            removeFromCart,
            getTotalCartAmount,
            url,
            token,
            setToken
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
 }

 export default StoreContextProvider;