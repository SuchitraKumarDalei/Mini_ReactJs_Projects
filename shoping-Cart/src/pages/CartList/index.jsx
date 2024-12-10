import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopingCartContext } from "../../context";
import CartTile from "../../components/carttile";

function CartListPage(){
    const {cartItem} = useContext(ShopingCartContext);
    // console.log(cartItem);
    const navigate = useNavigate();
    return (
        <div className="max-w-5xl mx-auto max-md:max-w-xl py-4">
            <h1 className="font-bold text-2xl text-center text-[#d8d0d0]">Your Cartlist</h1>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="md:col-span-2 space-y-4">
                    {
                        cartItem?.length > 0 ?
                            cartItem.map((singleCartItem) => 
                            <CartTile key={singleCartItem.id} singleCartItem={singleCartItem}/>
                            )
                        : <h1>No item is added to cart ! please add some item into cart to buy </h1>
                    }

                </div>
                <div className="bg-[#393939] rounded-md p-4 h-max">
                    <h3 className="text-[#b8b2b2] text-xl font-extrabold border-b pb-2">Order summary</h3>
                    <ul className="text-[#b8b2b2] mt-4 space-y-4">
                        <p className="flex flex-wrap gap-4 text-sm font-bold">
                            Total <span>$ {cartItem?.reduce((acc,curr)=>
                            acc+curr.totalPrice,0)}</span>
                        </p>
                    </ul>
                    <div className=" flex gap-2 mt-5">
                        <button disabled={cartItem.length === 0} className=" disabled:opacity-60 disabled:hover:bg-[#13a7d8] px-4 py-3 bg-[#13a7d8] text-sm  font-bold hover:bg-[#0a78a0] hover:border-[#0d90bf]">Checkout</button>
                        <button onClick={()=> navigate('/product-list')}  className="px-4 py-3 bg-[#13a7d8] text-sm font-bold 
                        hover:bg-[#0a78a0] hover:border-[#0d90bf]" >Continue Shopping</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CartListPage;