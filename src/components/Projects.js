import { products } from "../data/Products"
export const Projects = () =>{
   return(
    <div className="products">
        {products.map((product)=>{
            return(
                <div className="product" key={product.productName}>
                    {/* <h4 className='product__name'>{product.productName}</h4>
                    <p className='product__desc'>{product.productDesc}</p> */}
                    <img className='product__image'src={product.productImg} alt="sealtabs info page" />
                </div>
            )
        })}
    </div>
   )
}