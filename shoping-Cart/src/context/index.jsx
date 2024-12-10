import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ShopingCartContext = createContext(null);

function ShopingCartProvider({children}){

    const[Loading,setLoading] = useState(false);
    const[ProductList,setProductList] = useState(null);
    const[productDetail,setProductDetail] = useState(null);
    const[cartItem,setCartItem] = useState([]);
    const navigate = useNavigate();

    async function fetchListOfProducts(){
        setLoading(true);
        const apiResponse = await fetch('https://dummyjson.com/products');
        const result = await apiResponse.json();
        // console.log(result);
        
        if(result && result.products){
            setProductList(result.products);
            setLoading(false);
        }
    }
    function handleAddtoCart(getCurrentItem){
        
        let cpyCartItem = [...cartItem];
        const findIndexOfCurrentItem = cpyCartItem.findIndex((cartItems)=>
            getCurrentItem.id === cartItems.id
        );

        // console.log(findIndexOfCurrentItem);

        if(findIndexOfCurrentItem === -1){
            cpyCartItem.push({
                ...getCurrentItem,
                quantity : 1,
                totalPrice : getCurrentItem?.price,
            })
        }else{
            cpyCartItem[findIndexOfCurrentItem] = {
                ...cpyCartItem[findIndexOfCurrentItem],
                quantity : cpyCartItem[findIndexOfCurrentItem].quantity + 1,
                totalPrice : ((cpyCartItem[findIndexOfCurrentItem].quantity + 1)
                *(cpyCartItem[findIndexOfCurrentItem].price).toFixed(2)),
            }
        }
        // console.log(cpyCartItem);
        setCartItem(cpyCartItem);
        localStorage.setItem('cartItem',JSON.stringify(cpyCartItem));
        navigate('/cart-list');
    }

    function handleRemoveFromCart(sinlgeCartItem,isFullyRemove){
        let cpyExistingCartItem = [...cartItem];
        const findIndexOfcurrItem = cpyExistingCartItem.findIndex(singleItem=>
            singleItem.id === sinlgeCartItem.id
        )

        if(isFullyRemove){
            cpyExistingCartItem.splice(findIndexOfcurrItem,1);
        }else{
            cpyExistingCartItem[findIndexOfcurrItem] = {
                ...cpyExistingCartItem[findIndexOfcurrItem],
                quantity : cpyExistingCartItem[findIndexOfcurrItem].quantity-1,
                totalPrice : (cpyExistingCartItem[findIndexOfcurrItem].quantity-1)*(cpyExistingCartItem[findIndexOfcurrItem].price),
            }
        }
        setCartItem(cpyExistingCartItem);
        localStorage.setItem('cartItem',JSON.stringify(cpyExistingCartItem));
    }

    useEffect(()=>{
        fetchListOfProducts();
        setCartItem(JSON.parse(localStorage.getItem('cartItem') ||[]));
    },[]);

   return(
    <ShopingCartContext.Provider value={{                   
        ProductList,
        Loading,
        setLoading,
        productDetail,
        setProductDetail,
        handleAddtoCart,
        cartItem,
        handleRemoveFromCart,
    }}>{children}</ShopingCartContext.Provider>
   )
}
export default ShopingCartProvider;