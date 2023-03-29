import cwx from '../assests/our products/cwx.png'
import resonance from '../assests/our products/resonance.png'
import sealtabs from '../assests/our products/sealtabsInfo.png'
const products = [
    {
        productName:'Sealtabs',
        productDesc:'',
        productImg:sealtabs
    },
    {
        productName:'CWX',
        productDesc:'',
        productImg:cwx
    },
    {
        productName:'Resonance',
        productDesc:'',
        productImg:resonance
    },
]
export const Work=()=>{
    return(
        <>
            <h2>Our Work</h2>
            <div className="products">
                {products.map((product)=>{
                    return(
                        <div className="product" key={product.productName}>
                            <h2 className='product__name'>{product.productName}</h2>
                            <p className='product__desc'>{product.productDesc}</p>
                            <img className='product__image'src={product.productImg} alt="sealtabs info page" 
                            width='200px'/>
                        </div>
                    )
                })}
            </div>
        </>
    )
}