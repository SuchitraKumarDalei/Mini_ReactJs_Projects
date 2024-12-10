import { Fragment, useContext } from "react";
import { ShopingCartContext } from "../../context";

export default function CartTile({singleCartItem}){
    const{handleRemoveFromCart,
            handleAddtoCart,
        } = useContext(ShopingCartContext);
    return(
        <Fragment>
            <div className="grid grid-cols-3 item-start gap-5">
            <div className="col-span-2 flex item-start gap-4">
                <div className="h-28 w-28 max-sm:w-20 shrink-0 p-1 rounded">
                    <img src={singleCartItem.thumbnail} 
                        className="w-full h-full object-contain"
                    />
                </div>
                <div className="" >
                    <h3 className="text-base font-bold text-[#b8b2b2]">{singleCartItem.title}</h3>
                    <button className="text-sm py-3 px-4 font-bold mt-3  bg-[#13a7d8] hover:bg-[#0a78a0] hover:border-[#0d90bf] " onClick={()=>handleRemoveFromCart(singleCartItem,true)}>Remove</button>
                </div>
            </div>
            <div className="ml-auto items-center">
                <h3 className="text-lg font-bold text-[#b8b2b2]">
                    {singleCartItem.totalPrice}
                </h3>
                <p className="text-lg font-bold mt-2 text-[#b8b2b2] ">Qty : {singleCartItem.quantity}</p>
                <div className="mt-2 flex gap-1 mr-3">
                    <button onClick={()=>handleAddtoCart(singleCartItem)}>+</button>
                    <button 
                        className="disabled : opacity-85 disabled:hover:border-[#1a1a1a]"
                        onClick={()=>handleRemoveFromCart(singleCartItem,false)}
                        disabled={singleCartItem.quantity === 1}   
                    >-</button>
                </div>
            </div>
            
        </div>
        <hr className=" border-[#646262]" />
        </Fragment>
    )
}