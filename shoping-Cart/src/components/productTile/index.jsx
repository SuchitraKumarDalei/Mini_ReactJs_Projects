import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopingCartContext } from "../../context";

export default function ProductTile({ singleItem }) {
    const {handleAddtoCart,cartItem} = useContext(ShopingCartContext);
    const navigate = useNavigate();
    function handleNavigateToProductDetailPage(currentProductId){
        
        navigate(`/product-details/${currentProductId}`);
        
    }
    return (
        <div className=" relative gruop shadow-2xl p-6 cursor-pointer rounded-md">
            <div className="overflow-hidden aspect-w-1 aspect-h-1">
                <img src={singleItem.thumbnail}
                    alt={singleItem.title}
                    className="object-cover h-full w-full duration-300 transition-all hover:scale-125 "
                />
            </div>
            <div className="flex items-start justify-between mt-4">
                <div className="font-bold text-white-100 text-xs    sm:text-sm md:text-base  ">
                    <p className=" text-[#dad3d3] w-[120px] overflow-hidden text-ellipsis whitespace-nowrap ">{singleItem.title}</p>
                </div>
                <div className="text-right">
                    <p className="text-[#dad3d3] font-bold text-white-100 text-xs    sm:text-sm md:text-base " >${singleItem.price}</p>
                </div>
            </div>
            <button className="border mt-5  text-bold bg-yellow-600 text-[#fcf8f8] text-lg rounded-full hover:bg-[#956909] hover:border-[#956909]"
            onClick={()=>handleNavigateToProductDetailPage(singleItem.id)}
            >View Details</button>
            <button disabled={cartItem?.findIndex(singleitem=> singleitem?.id === singleItem?.id)>-1} className=" disabled:opacity-65 disabled:hover:bg-yellow-600 border mt-5  text-bold bg-yellow-600 text-[#fcf8f8] text-lg rounded-full hover:bg-[#956909] hover:border-[#956909]"
            onClick={()=>handleAddtoCart(singleItem)}
            >Add to cart</button>
        </div>
    )
}