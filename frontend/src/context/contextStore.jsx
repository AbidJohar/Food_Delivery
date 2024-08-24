import { createContext, useEffect, useState } from "react";
import axios from 'axios'
 

 export const StoreContext = createContext(null);

 const StoreContextProvider = (props)=>{
    const url = "http://localhost:4000";
  
     const [cartItems, setCartItems] = useState({});
      // for storing user token that is generated from server side
     const [token, setToken] = useState("");
     const [food_list, setFoodlist] = useState([]);
     const [search, setSearch] = useState('');

        // add to cart function
      const addToCart = async (itemId)=>{
        
        if(!cartItems[itemId]){
          setCartItems((prev)=>({...prev, [itemId]:1}))
        } else{
          setCartItems(prev=> ({...prev, [itemId]: prev[itemId]+1}));
        }
        if(token){
           console.log("itemid:",itemId);
          console.log("card item data:",cartItems[itemId]);
          await axios.post(url+"/api/cart/add", {itemId},{headers:{token}})
         }
        
      }
             // remove from cart function
      const removeFromCart = async (itemId)=>{
           setCartItems(prev=> ({...prev, [itemId]:prev[itemId]-1}));
           if(token){
             await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}});
           }
      }
        // getTotalCartAmount function
       const getTotalCartAmount = ()=>{
         let totalAmount = 0;
          for(const item in cartItems){
              let cardInfo = food_list.find((food)=> food._id === item);
                totalAmount += cardInfo.price * cartItems[item];
          }
          return totalAmount;
       }

       // fetch food list function
       const fetchFoodList = async () => {
         try {
          console.log("search from context:",search);
          
           const response = await axios.get(`${url}/api/food/foodlist?search=`+search);
           if (response.data.success) {
             setFoodlist(response.data.data);
           }
         } catch (error) {
           console.log("Error", error);
         }
       };

       // load cart data function
        const loadCartData = async (token)=>{
         const response = await axios.post(url+"/api/cart/get", {},{headers:{token}});
               console.log("response :", response);
              setCartItems(response.data.cartData);
        }

       useEffect(()=>{
          async function loadData() {
           await  fetchFoodList();
             if(localStorage.getItem("token")){
                setToken(localStorage.getItem("token"));
               await loadCartData(localStorage.getItem("token"));
             }
            }
            loadData();
       },[search])

    const contextValue = {
            food_list,
            cartItems,
            setCartItems,
            addToCart,
            removeFromCart,
            getTotalCartAmount,
            url,
            token,
            setToken,
            setSearch,
            search
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
 }

 export default StoreContextProvider;