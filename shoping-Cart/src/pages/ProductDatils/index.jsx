import { useEffect ,useContext} from "react";
import { useNavigate, useParams} from "react-router-dom";
import { ShopingCartContext } from "../../context";

function ProductDetailsPage(){
    const {id} = useParams();
    
    const { productDetail, 
        setProductDetail,
        Loading,setLoading,
        handleAddtoCart,
        cartItem 
    } = useContext(ShopingCartContext);
    async function fetchProductDetail() {
        const apiResponse = await fetch(`https://dummyjson.com/products/${id}`);
        const result = await apiResponse.json();
        
        // console.log(result);

        if(result) {
            setProductDetail(result);
            setLoading(false);
        }
    }
    if(Loading) return <h1>Fetching product details.Please wait.....</h1>
    useEffect(()=>{
        fetchProductDetail();
    },[id]); 
    
    return (
        <div className="p-6 lg:max-w-7xl max-w-4xl mx-auto">
            <div className="grid items-center grid-cols-1 lg:grid-cols-5 p-6 gap-12 shadow-md ">
                <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
                    <div className="px-4 py-10 rounded-xl shadow-lg relative">
                        <img className="w-4/5 rounded object-cover hover:scale-105 cursor-pointer"
                        src={productDetail?.thumbnail} 
                        alt={productDetail?.title}
                        />
                    </div>
                    <div className=" mt-6 mx-auto flex flex-wrap justify-center gap-6" >
                        {
                            
                            productDetail?.images.lenght ?
                                productDetail?.images?.map(imageItem=> 
                                    <div className="rounded-lx shadow-sm  p-4" >
                                        <img className="w-24 cursor-pointer" src={imageItem} alt='product secondary Images' />
                                    </div>,
                                )
                            :null
                            
                        }
                    </div>
                </div>
                <div className="lg:col-span-2 ">
                    <h2 className="text-2xl font-extrabold text-[#00BFFF]"> 
                        {productDetail?.title}
                    </h2>
                    <div className="flex flex-wrap gap-4 mt-4">
                        <p className="text-xl font-bold text-[#b8b2b2]">${productDetail?.price}</p>
                    </div>
                    <div>
                        <button disabled={productDetail ? 
                            cartItem.findIndex(cartitm=>cartitm.id === productDetail.id)>-1
                        :false} onClick={()=>handleAddtoCart(productDetail)}
                        className=" disabled:opacity-65 disabled:border-none min-w-[200px] mt-5 px-4 py-3 border border-[#00BFF] text-sm font-semibold rounded-md text-[#b8b2b2]">
                            Add to cart</button>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}
export default ProductDetailsPage;