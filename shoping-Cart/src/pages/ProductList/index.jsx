import { useContext } from "react";
import { ShopingCartContext } from "../../context";
import ProductTile from "../../components/productTile";

function ProductListPage() {
    const { ProductList, Loading } = useContext(ShopingCartContext);
    
    return (
        <section>
            <div className="mx-350 text-[#00BFFF]" style={{margin:"4px 0",textAlign:"center",fontWeight:"bold  "}}>
                <h1>ProductList Page</h1>
            </div>
            <div className="grid grid-cols-2 gap-5 mt-10 mx-10 lg:mt-15 lg:grid-cols-4 lg:gap-7">
                {   
                    !Loading?
                        ProductList && ProductList.length>0?
                            ProductList.map(singleItem => <ProductTile key={singleItem.id}   singleItem={singleItem}/> )
                        : <h3>NO record found</h3>
                    : <h2 className="mx-350">Fetching data.....</h2>
                }
            </div>
        </section>
    )
}
export default ProductListPage;